import React, { useState } from "react";
import profilePic from "../assets/assets_frontend/profile_pic.png";
import { FaPen } from "react-icons/fa"; // Importing an edit icon

function Profile() {
  // State to manage editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("Jack");
  const [followers, setFollowers] = useState(132);
  const [following, setFollowing] = useState(181);
  const [posts, setPosts] = useState(0);
  const [name, setName] = useState("Jack_18");
  const [bio, setBio] = useState("Life is a magic. Live the life as you want ❤️");
  const [college, setCollege] = useState("University of Life");
  const [year, setYear] = useState(26);
  const [profileImage, setProfileImage] = useState(profilePic); // State to store profile image URL

  const handleSave = () => {
    setIsEditing(false);
  };

  // Function to handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the selected image as profile picture
      };
      reader.readAsDataURL(file); // Convert the image file to base64 URL
    }
  };

  return (
    <div className="flex flex-col items-center text-center font-sans">
      {/* Profile Image */}
      <div className="relative mt-6">
        <img
          src={profileImage || "https://via.placeholder.com/150"} // Use profileImage state for the dynamic image
          alt="profile"
          className="w-28 h-28 rounded-full border-2 border-gray-800 object-cover"
        />
        
        {/* Edit icon - visible only when in Edit mode */}
        {isEditing && (
          <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-2 cursor-pointer">
            <label htmlFor="file-input">
              <FaPen size={16} />
            </label>
          </div>
        )}

        {/* File input - visible only when in Edit mode */}
        {isEditing && (
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 cursor-pointer absolute top-0 left-0 opacity-0"
          />
        )}
      </div>

      {/* Username */}
      <h2 className="text-xl font-bold mt-4">{username}</h2>

      {/* Buttons */}
      <div className="flex space-x-4 mt-2">
        {isEditing ? (
          <button
            className="px-4 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleSave}
          >
            Save
          </button>
        ) : (
          <button
            className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
            onClick={() => setIsEditing(true)}
          >
            Edit profile
          </button>
        )}
        <button className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300">
          View archive
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-center space-x-8 mt-4">
        <p className="text-sm">
          <span className="font-bold">{posts}</span> posts
        </p>
        <p className="text-sm">
          <span className="font-bold">{followers}</span> followers
        </p>
        <p className="text-sm">
          <span className="font-bold">{following}</span> following
        </p>
      </div>

      {/* Bio and College Info */}
      <div className="mt-4">
        <p className="font-semibold text-lg">
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-lg font-semibold border-b-2 border-gray-300 focus:outline-none"
            />
          ) : (
            name
          )}
        </p>
        <p className="text-gray-600">
          {isEditing ? (
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="text-gray-600 border-b-2 border-gray-300 focus:outline-none"
            />
          ) : (
            `${college} 🔥 '${year}`
          )}
        </p>
        <p className="italic text-gray-800">
          {isEditing ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="text-gray-800 border-b-2 border-gray-300 focus:outline-none w-full"
            />
          ) : (
            bio
          )}
        </p>
      </div>
    </div>
  );
}

export default Profile;
