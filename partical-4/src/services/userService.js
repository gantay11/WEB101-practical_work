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

export const getUserVideos = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}/videos`, {
    headers: getHeaders(),
  });
  return response.json();
};