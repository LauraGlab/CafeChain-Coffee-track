import { motion } from "framer-motion";
import ContactShortcut from "./../components/layout/ContactShortcut.jsx";
import TitleSection from "./../components/ui/TitleSection.jsx";
import Coffee from "./../assets/blockchainImgs/blockchain1.svg";
import Cup from "./../assets/blockchainImgs/blockchain4.svg";
import CupDeco from "./../assets/blockchainImgs/blockchain3.svg";
import CupLid from "./../assets/blockchainImgs/blockchain2.svg";
import BlockchainImg from "./../assets/blockchainImgs/BlockchainImg.png";
import "./../css/pages/BlockchainPage.css";

const cupParts = [
  {
    id: "cupFill",
    title: "Zawartość kubka",
    description: (
      <>
        <p className="blockchain-page__paragraph">
          W środku kubka znajduje się cała{" "}
          <strong className="blockchain-page__strong">
            historia Twojej kawy
          </strong>
          . Co konkretnie?
        </p>
        <ul className="blockchain-page__list">
          <li className="blockchain-page__list-item">☕ Pochodzenie ziaren</li>
          <li className="blockchain-page__list-item">⚙️ Metoda obróbki</li>
          <li className="blockchain-page__list-item">🌱 Data zbiorów</li>
        </ul>
        <p className="blockchain-page__paragraph">
          To wszystko trafia do{" "}
          <strong className="blockchain-page__strong">
            jednego bloku danych
          </strong>{" "}
          – gotowego do zapisania.
        </p>
      </>
    ),
    image: Coffee,
    alt: "Kubek z kawą jako metafora bloku",
  },
  {
    id: "cup",
    title: "Kubek",
    description: (
      <p className="blockchain-page__paragraph">
        Kubek to jak{" "}
        <strong className="blockchain-page__strong">pojemnik na dane</strong>.
        Nie rozleje się, nic nie zginie. W blockchainie pełni taką samą funkcję
        –{" "}
        <strong className="blockchain-page__strong">
          przechowuje dane w bezpieczny sposób
        </strong>
        , niezmienne i gotowe do odczytu.
      </p>
    ),
    image: Cup,
    alt: "Kubek reprezentujący blok danych",
  },
  {
    id: "cupLid",
    title: "Pokrywka",
    description: (
      <>
        <p className="blockchain-page__paragraph">
          Zakręcamy pokrywkę –{" "}
          <strong className="blockchain-page__strong">
            blok zostaje zamknięty
          </strong>
          . Od tego momentu jego zawartość jest nienaruszalna, czyli:
        </p>
        <ul className="blockchain-page__list">
          <li className="blockchain-page__list-item">
            🔐 Nie można niczego dopisać
          </li>
          <li className="blockchain-page__list-item">
            🧾 Wszystko jest podpisane i potwierdzone
          </li>
        </ul>
      </>
    ),
    image: CupLid,
    alt: "Zamknięcie kubka - zakończenie bloku",
  },
  {
    id: "cupDeco",
    title: "Owijka",
    description: (
      <>
        <p className="blockchain-page__paragraph">
          Na koniec owijka – to{" "}
          <strong className="blockchain-page__strong">hash</strong>: unikalny
          kod, który mówi:
        </p>
        <ul className="blockchain-page__list">
          <li className="blockchain-page__list-item">
            🧬 „Tak, te dane są autentyczne”
          </li>
          <li className="blockchain-page__list-item">
            🔗 „Ten blok łączy się z poprzednim”
          </li>
        </ul>
        <p className="blockchain-page__paragraph">
          Bez niego łańcuch nie miałby sensu – to jak kod kreskowy, który
          wszystko scala.
        </p>
      </>
    ),
    image: CupDeco,
    alt: "Owijka jako hash",
  },
];

function CupSection({ id, title, description, image, alt, index, loadingComplete }) {
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={loadingComplete ? "visible" : "hidden"}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`blockchain-page__block ${id} ${isReversed ? "reverse" : ""}`}
    >
      <div className="blockchain-page__img-wrapper">
        <img className="blockchain-page__img" src={image} alt={alt} />
      </div>
      <div className="blockchain-page__text-block">
        <h2 className="blockchain-page__title oswald">{title}</h2>
        <div className="blockchain-page__description">{description}</div>
      </div>
    </motion.div>
  );
}

export default function BlockchainPage() {
  return (
    <div className="blockchain-page section">
      <TitleSection titleImg={BlockchainImg} />

      <div className="blockchain-page__intro oswald">
        <h2 className="blockchain-page__headline">Blockchain w formie kubka</h2>
        <h2 className="blockchain-page__subheadline">
          Poznaj części i zobacz, jak działa łańcuch
        </h2>
      </div>

      {cupParts.map((part, index) => (
        <CupSection key={part.id} {...part} index={index} />
      ))}
      <ContactShortcut />
    </div>
  );
}
