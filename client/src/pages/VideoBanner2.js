// src/components/VideoBanner.js
import React from "react";
import "../components/Styles/VideoBanner.css"; // Ensure you create a CSS file for styling
import video from "../components/Images/television.mp4";

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video className="video-banner__video" autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBanner;
