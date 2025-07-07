import { useEffect } from "react";
import { motion } from "framer-motion";
import AboutImg from "./../assets/aboutImg.png";
import "./../css/routes/About.css";

export default function About({ loadingComplete }) {
  const stages = [
    {
      stage: "Uprawa i zbiory",
      description:
        "Dowiedz się, gdzie dokładnie rosły ziarna Twojej kawy, jaka była ich odmiana oraz jakie metody uprawy zostały zastosowane. Informacje o regionie, farmie czy praktykach ekologicznych są dostępne na wyciągnięcie ręki.",
    },
    {
      stage: "Przetwarzanie",
      description:
        "Śledź proces przekształcania ziaren w procesie ich suszenia.",
    },
    {
      stage: "Transport i dystrybucja",
      description:
        "Zobacz, jak Twoja kawa przebywa drogę od plantacji do lokalnego sklepu lub Twojego ulubionego punktu odbioru. W systemie zapisane są szczegóły dotyczące trasy transportu.",
    },
    {
      stage: "Sprzedaż i konsumpcja",
      description:
        "Dowiedz się, gdzie Twoja kawa została kupiona i jak wygląda jej historia, od produkcji po filiżankę.",
    },
  ];

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const animVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="aboutPage"
      initial="hidden"
      animate={loadingComplete ? "visible" : "hidden"}
      variants={animVariants}
    >
      <img
        className="aboutImg"
        id="left"
        src={AboutImg}
        alt="rysunek kubka kawy"
      />
      <img
        className="aboutImg"
        id="right"
        src={AboutImg}
        alt="rysunek kubka kawy"
      />
      <div className="aboutTitle fraunces">O projekcie Cafechain</div>
      <div className="aboutText">
        <p>
          CafeChain to projekt, który wykorzystuje technologię
          blockchain, by przybliżyć konsumentom drogę kawy od ziarenka do
          filiżanki. Powstał jako moja praca magisterska i koncentruje się na
          potrzebach osób pijących kawę, a nie tylko uczestników łańcucha
          dostaw.
        </p>
        <p>
          Większość systemów śledzenia na bazie blockchain skupia się jedynie na producentach i
          dystrybutorach, pomijając konsumentów. CafeChain zmienia to, oferując
          prosty i przejrzysty sposób na poznanie pochodzenia i historii swojej
          ulubionej kawy.
        </p>
        <div className="whatInfo">
          <h4 className="aboutSubtitle fraunces">
            Jakie informacje udostępnia CafeChain?
          </h4>
          <ol>
            {stages.map((stage, index) => (
              <li key={index}>
                <span style={{ fontWeight: 700 }}>{stage.stage}:</span>{" "}
                {stage.description}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="aboutSubtitle fraunces">
            Dlaczego CafeChain jest wyjątkowy?
          </h4>
          <p>
            CafeChain nie tylko zwiększa transparentność, ale także umożliwia
            nawiązanie bliższej więzi między konsumentami a producentami kawy.
            Daje narzędzia do podejmowania świadomych wyborów, pozwalając
            docenić wysiłek osób zaangażowanych w łańcuch dostaw – od plantatora
            po dostawcę.
          </p>
          <p>
            Projekt podkreśla znaczenie technologii w codziennym życiu,
            jednocześnie oferując wartość dodaną w postaci edukacji,
            zrównoważonego rozwoju i wsparcia dla sprawiedliwego handlu.
          </p>
          <p>
            Czy jesteś gotowy, aby poznać historię swojej kawy? Wypróbuj
            CafeChain i odkryj, jak wiele kryje się w każdym ziarenku.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
