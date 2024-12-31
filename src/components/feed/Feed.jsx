import React, { useState, useEffect, useCallback } from 'react';
import { PostCard } from './PostCard';
import { CreatePost } from './CreatePost';
import { CommentDialog } from './CommentDialog';

const images = [
  'https://via.placeholder.com/600x300?text=Beautiful+Landscape',
  'https://via.placeholder.com/600x300?text=City+View',
  'https://via.placeholder.com/600x300?text=Forest+Trail',
  'https://via.placeholder.com/600x300?text=Ocean+Sunset',
  'https://via.placeholder.com/600x300?text=Mountain+Peak',
];

const videos = [
  'https://www.w3schools.com/html/mov_bbb.mp4', // Example video
  'https://www.w3schools.com/html/movie.mp4',  // Example video
  'https://samplelib.com/lib/preview/mp4/sample-5s.mp4', // Example video
  'https://samplelib.com/lib/preview/mp4/sample-10s.mp4', // Example video
];

const fetchRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const fetchRandomVideo = () => {
  const randomIndex = Math.floor(Math.random() * videos.length);
  return videos[randomIndex];
};

export const Feed = ({ onEngagement }) => {
  const [posts, setPosts] = useState([]);
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    const newPosts = Array.from({ length: 5 }).map((_, idx) => ({
      id: (page * 5 + idx).toString(),
      author: {
        id: `user${page * 5 + idx}`,
        name: `User ${page * 5 + idx}`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=User${page * 5 + idx}`,
      },
      content: `This is post content number ${page * 5 + idx}`,
      media: idx % 2 === 0
        ? { type: 'image', url: fetchRandomImage() }
        : { type: 'video', url: fetchRandomVideo() },
      createdAt: new Date().toISOString(),
      likes: Math.floor(Math.random() * 100),
      comments: 0,
      shares: 0,
      isLiked: false,
      commentsList: [],
    }));
    setPosts((prevPosts) => [...prevPosts, ...newPosts]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const handleCreatePost = (content, media) => {
    const newPost = {
      id: Date.now().toString(),
      author: {
        id: 'current-user',
        name: 'You',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
      },
      content,
      media,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: 0,
      shares: 0,
      isLiked: false,
      commentsList: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked,
        };
      }
      return post;
    }));
    onEngagement('like');
  };

  const handleComment = (postId) => {
    setSelectedPostId(postId);
    setCommentDialogOpen(true);
  };

  const handleCommentSubmit = (content) => {
    if (selectedPostId) {
      setPosts(posts.map(post => {
        if (post.id === selectedPostId) {
          const newComment = {
            id: Date.now().toString(),
            author: {
              id: 'current-user',
              name: 'You',
              avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=You',
            },
            content,
            createdAt: new Date().toISOString(),
          };
          return {
            ...post,
            comments: post.comments + 1,
            commentsList: [...post.commentsList, newComment],
          };
        }
        return post;
      }));
      onEngagement('comment');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost onSubmit={handleCreatePost} />
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>
      {loading && <div className="text-center">Loading more posts...</div>}
      <CommentDialog
        isOpen={commentDialogOpen}
        onClose={() => setCommentDialogOpen(false)}
        onSubmit={handleCommentSubmit}
      />
    </div>
  );
};
