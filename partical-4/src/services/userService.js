const API_URL = 'http://localhost:8000/api';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const getUserProfile = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    headers: getHeaders(),
  });
  return response.json();
};

// Alias for getUserProfile
export const getUserById = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const followUser = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/follow`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return response.json();
};

export const unfollowUser = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/follow`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

export const getUserFollowers = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/followers`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const getUserFollowing = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/following`, {
    headers: getHeaders(),
  });
  return response.json();
};

export const updateUser = async (userId, data) => {
  const response = await fetch(`${API_URL}/users/${userId}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });
  return response.json();
};

export const getUserVideos = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/videos`, {
    headers: getHeaders(),
  });
  return response.json();
};