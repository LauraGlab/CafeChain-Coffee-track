import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import instructionImg1 from "./../../assets/instructionImgs/instructionImg1.svg";
import instructionImg2 from "./../../assets/instructionImgs/instructionImg2.svg";
import instructionImg3 from "./../../assets/instructionImgs/instructionImg3.svg";
import instructionImg4 from "./../../assets/instructionImgs/instructionImg4.svg";
import "./../../css/routes/homepage/Instruction.css";

const steps = [
  {
    stepNumber: 1,
    title: "Zeskanuj kod QR",
    description: "Użyj telefonu, aby zeskanować kod QR na opakowaniu kawy.",
    image: instructionImg1,
  },
  {
    stepNumber: 2,
    title: "Zobacz podróż kawy",
    description:
      "Sprawdź, gdzie Twoja kawa została uprawiana, zbierana i przetwarzana.",
    image: instructionImg2,
  },
  {
    stepNumber: 3,
    title: "Zweryfikuj zapis w blockchainie",
    description:
      "Sprawdź zapis blockchain dla autentyczności i identyfikowalności.",
    image: instructionImg3,
  },
  {
    stepNumber: 4,
    title: "Ciesz się swoją kawą",
    description:
      "Teraz, gdy znasz jej podróż, ciesz się etycznie pozyskaną kawą!",
    image: instructionImg4,
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

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -100 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  return (
    <section className="instructionSection">
      <motion.h2
        className="instructionTitle fraunces"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        Jak to działa?
      </motion.h2>
      <AnimatePresence>
        <div className="mobileInstructionSteps">
          <motion.div
            className="instructionCard"
            key={currentStep}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="instructionCardContainer">
              <motion.h3
                className="instructionStepTitle fraunces"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {steps[currentStep].title}
              </motion.h3>
              <motion.p
                className="stepNumber fraunces"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {steps[currentStep].stepNumber}.
              </motion.p>
              <motion.p
                className="instructionStepDescription"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {steps[currentStep].description}
              </motion.p>
              <motion.div
                className="instructionImgContainer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.3 },
                }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <img
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  className="instructionImage"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="desktopInstructionSteps">
          {steps.map((step) => (
            <motion.div
              className="instructionCard"
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="instructionCardContainer">
                <h3 className="instructionStepTitle fraunces">{step.title}</h3>
                <p className="stepNumber fraunces">{step.stepNumber}.</p>
                <p className="instructionStepDescription">{step.description}</p>
                <div className="instructionImgContainer">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="instructionImage"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="instructionBtns">
        <motion.button
          className="instructionBtn"
          onClick={prevStep}
          whileTap={{ scale: 0.9 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          ◀
        </motion.button>
        <motion.button
          className="instructionCta"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.6 },
          }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true }}
        >
          <Link to="/sledz-kawe">Wypróbuj teraz</Link>
        </motion.button>
        <motion.button
          className="instructionBtn"
          onClick={nextStep}
          whileTap={{ scale: 0.9 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          ▶
        </motion.button>
      </div>
    </section>
  );
}