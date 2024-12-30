import React, { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import dropdownIcon from "../assets/assets_frontend/dropdown_icon.svg";

import kynLogo from "../assets/assets_frontend/kynLogo.svg";
import profilePic from "../assets/assets_frontend/profile_pic.png";


const Navbar = () => {
  const [token, SetToken] = useState(true); // State for token management
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400">
      <img
        onClick={() => navigate("/")}
        src={kynLogo} // Updated to use the correct logo import
        alt="Company Logo"
        className="w-22 cursor-pointer"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-4">HOME</li>
        </NavLink>

        <NavLink to="/creaters">
          <li className="py-4">CREATERS</li>
        </NavLink>

        <NavLink to="/feed">
          <li className="py-4">FEED</li>
        </NavLink>

        <NavLink to="/dashboard">
          <li className="py-4">DASHBOARD</li>
        </NavLink>

        <NavLink to="/about">
          <li className="py-4">ABOUT</li>
        </NavLink>

        <NavLink to="/contact">
          <li className="py-4">CONTACT</li>
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {/* Conditional rendering based on token */}
        {token ? (
          <div className="flex items-center gap-2 group relative cursor-pointer">
            <img
              className="w-8 rounded-full"
              src={profilePic} // Profile picture from assets
              alt="User Profile"
            />
            <img
              className="w-2.5"
              src={dropdownIcon} // Dropdown icon from assets
              alt="Dropdown Icon"
            />
            {/* Dropdown menu */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 flex flex-col bg-stone-100 rounded gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-rewards")}
                  className="hover:text-black cursor-pointer"
                >
                  My Rewards
                </p>
                <p
                  onClick={() => SetToken(false)} // Logout: Set token to false
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          // "Create Account" button when token is false
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            CREATE ACCOUNT
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
