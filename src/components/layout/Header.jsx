import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import BackToHome from "../common/BackToHome.jsx";
import Menu from "./Menu.jsx";
import Logo from "./../../assets/logoImgs/logo.svg";
import Package from "./../../assets/icons/package.svg";
import "./../../css/components/layout/Header.css";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "O projekcie", path: "/o-projekcie" },
    { name: "Co to jest blockchain?", path: "/co-to-jest-blockchain" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled && location.pathname !== "/partie/1" ? "scrolled" : ""
      }  header`}
    >
      <div className="header__container">
        <div className="hamburger__wrapper">
          <button
            className={`hamburger ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="header__logo">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Strona główna – CafeChain"
          >
            <img src={Logo} alt="CafeChain logo" />
            <h1 className="header__logo-title oswald">CafeChain</h1>
          </Link>
        </div>
        <div className="header__menu">
          {menuItems.map(({ name, path }, index) => (
            <Link
              key={index}
              className="header__menu-item"
              to={path}
              title={name}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="header__right">
          <Link
            className="header__qr-link"
            to="/partie/1"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Śledź kawę – przejdź do śledzenia partii"
          >
            <p className="oswald">Śledź kawę</p>
            <SVG className="header__qr-icon" aria-hidden="true" src={Package} />
          </Link>
        </div>
      </div>
      <Menu isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
      {location.pathname !== "/" && <BackToHome />}
    </header>
  );
}
