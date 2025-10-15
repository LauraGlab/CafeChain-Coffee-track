import Cta from "../components/common/Cta.jsx";
import DecoratedSectionBlock from "../components/ui/DecoratedSectionBlock.jsx";
import TitleSection from "../components/ui/TitleSection.jsx";
import AboutImg1 from "./../assets/aboutProjectImgs/AboutImg.png";
import AboutImg2 from "./../assets/aboutProjectImgs/AboutImg1.png";
import AboutImg3 from "./../assets/aboutProjectImgs/AboutImg2.png";
import AboutImg4 from "./../assets/aboutProjectImgs/AboutImg3.png";
import AboutImgDesktop from "./../assets/aboutProjectImgs/AboutImgDesktop.png";
import "./../css/pages/AboutPage.css";

export default function AboutPage({ loadingComplete }) {
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

  return (
    <div className="about section">
      <TitleSection titleSection="O Projekcie" titleImg={AboutImg1} />
      <DecoratedSectionBlock
        title="Co to jest?"
        content="Projekt CafeChain powstał jako część mojej pracy magisterskiej i stanowi próbę połączenia nowoczesnych technologii z pasją do kawy. Jego głównym celem jest zbadanie oraz praktyczne wdrożenie możliwości technologii blockchain w branży kawowej: tak, aby zapewnić pełną przejrzystość i zaufanie w całym łańcuchu dostaw, od plantacji aż po filiżankę w rękach konsumenta.
Dzięki zastosowaniu inteligentnych kontraktów i zdecentralizowanych rejestrów, CafeChain umożliwia śledzenie każdego etapu produkcji i dystrybucji kawy, gwarantując autentyczność pochodzenia, etyczne praktyki oraz wysoką jakość produktu."
        first
        imageSrc={AboutImgDesktop}
        reverse
      />

      <DecoratedSectionBlock
        title="Czy wiesz, że..."
        imageSrc={AboutImg2}
        background="orange"
        classNameText="text__highlighted"
      >
        <p className="section-block__text-subtitle">
          ...
          <strong>
            blockchain został po raz pierwszy użyty w branży spożywczej
          </strong>{" "}
          przez firmę Walmart w 2016 roku do śledzenia pochodzenia mango?
          Technologia pomogła skrócić czas identyfikacji źródła zanieczyszczenia
          żywności z 7 dni do 2,2 sekundy.
        </p>
        <Cta
          text="Zobacz źródło"
          to="https://www.ibm.com/blog/blockchain-in-food-supply-chain/"
        />
      </DecoratedSectionBlock>
      <DecoratedSectionBlock
        title="Jakie informacje udostępnia CafeChain?"
        imageSrc={AboutImg3}
        reverse
      >
        <ol className="section-block__text-subtitle">
          {stages.map((stage, index) => (
            <li key={index} className="about-text-section__list-item">
              <span className="about-text-section__stage-name">
                {stage.stage}:
              </span>{" "}
              {stage.description}
            </li>
          ))}
        </ol>
      </DecoratedSectionBlock>
      <DecoratedSectionBlock
        title="Dlaczego CafeChain jest wyjątkowy?"
        imageSrc={AboutImg4}
        background="brown"
        classNameText="text__highlighted"
      >
        <p className="section-block__text-subtitle">
          CafeChain nie tylko zwiększa transparentność łańcucha dostaw kawy, ale
          również buduje zaufanie między producentami a konsumentami. Dzięki
          wykorzystaniu technologii blockchain każdy etap podróży ziarna jest
          rejestrowany i niemożliwy do sfałszowania. Projekt podkreśla znaczenie
          uczciwego handlu, odpowiedzialnego rolnictwa i nowoczesnych rozwiązań
          cyfrowych w codziennych wyborach.
          <br />{" "}
          <strong>Czy jesteś gotowy, aby poznać historię swojej kawy?</strong>
        </p>
      </DecoratedSectionBlock>
    </div>
  );
}
