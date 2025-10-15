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
          {footerLinks.map((footerLink) => (
            <Link
              key={footerLink.to}
              className="footer__link"
              to={footerLink.to}
            >
              {footerLink.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer__rights">
        <p className="footer__copyright">©2025 Wszelkie prawa zastrzeżone.</p>
        <p className="footer__author">
          Projekt & Kod:{" "}
          <a href="https://laura-glab.vercel.app/#">Laura Głąb</a>
        </p>
      </div>
    </footer>
  );
}
