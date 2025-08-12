import { Link } from "react-router-dom";
import Logo from "./../../assets/logoImgs/logoFooter.svg";
import "./../../css/components/layout/Footer.css";

export default function Footer() {

  const footerLinks = [
    { to: "/sledz-kawe", label: "Śledź kawę" },
    { to: "/o-projekcie", label: "O projekcie" },
    { to: "/co-to-jest-blockchain", label: "Co to jest blockchain?" },
    { to: "/kontakt", label: "Kontakt" },
  ];
  return (
    <footer className="footer">
      <div className="footer__main-content">
        <Link>
          <img src={Logo} alt="Logo" className="footer__logo" />
        </Link>
        <nav className="footer__menu">
          <Link className="footer__link" to="/sledz-kawe">
            Śledź kawę
          </Link>
          <Link className="footer__link" to="/o-projekcie">
            O projekcie
          </Link>
          <Link className="footer__link" to="/kontakt">
            Kontakt
          </Link>
        </nav>
      </div>
      <div className="footer__rights">
        <p className="footer__copyright">©2025 Wszelkie prawa zastrzeżone.</p>
        <p className="footer__author">Projekt & Kod: Laura Głąb</p>
      </div>
    </footer>
  );
}
