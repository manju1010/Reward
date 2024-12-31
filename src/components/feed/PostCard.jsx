import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';

export const PostCard = ({ post, onLike, onComment }) => {
  const timeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-semibold">{post.author.name}</h3>
          <p className="text-sm text-gray-500">{timeAgo}</p>
        </div>
      </div>

      <p className="mb-4">{post.content}</p>

      {post.media && post.media.type === 'image' && (
        <img src={post.media.url} alt="Post Media" className="w-full rounded-lg mb-4" />
      )}

      {post.media && post.media.type === 'video' && (
        <video controls className="w-full rounded-lg mb-4">
          <source src={post.media.url} type="video/mp4" />
        </video>
      )}

      <div className="flex items-center justify-between border-t pt-3">
        <button
          onClick={() => onLike(post.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-red-500"
        >
          {post.isLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
          <span>{post.likes}</span>
        </button>

        <button
          onClick={() => onComment(post.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-blue-500"
        >
          <FaComment />
          <span>{post.comments}</span>
        </button>
      </div>
    </div>
  );
};
