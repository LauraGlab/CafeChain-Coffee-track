import { Link } from "react-router-dom";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContent">
        <div className="footerMenu">
          <Link className="footerLink" to="/">
            CafeChain
          </Link>
          <Link className="footerLink" to="/sledz-kawe">
            Śledź kawę
          </Link>
          <Link className="footerLink" to="/o-projekcie">
            O projekcie
          </Link>
          <Link className="footerLink" to="/kontakt">
            Kontakt
          </Link>
        </div>
        <div className="copyright">
          <p>©2025 Wszelkie prawa zastrzeżone. Projekt&Kod: Laura Głąb</p>
        </div>
      </div>
    </footer>
  );
}
