import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import identity from "../assests/identity.png";
import { useTranslation } from "react-i18next";
import play from "../assests/play.png";
import pause from "../assests/pause.png";

// Map languages to their respective audio files
const audioFiles = {
  ar: require("../assests/ARABIC.mp3"),
  fr: require("../assests/french.mp3"),
  de: require("../assests/german.mp3"),
  en: require("../assests/english.mp3"),
};

const Aboutus = () => {
  const { t, i18n } = useTranslation();
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const audio = audioRef.current;
    const handleAudioEnd = () => setIsPlaying(false);

    audio?.addEventListener("ended", handleAudioEnd);
    return () => audio?.removeEventListener("ended", handleAudioEnd);
  }, []);

  // Effect to pause audio when the language changes
  useEffect(() => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
    // Update audio source based on current language
    audio.src = audioFiles[i18n.language]; 
  }, [i18n.language]); // Listen for language changes

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(console.error);
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const updateLineWidth = () => {
    if (titleRef.current && lineRef.current) {
      lineRef.current.style.width = `${titleRef.current.offsetWidth}px`;
    }
  };

  useEffect(() => {
    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    return () => window.removeEventListener("resize", updateLineWidth);
  }, [t]);

  const isArabic = i18n.language === "ar";

  return (
    <div id="Aboutus" style={{ padding: "20px", overflowX: "hidden" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <h2
          ref={titleRef}
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            margin: "0 15px 0 20px",
            color: "blue",
            direction: isArabic ? "rtl" : "ltr",
          }}
          data-aos="fade-left"
        >
          <span style={{ color: "#002147" }}>{t("ABOUT")}</span>{" "}
          <span style={{ color: "#002147" }}>{t("US")}</span>
        </h2>
        <audio ref={audioRef} preload="auto">
          Your browser does not support the audio element.
        </audio>
        <button
          style={{
            border: "none",
            background: "transparent",
            marginTop: "8px",
          }}
          onClick={toggleAudio}
        >
          <img
            src={isPlaying ? pause : play}
            alt="play-pause-button"
            style={{ width: "50px" }}
          />
        </button>
      </div>

      <div
        ref={lineRef}
        style={{
          height: "4px",
          backgroundColor: "#F0C674",
          margin: "0 0 70px 20px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "60px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            paddingRight: "40px",
            marginLeft: "20px",
            maxWidth: "600px",
            textAlign: isArabic ? "right" : "left",
          }}
          data-aos="fade-left"
        >
          <p
            style={{ color: "black", fontSize: "18px", marginBottom: "10px" }}
            dangerouslySetInnerHTML={{ __html: t("About paragraph 1") }}
          />
          <p style={{ color: "black", fontSize: "18px" }} data-aos="fade-right">
            {t("About paragraph 2")}
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center" }} data-aos="fade-right">
          <img
            src={identity}
            alt="Identity"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "8px",
              marginLeft: "40px",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 24px;
            text-align: center;
            margin: 0;
          }
          div {
            flex-direction: column;
            align-items: center;
          }
          div > div {
            flex: none;
            margin-left: 0;
            padding-right: 0;
          }
          img {
            margin-left: 0;
            margin-top: 20px;
            max-width: 80%;
          }
        }
      `}</style>
    </div>
  );
};

export default Aboutus;
