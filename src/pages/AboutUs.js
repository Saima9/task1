import React from "react";
import "./AboutUs.css";
import BottomNav from "../components/BottomNav";
import profilePic from "../assets/profilePic.png";
const AboutUs = () => {
  return (
    <div>
    <div className="about-container">
      <h2>About Us</h2>
      <img src={profilePic} alt="About" className="about-img" />
      
       <p> We are a team of dedicated professionals driven by creativity, innovation, and a passion for exceptional design...
       
        </p>
         </div>
   <div> <BottomNav/></div></div>
  )
};

export default AboutUs;

