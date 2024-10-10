import React, { useEffect, useState, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const { t, i18n } = useTranslation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  
  // State to track if a toast has already been shown
  const [toastShown, setToastShown] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const updateLineWidth = () => {
    if (titleRef.current && lineRef.current) {
      requestAnimationFrame(() => {
        lineRef.current.style.width = `${titleRef.current.offsetWidth}px`;
      });
    }
  };

  useEffect(() => {
    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    return () => window.removeEventListener("resize", updateLineWidth);
  }, []);

  useEffect(() => {
    updateLineWidth();
  }, [i18n.language]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber) {
      toast.error(t("ALL_FIELDS_REQUIRED"));
      return;
    }

    const formData = {
      fullName,
      email,
      phoneNumber,
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        if (!toastShown) { // Check if a toast has been shown
          toast.success(t("SUBSCRIPTION_SUCCESSFUL"));
          setToastShown(true); // Mark toast as shown
        }
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        updateLineWidth();
      } else {
        if (!toastShown) { // Check if a toast has been shown
          toast.error(t("SUBSCRIPTION_FAILED"));
          setToastShown(true); // Mark toast as shown
        }
      }
    } catch (error) {
      console.error("Error:", error);
      if (!toastShown) { // Check if a toast has been shown
        toast.error(t("SUBSCRIPTION_FAILED"));
        setToastShown(true); // Mark toast as shown
      }
    }
  };

  return (
    <div
      id="news"
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <div style={{ flex: 1, marginTop: "20px", textAlign: "center" }}>
        <h2
          ref={titleRef}
          style={{
            fontSize: "38px",
            fontWeight: "bold",
            color: "#002147",
            marginTop: "90px",
          }}
          data-aos="zoom-in"
        >
          {t("LATEST_NEWS")}
        </h2>
        <div
          ref={lineRef}
          style={{
            height: "4px",
            width: "0px",
            backgroundColor: "#F0C674",
            margin: "10px 0 70px 0px",
          }}
        />
      </div>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          marginBottom: "80px",
          marginTop: "20px",
          width: "100%",
          maxWidth: "600px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "40px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            height: "auto",
            minHeight: "380px",
            direction: i18n.language === "ar" ? "rtl" : "ltr",
          }}
        >
          <h3
            style={{
              fontSize: "28px",
              color: "var(--third-color)",
              marginBottom: "30px",
              textAlign: "center",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            {t("SUBSCRIBE TO OUR NEWSLETTER")}
          </h3>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("Full_Name")}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("Email_Address")}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder={t("Phone_Number")}
                style={{
                  padding: "10px",
                  width: "100%",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
                required
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#CFAE1D",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                height: "55px",
                marginTop: "20px",
              }}
            >
              {t("CONFIRM")}
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={2000} // Set autoClose to 2000 milliseconds
        hideProgressBar={true}
      />
    </div>
  );
};

export default Newsletter;
