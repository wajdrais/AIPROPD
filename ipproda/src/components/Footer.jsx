import React from "react";
import { useTranslation } from "react-i18next";
import what from "../assests/whatsapp.png";
import gmail from "../assests/gmail.png";
import logoGif from "../assests/logotrial.gif";
import cell from "../assests/cell.png" // Replace with the path to your GIF file

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div id="Contactus"
      style={{
        width: "100%",
        bottom: "0",
        background: "#646464",
        color: "#fff",
        padding: "20px 0",
        borderTopRightRadius: "125px",
        fontSize: "13px",
        transition: "box-shadow 0.3s", // Transition for box shadow
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Default box shadow
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"; // Enhanced box shadow on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // Reset box shadow
      }}
    >
      <div
        className="row"
        style={{
          width: "95%",
          margin: "auto",
          display: "flex",
          flexWrap: "nowrap", // Prevent wrapping
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div className="col" style={{ flex: "1", textAlign: "center" }}>
          <img
            src={logoGif}
            alt="logo"
            style={{ width: "200px", marginBottom: "5px" }}
          />
          <p style={{ color: "#002147", fontWeight: "bold" }}>
            {t("Company_name")}
          </p>
        </div>
        <div className="col" style={{ flex: "1", textAlign: "center" }}>
          <h5
            style={{
              marginBottom: "20px",
              color: "#002147",
              animation: "colorChange 3s linear infinite", // Add animation
            }}
          >
            {t("OFFICE_HOURS")}
          </h5>
          <p style={{ marginBottom: "8px", color: "black" }}>{t("OPEN")}</p>
          <p style={{ marginBottom: "8px", color: "black" }}>{t("REST")}</p>

        </div>
        <div className="col" style={{ flex: "1", textAlign: "center" }}>
          <h5
            style={{
              marginBottom: "20px",
              color: "#002147",
              animation: "colorChange 3s linear infinite", // Add animation
            }}
          >
            {t("CONTACT US")}
          </h5>
          <p style={{ marginBottom: "10px", color: "black" }}>
            <a
              href="mailto:Detektiv.ghouma@AIPROPD.de"
              style={{
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")} // Change color on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <img
                src={gmail}
                alt="Gmail Logo"
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
              Detektiv.ghouma@AIPROPD.de
            </a>
          </p>
          <p style={{ marginBottom: "10px", color: "black" }}>
            <a
              href="mailto:info@AIPROPD.de"
              style={{
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")} // Change color on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <img
                src={gmail}
                alt="Gmail Logo"
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
              info@AIPROPD.de
            </a>
          </p>
          <p style={{ marginBottom: "8px", color: "black" }}>
            <a
              href="https://wa.me/004915731267526"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")} // Change color on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <img
                src={what}
                alt="WhatsApp Logo"
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
004915731267526            </a>
          </p>
          <p style={{ marginBottom: "8px", color: "black" }}>
            <a
              href="https://wa.me/004915731267526"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")} // Change color on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              <img
                src={cell}
                alt="WhatsApp Logo"
                style={{
                  width: "18px",
                  height: "18px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                }}
              />
004915731267526            </a>
          </p>
        </div>
        <div className="col" style={{ flex: "1", textAlign: "center" }}>
          <h5
            style={{
              marginBottom: "20px",
              color: "#002147",
              animation: "colorChange 3s linear infinite", // Add animation
            }}
          >
            {t("ADDRESS")}
          </h5>
          <p style={{ marginBottom: "8px" }}>
            <a
              style={{
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s",
              }}
              href="https://maps.app.goo.gl/BuQViqAEmpxAJZs56"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffcc00")} // Change color on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = "black")} // Reset color
            >
              Spenerweg 30 <br />35394 Gießen <br /> Deutschland
            </a>
          </p>
        </div>
      </div>
      <hr
        style={{
          width: "90%",
          border: "0",
          borderBottom: "1px solid #ccc",
          margin: "20px auto",
        }}
      />
      <p style={{ textAlign: "center" }}>{t("RESERVED")}</p>

      {/* Add the keyframes for animation */}
      <style>
        {`
          @keyframes colorChange {
            0% { color: black; }
            33% { color: white; }
            66% { color: #002147; }
            100% { color: black; }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
