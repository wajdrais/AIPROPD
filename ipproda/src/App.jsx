import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Video from "./components/Video";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "./Js/i18n"; // Ensure this is included
import Fillform from "./components/Fillform";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <I18nextProvider i18n={i18n}>
        <Navigation />
        <Video />
        <Aboutus />
        <Services />
        <Newsletter />
        <Fillform />
        <Footer />
      </I18nextProvider>
    </div>
  );
}

export default App;
