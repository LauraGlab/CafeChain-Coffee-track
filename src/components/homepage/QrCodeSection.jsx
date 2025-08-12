import { motion } from "framer-motion";
import QrCodeImg from "./../../assets/qr/QrCode.svg";
import "./../../css/components/homepage/QrCodeSection.css";

export default function QrCodeSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="section qr" id="next-section">
      <div className="qr__scroll-wrapper">
        <div className="qr__scroll-indicator">
          <div className="qr__scroll-button-wrapper">
            <button
              className="qr__scroll-button"
              onClick={() =>
                document
                  .querySelector("#next-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Przejdź do kolejnej sekcji"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
      <div className="qr__wrapper">
        <div className="qr__image-container">
          <div className="qr__image-wrapper">
            <img
              src={QrCodeImg}
              alt="Przykładowy kod QR CafeChain"
              className="qr__image"
            />
          </div>
        </div>
        <div className="qr__content">
          <motion.p
            className="qr__subtitle oswald"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            transition={{ delay: 0 }}
          >
            Zeskanuj i zobacz
          </motion.p>

          <motion.h2
            className="qr__title oswald"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Twój <span className="qr__title-accent">Kod Kawy</span>
          </motion.h2>

          <motion.p
            className="qr__description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            transition={{ delay: 0.4 }}
          >
            Każda paczka kawy ma unikalny kod QR, który pozwala Ci prześledzić
            drogę ziaren: od plantacji po filiżankę. Transparentność
            gwarantowana przez blockchain.
          </motion.p>
        </div>
      </div>
    </section>
  );
}