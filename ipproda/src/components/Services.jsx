import React, { useEffect, useRef, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import kidnapped from "../assests/tied.png";
import files from "../assests/folder.png";
import track from "../assests/map.png";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t, i18n } = useTranslation(); // Access i18n for language detection
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    return () => window.removeEventListener("resize", updateLineWidth);
  }, [t]);

  const updateLineWidth = () => {
    if (titleRef.current && lineRef.current) {
      lineRef.current.style.width = `${titleRef.current.offsetWidth}px`;
    }
  };

  const [hovered, setHovered] = useState([false, false, false]);

  const squareStyle = {
    perspective: "1000px",
    width: "300px",
    height: "350px",
    margin: "20px",
    cursor: "pointer",
  };

  const squareInnerStyle = (isHovered) => ({
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
    transform: isHovered ? "rotateY(180deg)" : "rotateY(0deg)",
  });

  const squareFrontStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  };

  const squareBackStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "8px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--primary-color)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    transform: "rotateY(180deg)",
  };

  return (
    <div id="Services"
      style={{
        padding: "20px",
        textAlign: "center",
        direction: i18n.language === "ar" ? "rtl" : "ltr", // Set direction based on language
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2
          ref={titleRef}
          style={{ fontSize: "38px", fontWeight: "bold", color: "#002147", margin: "0" }}
          data-aos="flip-right"
        >
          {t("OUR_SERVICES")}
        </h2>
        <div
          ref={lineRef}
          style={{
            height: "4px",
            backgroundColor: "#F0C674",
            width: "0px",
            transition: "width 0.3s ease",
            margin: "10px 0 70px 0px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Square 1 */}
        <div
          style={squareStyle}
          onMouseEnter={() => setHovered([true, false, false])}
          onMouseLeave={() => setHovered([false, false, false])}
        >
          <div style={squareInnerStyle(hovered[0])}>
            <div style={squareFrontStyle}>
              <h3 style={{ fontSize: "22px", color: "var(--primary-color)", fontWeight: "bold" }}>
                {t("Service1")}
              </h3>
              <img src={files} alt="" style={{ height: "70px", marginTop: "50px" }} />
            </div>
            <div style={squareBackStyle}>
              <p style={{ fontSize: "16px", color: "white" }}>{t("Service1_descr")}</p>
            </div>
          </div>
        </div>

        {/* Square 2 */}
        <div
          style={squareStyle}
          onMouseEnter={() => setHovered([false, true, false])}
          onMouseLeave={() => setHovered([false, false, false])}
        >
          <div style={squareInnerStyle(hovered[1])}>
            <div style={squareFrontStyle}>
              <h3 style={{ fontSize: "22px", color: "var(--primary-color)", fontWeight: "bold" }}>
                {t("Service2")}
              </h3>
              <img src={track} alt="" style={{ height: "70px", marginTop: "50px" }} />
            </div>
            <div style={squareBackStyle}>
              <p style={{ fontSize: "16px", color: "white" }}>{t("Service2_descr")}</p>
            </div>
          </div>
        </div>

        {/* Square 3 */}
        <div
          style={squareStyle}
          onMouseEnter={() => setHovered([false, false, true])}
          onMouseLeave={() => setHovered([false, false, false])}
        >
          <div style={squareInnerStyle(hovered[2])}>
            <div style={squareFrontStyle}>
              <h3 style={{ fontSize: "22px", color: "var(--primary-color)", fontWeight: "bold" }}>
                {t("Service3")}
              </h3>
              <img src={kidnapped} alt="" style={{ height: "70px", marginTop: "50px" }} />
            </div>
            <div style={squareBackStyle}>
              <p style={{ fontSize: "16px", color: "white" }}>{t("Service3_descr")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion section */}
      <div style={{ marginTop: "60px" }}>
        <h3 style={{ color: "#BD7418", fontSize: "32px", fontWeight: "bold", marginBottom: "60px" }}>
          {t("IN WHAT WE SPECIALIZE")}
        </h3>
        <div style={{ width: "80%", margin: "0 auto" }}>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service12")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service12_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service11")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service11_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service4")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service4_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service5")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service5_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service6")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service6_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service7")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service7_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service8")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service8_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service9")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service9_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{ color: "black", fontWeight: "bold" }}>{t("Service10")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{
                textAlign: i18n.language === "ar" ? "right" : "left", // Align text based on language
              }}>
                {t("Service10_descr")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Services;
