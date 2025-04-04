
import React from "react";
import { FaHome, FaClipboardList, FaBell, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item">
        <FaHome className="icon" />
        <span>Home</span>
      </Link>
      <div className="nav-item">
        <FaClipboardList className="icon" />
        <span>Compliance</span>
      </div>
      <div className="nav-item">
        <FaBell className="icon" />
        <span>Reminder</span>
      </div>
      <Link to="/about" className="nav-item">
        <FaUser className="icon" />
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default BottomNav;
