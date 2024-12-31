import React from 'react';
import { Feed } from '../components/feed/Feed';

export const FeedPage = ({ onEngagement }) => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Feed onEngagement={onEngagement} />
    </div>
  );
};