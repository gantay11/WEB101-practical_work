'use client';
import { usestate } from "react";
import {
    Faheart, Farheart, FaComment, FaShare, FaMusic
} from 'react-icons/fa';

export default function VideoCard({ video }) {
    const [liked, setLiked] = useState(false);

    // placeholder data
    const{ username, caption, audio, Likes, comments, shares } = post;

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="flex py-6 border-b">
            {/* User avatar */}
            <div className="mr-3">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>   
            </div>
        
        <div className="flex-1">
            {/* user info and caption */}
            <div className="mb-2">
                <span className="font-bold hover:underline cursor-pointer">{username}</span>
                <span className="text-sm ml-1:">. 2d ago</span>
                <p className="text-sm mt-1">{caption}</p>
            </div>
            {/* audio info */}
            <div className="flex item-center text-sm mb-3">
                <FaMusic className="mr-2 text-xs" />
                <span className="truncate max-w-[250px]">{audio}</span>
            </div>
            <div className="flex">
                {/* video container*/}
                <div className="mr-5 w-[300px] h-[530px] bg-black rounded-md flex items-center justify-center relative overflow-hidden">
                    <p className="text-white">Video placeholder</p>
                    <div classname="absolute bottom-4 left-4 text-white text-sm">
                    </div>
                </div>

                {/* Tnteraction buttons*/}
                <div className="flex flex-col justify-end space-y-3 py-2">
                    {/* like button */}
                    <button
                    className="flex flex-col items-center"
                    onClick={handleLikelick}
                    >
                        <div classname="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            {liked ? (
                                <Faheart className="text-red-500" />
                            ) : (
                                <faRegHeart />
                            )}
                        </div>
                        <span className="text-sm mt-1">{liked ? likes + 1 : likes}</span>
                    </button>
                    {/* comment button */}
                    <button className="flex flex-col items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <FaComment />
                        </div>
                        <span className="text-sm mt-1">{shares}</span>
                    </button>
                    </div>
            </div>
        </div>
    </div>
);
}