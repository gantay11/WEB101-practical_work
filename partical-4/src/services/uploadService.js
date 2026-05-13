import supabase from '../lib/supabase';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const getToken = () => localStorage.getItem('token');

// Upload file directly to Supabase Storage
export const uploadToSupabase = async (file, bucket) => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `public/${fileName}`;

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw new Error(`Upload failed: ${error.message}`);

  const { data } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return { path: filePath, url: data.publicUrl };
};

// Upload video metadata to backend after uploading files to Supabase
export const uploadVideo = async (formData) => {
  const response = await fetch(`${API_URL}/videos`, {
    method: 'POST',
    headers: {
      ...(getToken() && { Authorization: `Bearer ${getToken()}` }),
    },
    body: formData,
  });
  return response.json();
};

export const uploadService = {
  uploadVideo,
  uploadToSupabase,
};