import { motion } from "framer-motion";
import Cta from "../common/Cta.jsx";
import HeroImg from "./../../assets/heroImgs/heroImg.svg";
import HeroImg1 from "./../../assets/heroImgs/heroImg1.svg";
import "./../../css/components/homepage/HeroSection.css";

export default function Hero({ loadingComplete }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="hero section">
      <div className="hero__container">
        <div className="hero__wrapper">
          <motion.div
            className="hero__content"
            variants={containerVariants}
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
          >
            <motion.p className="hero__subtitle" variants={fadeUp}>
              CafeChain
            </motion.p>

            <motion.div variants={fadeUp}>
              <h1 className="hero__title-mobile oswald">Śledź</h1>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="hero__title-mobile oswald">Swoją</h1>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="hero__title-desktop oswald">
                Twoja <span className="hero__title-accent">kawa</span>. Jej
                podróż. Twoja wiedza.
              </h1>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1 className="hero__title hero__title-mobile oswald">
                <span className="hero__title-accent">Kawę</span>
              </h1>
            </motion.div>
            <motion.p className="hero__description" variants={fadeUp}>
              CafeChain – transparentna podróż kawy od plantacji po filiżankę
              dzięki technologii blockchain.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Cta
                text="Zobacz jak to działa!"
                to="/partie/1"
                className="cta__hero"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="hero__image-wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={loadingComplete ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <img
              className="hero__image-mobile"
              src={HeroImg}
              alt="zdjęcie filiżanki kawy"
            />
            <img
              className="hero__image-desktop"
              src={HeroImg1}
              alt="zdjęcie filiżanki kawy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
