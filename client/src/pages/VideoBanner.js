// src/components/VideoBanner.js
import React, { useRef, useState } from "react";
import "../components/Styles/VideoBanner.css"; // Ensure you create a CSS file for styling
import video from "../components/Images/video2.mp4";
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";
import { BsVolumeUpFill } from "react-icons/bs";
import { FaVolumeDown } from "react-icons/fa";

const VideoBanner2 = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1); // Volume range is 0.0 to 1.0

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume > 0) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const renderVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <BiSolidVolumeMute />;
    } else if (volume < 0.5) {
      return <FaVolumeDown />;
    } else {
      return <BsVolumeUpFill />;
    }
  };

  return (
    <div className="video-banner">
      <video
        className="video-banner__video"
        autoPlay
        loop
        ref={videoRef}
        muted={isMuted}
        volume={volume}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="volume-control">
        <button onClick={handleMuteToggle} className="volume-button">
          {renderVolumeIcon()}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default VideoBanner2;
