// EngagementStats.js
import React from 'react';
import PropTypes from 'prop-types';

export const EngagementStats = () => {
  // Embedded stats data
  const engagementData = {
    posts: 120,
    comments: 45,
    likes: 300,
    shares: 75
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Posts" value={engagementData.posts} />
      <StatCard title="Comments" value={engagementData.comments} />
      <StatCard title="Likes" value={engagementData.likes} />
      <StatCard title="Shares" value={engagementData.shares} />
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

EngagementStats.propTypes = {
  stats: PropTypes.shape({
    posts: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    shares: PropTypes.number.isRequired
  }).isRequired
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default EngagementStats;
