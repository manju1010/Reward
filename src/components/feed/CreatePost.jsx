import React, { useState } from 'react';

export const CreatePost = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [media, setMedia] = useState(null);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const type = file.type.startsWith('video') ? 'video' : 'image';
      setMedia({ type, url });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() || media) {
      onSubmit(content, media);
      setContent('');
      setMedia(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 mb-6">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        rows={3}
      />
      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleMediaChange}
        className="mt-2"
      />
      <div className="flex justify-end mt-3">
        <button
          type="submit"
          disabled={!content.trim() && !media}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
        >
          Post
        </button>
      </div>
    </form>
  );
};