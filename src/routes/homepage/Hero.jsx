import { motion } from "framer-motion";
import Drawing from "./../../assets/heroImgs/coffee.svg";
import MobileDrawing from "./../../assets/heroImgs/mobileImg.svg";
import "./../../css/routes/homepage/Hero.css";

export default function Hero({ loadingComplete }) {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="heroSection">
      <div className="mobileHeroPage">
        <div className="mobileTitleSection">
          <motion.p
            className="mobileSubtitle"
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
            variants={textVariants}
          >
            blockchain & kawa.
          </motion.p>

          <motion.h2
            className="mobileTitle fraunces"
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
            variants={textVariants}
          >
            śledź historię każdej <span className="cup">filiżanki</span>
          </motion.h2>
        </div>
        <div className="mobileDrawing__section">
          <img
            className="mobileDrawing"
            src={MobileDrawing}
            alt="rysunek kubka kawy"
          />
        </div>
      </div>

      <div className="desktopHeroPage">
        <div className="desktopTitleTop">
          <motion.h2
            className="desktopTitle left fraunces"
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
            variants={textVariants}
          >
            blockchain
            <br />& kawa
          </motion.h2>
          <motion.p
            className="desktopDetails"
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
            variants={textVariants}
          >
            CafeChain to innowacyjny system oparty na technologii blockchain,
            zaprojektowany w celu zapewnienia pełnej transparentności i
            śledzenia cyklu życia kawy – od plantacji aż po filiżankę u
            konsumenta.
          </motion.p>
        </div>
        <div className="desktopTitleBottom">
          <motion.h2
            className="desktopTitle right fraunces"
            initial="hidden"
            animate={loadingComplete ? "visible" : "hidden"}
            variants={textVariants}
          >
            Śledź
            <br />
            historię
            <br /> każdej
            <br /> filiżanki
          </motion.h2>
        </div>
        <div className="desktopDrawing__section">
          <img
            className="desktopDrawing"
            src={Drawing}
            alt="rysunek kubka kawy"
          />
        </div>
      </div>
    </section>
  );
}