import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.jsx";
import Logo from "./../assets/logoHorizontal.svg";
import "./../css/components/Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="mobileHeader">
        <button className="mobileMenuBtn" onClick={openMenu}>
          menu
        </button>
        <div className="logo__section">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
        </div>
        <Link to="/sledz-kawe">
          <button className="mobileFollowBtn">qr code</button>
        </Link>
        {isMenuOpen && <Menu isOpen={isMenuOpen} handleClose={closeMenu} />}
      </div>
      <div className="desktopHeader">
        <Link to="/">
          <div className="desktopLogoSection">
            <img className="desktopLogo" src={Logo} alt="CafeChain Logo" />
            <h1 className="desktopLogoText ">
              cafe
              <br />
              chain
            </h1>
          </div>
        </Link>
        <div className="desktopMenu">
          <button className="desktopMenuBtn">
            <Link className="desktopMenuText" to="/">
              Cafechain
            </Link>
          </button>
          <button className="desktopMenuBtn">
            <Link className="desktopMenuText" to="/o-projekcie">
              O projekcie
            </Link>
          </button>
          <button className="desktopMenuBtn">
            <Link className="desktopMenuText" to="/kontakt">
              Kontakt
            </Link>
          </button>
          <button className="desktopMenuBtn">
            <Link className="desktopMenuText">en</Link>
          </button>
        </div>

        <div className="ctaBtn__section">
          <button className="ctaBtn">
            <Link to="/sledz-kawe">śledź kawę</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
