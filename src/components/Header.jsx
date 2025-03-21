import React, { useState } from 'react';

import video1 from '../assets/135162-761273567_small.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';

import './header.css';

const videoSources = [video1, video2, video3];

export default function Header() {
  const [videoIndex, setVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    const nextIndex = (videoIndex + 1) % videoSources.length;
    setVideoIndex(nextIndex);
  };

  return (
    <div className="header-container">
      <video
        className="background-video"
        autoPlay
        muted
        onEnded={handleVideoEnd}
        key={videoIndex} // Forces re-render on video change
      >
        <source src={videoSources[videoIndex]} type="video/mp4" />
      </video>
      <div className="overlay-content">
        <h1>ELOVON</h1>
        <h1>Where Power Meets Purpose</h1>
        <h1>Get Fit Get Lit Get Elovon</h1>
        <button>Join Now</button>
      </div>
    </div>
  );
}
