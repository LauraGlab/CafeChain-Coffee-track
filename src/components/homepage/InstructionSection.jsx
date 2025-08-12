import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cta from "../common/Cta.jsx";
import instructionGif1 from "./../../assets/instructionGifs/instructionGif1.gif";
import instructionGif2 from "./../../assets/instructionGifs/instructionGif2.gif";
import instructionGif3 from "./../../assets/instructionGifs/instructionGif3.gif";
import instructionGif4 from "./../../assets/instructionGifs/instructionGif4.gif";
import "./../../css/components/homepage/InstructionSection.css";

const steps = [
  {
    title: "Zeskanuj kod QR",
    description: "Użyj telefonu, aby zeskanować kod QR na opakowaniu kawy.",
    image: instructionGif1,
  },
  {
    title: "Zobacz podróż kawy",
    description:
      "Sprawdź, gdzie Twoja kawa została uprawiana, zbierana i przetwarzana.",
    image: instructionGif2,
  },
  {
    title: "Zweryfikuj zapis w blockchainie",
    description:
      "Sprawdź zapis blockchain dla autentyczności i identyfikowalności.",
    image: instructionGif3,
  },
  {
    title: "Ciesz się swoją kawą",
    description:
      "Teraz, gdy znasz jej podróż, ciesz się etycznie pozyskaną kawą!",
    image: instructionGif4,
  },
];

export default function Instruction() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="instruction">
      <motion.h2
        className="instruction__title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        Jak to działa?
      </motion.h2>
      <div className="instruction__mobile">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            className="instruction__card"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="instruction__card-inner">
              <div className="instruction__image-container">
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="instruction__image"
                />
              </div>
              <h4 className="instruction__step-title">
                {steps[currentStep].title}
              </h4>
              <p className="instruction__step-description">
                {steps[currentStep].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="instruction__buttons">
          <button className="instruction__btn" onClick={prevStep}>
            ◀
          </button>
          <Cta
            className="instruction__cta"
            to="/partie/1"
            text="Wypróbuj teraz"
          />
          <button className="instruction__btn" onClick={nextStep}>
            ▶
          </button>
        </div>
      </div>
      <div className="instruction__desktop">
        {steps.map((step) => (
          <motion.div
            key={step.stepNumber}
            className="instruction__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            <div className="instruction__card-inner">
              <div className="instruction__image-container">
                <img
                  src={step.image}
                  alt={step.title}
                  className="instruction__image"
                />
              </div>
              <h3 className="instruction__step-title">{step.title}</h3>
              <p className="instruction__step-description">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
