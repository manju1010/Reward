import React from 'react';
import rewardsData from '../data/rewards.js'; // Import rewards data

export const RewardsList = ({ rewards = rewardsData, userPoints, onRedeem }) => {
  // Log rewards data for debugging
  console.log('Rewards:', rewards);

  // Check if rewards is properly imported and contains data
  if (!rewards || rewards.length === 0) {
    return <p>No rewards available at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {rewards.map((reward) => (
        <div
          key={reward.id}
          className="p-4 rounded-lg border-2 border-purple-200 bg-purple-50"
        >
          <h3 className="font-semibold">{reward.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{reward.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-purple-600 font-medium">
              {reward.pointsCost} points
            </span>
            <button
              onClick={() => onRedeem(reward)}
              disabled={userPoints < reward.pointsCost || !reward.available}
              className={`px-4 py-2 rounded text-white ${
                userPoints < reward.pointsCost || !reward.available
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Redeem
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
