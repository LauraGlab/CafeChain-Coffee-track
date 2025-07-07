import { Link } from "react-router-dom";
import Hero from "./Hero.jsx";
import Instruction from "./Instruction.jsx";
import ReusableCup from "./ReusableCup.jsx";
import Questions from "../../components/Questions.jsx";
import "./../../css/routes/homepage/Home.css";

export default function Home({ loadingComplete }) {
  return (
    <div className="homePageWrapper">
      <Hero loadingComplete={loadingComplete} />
      <div className="mobileDetails__section">
        <p className="mobileDetails">
          CafeChain to innowacyjny projekt oparty na technologii blockchain,
          zaprojektowany w celu zapewnienia pełnej transparentności i śledzenia
          cyklu życia kawy – od plantacji aż po filiżankę u konsumenta.
        </p>
      </div>
      <Instruction />
      <ReusableCup />
      <Questions
        questionTitle="Masz więcej pytań?"
        ctaLink={<Link to="/sledz-kawe">Wypróbuj teraz</Link>}
      />
    </div>
  );
}
