import { Link } from "react-router-dom";
import Hero from "../components/homepage/HeroSection.jsx";
import InfoSection from "../components/homepage/InfoSection.jsx";
import InstructionSection from "../components/homepage/InstructionSection.jsx";
import QRCodeSection from "../components/homepage/QrCodeSection.jsx";
import ContactShortcut from "../components/layout/ContactShortcut.jsx";
import AboutProjectImg from "./../assets/infoImgs/AboutProject.png";
import ExplanationImg from "./../assets/infoImgs/ExplanationImg.png";
import "./../css/pages/HomePage.css";

export default function HomePage({ loadingComplete }) {
  return (
    <div className="homepage">
      <Hero loadingComplete={loadingComplete} />
      <QRCodeSection />
      <InstructionSection />
      <InfoSection
        title="Dlaczego ten projekt?"
        description="Konsumenci chcą wiedzieć, skąd pochodzi ich kawa. Ten projekt to prototyp systemu śledzenia łańcucha dostaw oparty o blockchain, który udostępnia dane końcowemu użytkownikowi – czyli Tobie."
        linkText="Dowiedz się więcej o projekcie"
        linkTo="/o-projekcie"
        image={AboutProjectImg}
      />
      <InfoSection
        title="Co to jest blockchain?"
        description="Blockchain to rozproszona baza danych, która zapewnia transparentność i bezpieczeństwo danych w łańcuchu dostaw."
        linkText="Więcej informacji"
        linkTo="/co-to-jest-blockchain"
        image={ExplanationImg}
      />
      <ContactShortcut
        questionTitle="Masz więcej pytań?"
        ctaLink={<Link to="/sledz-kawe">Wypróbuj teraz</Link>}
      />
    </div>
  );
}
