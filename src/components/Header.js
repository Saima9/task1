import React from "react";
import "./Header.css";
import profilePic from "../assets/profilePic.png";

const Header = () => {
  return (
    <div className="header">
      <div className="user-info">
        <img src={profilePic} alt="User" className="profile-pic" />
        <div>
          <p>Hello, Welcome 🎉</p>
          <h3>John Weak</h3>
        </div>
      </div>
      <div className="bell-icon">🔔</div>
    </div>
  );
};

export default Header;
