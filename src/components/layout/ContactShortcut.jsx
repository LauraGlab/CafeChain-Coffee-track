import Cta from "../common/Cta.jsx";
import "./../../css/components/layout/ContactShortcut.css";

export default function ContactShortcut() {
  return (
    <section className="contact-shortcut">
      <h2 className="contact-shortcut__title">Masz więcej pytań?</h2>
      <Cta
        to="/kontakt"
        className="contact-shortcut__cta"
        text="Skontaktuj się z nami"
      />
    </section>
  );
}
