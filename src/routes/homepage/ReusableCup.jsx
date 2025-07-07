import { motion } from "framer-motion";
import SVG from "react-inlinesvg";
import ReusableCupImg from "./../../assets/reusableCup.svg";
import "./../../css/routes/homepage/ReusableCup.css";

export default function ReusableCup() {
  const contentTexts = [
    {
      id: "cupFill",
      content:
        "Kawa w środku to informacje w bloku (np. źródło, proces przetwarzania, data, itp.).",
    },
    {
      id: "cup",
      content: "Kubek reprezentuje blok w łańcuchu, który przechowuje te dane.",
    },
    {
      id: "cupLid",
      content:
        "Pokrywka symbolizuje zakończenie bloku – moment, w którym dane są bezpiecznie zamykane i zabezpieczane przez hash.",
    },
    {
      id: "cupDeco",
      content:
        "Papier na kubku to hash – unikalny identyfikator, który zamyka blok, zabezpieczając jego dane i nadając mu trwałość w łańcuchu.",
    },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="reusableCupSection"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="reusableCupTitle fraunces"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        Nie wiesz, jak działa blockchain?
      </motion.div>
      <motion.div
        className="reusableCupText"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        Wyobraź sobie, że każdy blok to wielorazowy kubek, który przechowuje
        historię kawy.
      </motion.div>
      <div className="reusableCupDesktopWrapper">
        <motion.div
          className="reusableCupImg__section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <SVG
            className="reusableCupImg"
            src={ReusableCupImg}
            alt="drawing of reusable cup"
          />
        </motion.div>
        <motion.div className="reusableCupContent">
          <motion.div className="explanationText__section">
            {contentTexts.map((contentText) => (
              <motion.div
                className="explanationText"
                id={contentText.id}
                key={contentText.id}
                variants={textVariants}
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {contentText.content}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}