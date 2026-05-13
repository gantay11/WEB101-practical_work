'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback } from 'react';
import VideoCard from './VideoCard';
import { getVideos, getFollowingVideos } from '../../services/videoService';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import { useAuth } from '../../contexts/authContext';

export default function VideoFeed({ feedType = 'forYou' }) {
  const { isAuthenticated } = useAuth();

  const fetchFn = feedType === 'following' ? getFollowingVideos : getVideos;
  const queryKey = feedType === 'following' ? ['videos', 'following'] : ['videos', 'forYou'];

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) => fetchFn({ pageParam }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage?.pagination?.nextCursor ?? undefined, // ✅ only one line
    enabled: feedType === 'forYou' || isAuthenticated,
  });

  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const loadMoreRef = useIntersectionObserver(handleLoadMore);

  if (status === 'pending') {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-red-500">
          Failed to load videos. Make sure backend is running.
        </p>
      </div>
    );
  }

  const videos = data?.pages?.flatMap((page) => page?.videos ?? []) ?? [];

  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-xl font-semibold text-gray-700 mb-2">
          {feedType === 'following'
            ? 'Follow some users to see their videos!'
            : 'No videos yet!'}
        </p>
        <p className="text-gray-500">
          {feedType === 'following'
            ? 'Videos from people you follow will appear here.'
            : 'Be the first to upload a video.'}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-[550px] mx-auto py-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}

      {/* Infinite scroll trigger */}
      <div ref={loadMoreRef} className="py-4 flex justify-center">
        {isFetchingNextPage && (
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
        )}
        {!hasNextPage && videos.length > 0 && (
          <p className="text-gray-400 text-sm">No more videos</p>
        )}
      </div>
    </div>
  );
}