import React from "react";


function PropsPage() {
  const profileData = {
    username: "manju_18._",
    followers: 132,
    following: 181,
    posts: 0,
    name: "manju",
    bio: "Life is a magic. Live the life as you want ❤️",
    college: "Rmkcet",
    year: 26,
    profileImage: "https://via.placeholder.com/150", // Replace with the actual profile image URL
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Profile {...profileData} />
    </div>
  );
}

export default PropsPage;
