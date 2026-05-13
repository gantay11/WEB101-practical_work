'use client';
import VideoCard from "./VideoCard";

//sample data for our feed
const DUMMY_POST = [
    {
        id: 1,
        username: "@user1",
        caption: "Check out this cool video!" #trending #viral',
        audio: "Original sound - user1",
        likes: 1234,
        comments: 432,
        shares: 89,
    },
    {
        id: 2,
        username: "@user2",
        caption:'learning to dance  #dance #fun #trending',
        audio: 'Popular sound - Artist',
        likes: 5678,
        comments: 321,
        shares: 52,
    },
    {
        id: 3,
        username: "@user3",
        caption: 'Beautiful sunset today #nature #sunset #vibes',
        audio: 'sunset vibes - Chill music',
        likes: 2468,
        comments: 135,
        shares: 46,
    }
];

export default function VideoFeed() {
    return (
        <div className="max-w-md mx-auto">
            {DUMMY_POST.map((post) => (
                <VideoCard key={post.id} video={post} />
            ))}
        </div>
    );
}
