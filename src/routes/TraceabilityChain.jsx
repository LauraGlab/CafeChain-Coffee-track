import { motion } from "framer-motion";
import Rug from "../assets/traceabilityImgs/rug.png";
import Smog from "../assets/traceabilityImgs/smog.svg";
import SmogText from "../assets/traceabilityImgs/smogText.svg";
import Teapot from "../assets/traceabilityImgs/teapotQr.png";
import "../css/routes/TraceabilityChain.css";

export default function TraceabilityChain({ loadingComplete }) {

  const animVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      class="traceabilityChainPage"
      initial="hidden"
      animate={loadingComplete ? "visible" : "hidden"}
      variants={animVariants}
    >
      <div className="mobileTraceabilityChain">
        <div>
          <img className="smogTextImg" src={SmogText} alt="para wodna efekt" />
          <h4 className="smogText">
            Skanuj QR kod, aby odkryć szczegóły podróży swojej kawy
          </h4>
        </div>
        <img className="teapot" src={Teapot} alt="rysunek czajnika" />
      </div>
      <div className="desktopTraceabilityChain">
        <div className="teapot__section">
          <div>
            <img className="smogTextImg" src={SmogText} />
            <h4 className="smogText">
              Skanuj QR kod, aby odkryć szczegóły podróży swojej kawy
            </h4>
          </div>
          <img className="rug" src={Rug} alt="rysunek dywanu" />
          <img className="smog" src={Smog} alt="para wodna efekt" />
          <img className="desktopTeapot" src={Teapot} alt="rysunek czajnika" />
        </div>
      </div>
    </motion.div>
  );
}
