const API_URL = 'http://localhost:8000/api';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

export const getVideos = async ({ pageParam = null }) => {
  const url = pageParam
    ? `${API_URL}/videos?cursor=${pageParam}&limit=5`
    : `${API_URL}/videos?limit=5`;

  const response = await fetch(url, { headers: getHeaders() });
  return response.json();
};

export const getFollowingVideos = async ({ pageParam = null }) => {
  const url = pageParam
    ? `${API_URL}/videos/following?cursor=${pageParam}&limit=5`
    : `${API_URL}/videos/following?limit=5`;

  const response = await fetch(url, { headers: getHeaders() });
  return response.json();
};

export const likeVideo = async (videoId) => {
  const response = await fetch(`${API_URL}/videos/${videoId}/like`, {
    method: 'POST',
    headers: getHeaders(),
  });
  return response.json();
};

export const unlikeVideo = async (videoId) => {
  const response = await fetch(`${API_URL}/videos/${videoId}/like`, {
    method: 'DELETE',
    headers: getHeaders(),
  });
  return response.json();
};

export const addComment = async (videoId, content) => {
  const response = await fetch(`${API_URL}/videos/${videoId}/comments`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({ content }),
  });
  return response.json();
};

export const uploadVideo = async (formData) => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_URL}/videos`, {
    method: 'POST',
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: formData,
  });
  return response.json();
};