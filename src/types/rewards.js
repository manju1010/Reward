export const achievements = [
    {
      id: 'first-post',
      name: 'First Post',
      description: 'Create your first post',
      pointsRequired: 10,
      icon: '📝',
      unlocked: false,
    },
    {
      id: 'social-butterfly',
      name: 'Social Butterfly',
      description: 'Make 10 comments',
      pointsRequired: 50,
      icon: '🦋',
      unlocked: false,
    },
    {
      id: 'influencer',
      name: 'Rising Influencer',
      description: 'Reach 100 likes on your posts',
      pointsRequired: 200,
      icon: '⭐',
      unlocked: false,
    },
    {
      id: 'viral',
      name: 'Viral Sensation',
      description: 'Get 50 shares on a single post',
      pointsRequired: 500,
      icon: '🌟',
      unlocked: false,
    },
  ];
  
  export const userStats = {
    points: 0,
    level: 1,
    posts: 0,
    comments: 0,
    likes: 0,
    shares: 0,
  };
  
  export const rewards = [
    {
      id: 'premium-week',
      name: 'Premium Week',
      description: '7 days of premium features',
      pointsCost: 1000,
      available: true,
    },
    {
      id: 'profile-badge',
      name: 'Special Badge',
      description: 'Exclusive profile badge',
      pointsCost: 500,
      available: true,
    },
    {
      id: 'custom-theme',
      name: 'Custom Theme',
      description: 'Unlock a custom profile theme',
      pointsCost: 750,
      available: true,
    },
  ];
  