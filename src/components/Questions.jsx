import { motion } from "framer-motion";
import "./../css/routes/homepage/Questions.css";

export default function Questions({ questionTitle, ctaLink }) {
  return (
    <motion.section
      className="questionsSection"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h3
        className="questionsTitle fraunces"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        {questionTitle}
      </motion.h3>

      <motion.div
        className="questionsContent"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <div className="desktopQuestions">
          <p className="questionsText">Skontaktuj się:</p>
          <p className="questionsEmail">glablaura@gmail.com</p>
        </div>
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
          {ctaLink}
        </motion.button>
      </motion.div>
    </motion.section>
  );
}