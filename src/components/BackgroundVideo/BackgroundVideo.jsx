import React, { useState, useRef, useEffect } from 'react';
import './BackgroundVideo.css';
import TabButton from '../TabButton/TabButton';

function Hero() {
  const [play, setPlay] = useState(true);
  const [isSticky, setIsSticky] = useState(false); // Add this line
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(!play);
  };

  const handleScroll = () => {
    const tabButtons = document.getElementById("tab-buttons");
    const hero = document.getElementById("hero");
    const heroBottom = hero.getBoundingClientRect()['bottom'];
    const isAtbottom = heroBottom <= tabButtons.getBoundingClientRect()['height']*2;
    setIsSticky(isAtbottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero container" id="hero">
      <video
        ref={videoRef}
        src="test_video.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
        className="hero-video"
      />
      <div className="video-gradient"></div> {/* This is the new gradient div */}
      <div className="hero-text">
        <h1 className="h1Title">Creating video from text</h1>
        <p className="backgroundVideoP" id="backgroundVideoP">Sora is an AI model that can create realistic and imaginative scenes from text instructions.</p>
        
        <div className="report-button-div">
          <button className="reportButton"><a href='https://www.cs.jhu.edu/~alanlab/Pubs23/qu2023abdomenatlas.pdf' target='_blank'><b>Read technical report</b></a></button>
        </div>
      </div>

      <div className="backgroundVideoBelowText">
        <p>All videos on this page were generated directly by Sora without modification.</p>
        <div className={`tab-buttons ${isSticky? "sticky" : ""}`} id="tab-buttons">
            <TabButton label={'AbdomenAtlas 1.0'} targetId={"section1"} />
            <TabButton label={'AbdomenAtlas 1.1'} targetId={"section2"} />
            <TabButton label={'BodyMaps'} targetId={"section3"} />
        </div>
      </div>
      <div className="play-button-div">
        <button className="play-button" onClick={togglePlay}>
        {play ? <>
                  <span className="long-play-button-text"><i className="fas fa-pause"></i><span className="icon-text-space"> Pause</span></span>
                  <span className="short-play-button-text"><i className="fas fa-pause"></i><span className="icon-text-space"></span></span>
                </> : 
                <>
                  <span className="long-play-button-text"><i className="fas fa-play"></i><span className="icon-text-space"> Play</span></span>
                  <span className="short-play-button-text"><i className="fas fa-play"></i><span className="icon-text-space"></span></span>
                </>
                }
        </button>
      </div>
    </div>
  )
}

export default Hero;
