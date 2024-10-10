import React from "react";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function Fillform() {
  const { t, i18n } = useTranslation();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d7dcaea-ef25-4f47-bd5f-5c64514ceef4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success(t("Form_Successfully"));
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message || t("Submission_failed"));
    }
  };

  // Determine the text direction based on the current language
  const isArabic = i18n.language === "ar"; // Adjust this if your Arabic language code is different
  const direction = isArabic ? "rtl" : "ltr"; // Set direction based on the language

  return (
    <div style={{ padding: "20px", direction: direction }}>
      {" "}
      {/* Set direction dynamically */}
      <div>
        <h4 style={{ textAlign: "center", fontWeight: "bold" }}>
          {t("PART1")}
          <br />
          {t("PART2")}
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            maxWidth: "600px",
            width: "100%",
            background: "#fff",
            padding: "25px 25px 30px",
            borderRadius: "40px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            color: "#333",
            margin: "25px auto",
            marginBottom: "90px",
          }}
        >
          <div>
            <input
              type="text"
              className="field"
              placeholder={t("Name")}
              name="name"
              required
              style={{
                marginTop: "8px",
                width: "100%",
                height: "50px",
                background: "transparent",
                border: "2px solid #ddd",
                outline: "none",
                borderRadius: "6px",
                padding: "15px",
                fontSize: "16px",
                color: "#333",
                textAlign: isArabic ? "right" : "left", // Align text based on the language
              }}
            />
          </div>
          <div style={{ marginTop: "25px" }}>
            <input
              type="email"
              className="field"
              placeholder={t("Email")}
              name="email"
              required
              style={{
                marginTop: "8px",
                width: "100%",
                height: "50px",
                background: "transparent",
                border: "2px solid #ddd",
                outline: "none",
                borderRadius: "6px",
                padding: "15px",
                fontSize: "16px",
                color: "#333",
                textAlign: isArabic ? "right" : "left", // Align text based on the language
              }}
            />
          </div>
          <div style={{ marginTop: "25px" }}>
            <textarea
              name="message"
              placeholder={t("Message")}
              required
              style={{
                marginTop: "8px",
                width: "100%",
                height: "200px",
                background: "transparent",
                border: "2px solid #ddd",
                outline: "none",
                borderRadius: "6px",
                padding: "15px",
                fontSize: "16px",
                color: "#333",
                resize: "none",
                textAlign: isArabic ? "right" : "left", // Align text based on the language
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              height: "55px",
              background: "#CFAE1D",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              color: "white",
              fontWeight: "500",
              marginTop: "25px",
            }}
          >
            {t("Button_Form")}
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
    </div>
  );
}

export default Fillform;
