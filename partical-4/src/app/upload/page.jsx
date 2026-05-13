'use client';
import { useState } from 'react';
import { useAuth } from '../../contexts/authContext';
import { useRouter } from 'next/navigation';
import { uploadToSupabase } from '../../services/uploadService';

export default function UploadPage() {
  const [caption, setCaption] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadProgress, setUploadProgress] = useState('');
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert('Please login to upload videos');
      return;
    }
    if (!videoFile) {
      setError('Please select a video file');
      return;
    }
    setLoading(true);
    setError('');

    try {
      // Step 1: Upload video to Supabase
      setUploadProgress('Uploading video to cloud...');
      const videoResult = await uploadToSupabase(videoFile, 'Video');

      // Step 2: Upload thumbnail to Supabase if exists
      let thumbnailResult = null;
      if (thumbnailFile) {
        setUploadProgress('Uploading thumbnail to cloud...');
        thumbnailResult = await uploadToSupabase(thumbnailFile, 'thumbnails');
      }

      // Step 3: Save metadata to backend
      setUploadProgress('Saving video details...');
      const token = localStorage.getItem('token');

      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('videoUrl', videoResult.url);
      formData.append('videoStoragePath', videoResult.path);

      if (thumbnailResult) {
        formData.append('thumbnailUrl', thumbnailResult.url);
        formData.append('thumbnailStoragePath', thumbnailResult.path);
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/videos`,
        {
          method: 'POST',
          headers: {
            ...(token && { Authorization: `Bearer ${token}` }),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            caption,
            videoUrl: videoResult.url,
            videoStoragePath: videoResult.path,
            thumbnailUrl: thumbnailResult?.url || null,
            thumbnailStoragePath: thumbnailResult?.path || null,
          }),
        }
      );

      if (!response.ok) throw new Error('Failed to save video details');

      alert('Video uploaded successfully!');
      router.push('/');
    } catch (err) {
      console.error(err);
      setError('Upload failed: ' + err.message);
    } finally {
      setLoading(false);
      setUploadProgress('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Upload Video</h1>

      {!isAuthenticated && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <p className="text-yellow-700">Please login to upload videos</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {uploadProgress && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
          <p className="text-blue-700">{uploadProgress}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <div className="w-64 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center">
            {videoFile ? (
              <div>
                <p className="text-green-600 font-medium">✓ Video selected</p>
                <p className="text-sm text-gray-500 mt-1">{videoFile.name}</p>
                <button
                  type="button"
                  onClick={() => setVideoFile(null)}
                  className="mt-2 text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div>
                <p className="text-4xl text-gray-400 mb-2">+</p>
                <p className="text-sm text-gray-500 mb-4">Select video to upload</p>
                <p className="text-xs text-gray-400">MP4 or WebM</p>
                <p className="text-xs text-gray-400">Up to 10 minutes</p>
                <label className="mt-4 inline-block bg-red-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-red-600">
                  Select File
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => setVideoFile(e.target.files[0])}
                  />
                </label>
              </div>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Caption</label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Add a caption..."
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Thumbnail (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnailFile(e.target.files[0])}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Who can view</label>
              <select className="w-full p-2 border rounded-md focus:outline-none">
                <option>Public</option>
                <option>Friends</option>
                <option>Private</option>
              </select>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={() => router.push('/')}
                className="px-6 py-2 border rounded-md hover:bg-gray-50"
              >
                Discard
              </button>
              <button
                type="submit"
                disabled={loading || !videoFile}
                className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
              >
                {loading ? uploadProgress || 'Uploading...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}