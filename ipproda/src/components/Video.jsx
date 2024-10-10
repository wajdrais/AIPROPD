import React, { useEffect, useRef } from "react";
import videoFile from "../assests/logov.mp4"; // Make sure to adjust the path to your video

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const currentVideo = videoRef.current;

    const handleScroll = () => {
      if (currentVideo) {
        if (isElementInViewport(currentVideo)) {
          currentVideo.play();
        } else {
          currentVideo.pause();
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.bottom > 0 && // The bottom of the video is below the top of the viewport
      rect.top < (window.innerHeight || document.documentElement.clientHeight) // The top of the video is above the bottom of the viewport
    );
  };

  return (
  
    <div id="video"
      style={{
        marginBottom: "20px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        ref={videoRef}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loop
        autoPlay
        muted
        preload="auto"
      >
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
