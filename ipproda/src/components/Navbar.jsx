import React, { useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import logo from "../assests/logoc.png";
import De from "../assests/germany.png";
import Fr from "../assests/france.png";
import En from "../assests/uk.png";
import Ar from "../assests/saudi.png";

const StyledHeader = styled(Navbar)`
  background: linear-gradient(to right, white, #0072bb, white);
  padding: 0.8rem 2rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  &.rtl {
    direction: rtl; // Apply RTL styles when .rtl class is present
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-left: 10px;

  @media (max-width: 768px) {
    width: 80px;
    margin-left: 5px;
  }
`;

const NavContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const NavItems = styled(Nav)`
  display: flex;
  gap: 25px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  .nav-link {
    color: #002147 !important;
    &:hover {
      color: #a3c6e0 !important;
    }
  }
`;

const FlagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (max-width: 768px) {
    gap: 5px;
    margin-top: 0;
  }
`;

const Flag = styled.img`
  width: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20px;
  }
`;

function Navigation() {
  const { t, i18n } = useTranslation();

  // Check localStorage for saved language and set it
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en"; // Default to English
    i18n.changeLanguage(savedLanguage);

    // Set the body class for RTL
    if (savedLanguage === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  }, [i18n]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang); // Save the language in localStorage

    // Set the direction based on the language
    if (lang === "ar") {
      document.body.classList.add("rtl");
    } else {
      document.body.classList.remove("rtl");
    }
  };

  return (
    <StyledHeader expand="lg" className={i18n.language === "ar" ? "rtl" : ""}>
      <Navbar.Brand href="/">
        <Logo src={logo} alt="Logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavContainer>
          <NavItems>
            <Nav.Link href="#video">{t("HOME")}</Nav.Link>
            <Nav.Link href="#Aboutus">{t("ABOUT US")}</Nav.Link>
            <Nav.Link href="#Services">{t("SERVICES")}</Nav.Link>
            <Nav.Link href="#news">{t("NEWS")}</Nav.Link>
            <Nav.Link href="#Contactus">{t("CONTACT US")}</Nav.Link>
          </NavItems>

          <FlagContainer>
            <Flag src={De} alt="German" onClick={() => handleLanguageChange("de")} />
            <Flag src={Fr} alt="French" onClick={() => handleLanguageChange("fr")} />
            <Flag src={En} alt="English" onClick={() => handleLanguageChange("en")} />
            <Flag src={Ar} alt="Arabic" onClick={() => handleLanguageChange("ar")} />
          </FlagContainer>
        </NavContainer>
      </Navbar.Collapse>

      <Navbar.Brand href="/">
        <Logo src={logo} alt="Logo" />
      </Navbar.Brand>
    </StyledHeader>
  );
}

export default Navigation;
