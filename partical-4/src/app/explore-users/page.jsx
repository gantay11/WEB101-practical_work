'use client';
import { useState, useEffect } from 'react';
import { getAllUsers, followUser, unfollowUser } from '../../services/userService';
import { useAuth } from '../../contexts/authContext';
import { FaUserPlus, FaUserCheck } from 'react-icons/fa';

export default function ExploreUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [followingIds, setFollowingIds] = useState([]);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsers();
        // Handle both array and object responses safely
        const userList = Array.isArray(data) ? data : data?.users || [];
        setUsers(userList);
      } catch (err) {
        setError('Failed to load users');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleFollow = async (userId) => {
    if (!isAuthenticated) {
      alert('Please login to follow users');
      return;
    }
    try {
      if (followingIds.includes(userId)) {
        await unfollowUser(userId);
        setFollowingIds(followingIds.filter(id => id !== userId));
      } else {
        await followUser(userId);
        setFollowingIds([...followingIds, userId]);
      }
    } catch (err) {
      console.error('Follow error:', err);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-gray-500">Loading users...</p>
    </div>
  );

  if (error) return (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-red-500">{error}</p>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Explore Users</h1>
      {users.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No users found. Make sure your backend is running.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users
            .filter(u => u.id !== user?.id)
            .map((u) => (
              <div key={u.id} className="bg-white rounded-lg p-4 shadow text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  {u.avatar ? (
                    <img src={u.avatar} alt={u.username} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <span className="text-2xl text-gray-600">
                      {u.username?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="font-semibold text-sm">{u.username}</p>
                <p className="text-xs text-gray-500 mb-3">{u.email}</p>
                <button
                  onClick={() => handleFollow(u.id)}
                  className={`flex items-center justify-center gap-1 w-full py-1 px-3 rounded-full text-sm font-medium ${
                    followingIds.includes(u.id)
                      ? 'bg-gray-200 text-gray-700'
                      : 'bg-red-500 text-white hover:bg-red-600'
                  }`}
                >
                  {followingIds.includes(u.id) ? (
                    <><FaUserCheck /> Following</>
                  ) : (
                    <><FaUserPlus /> Follow</>
                  )}
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}