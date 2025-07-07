import { motion } from "framer-motion";
import ContactImg from "./../assets/contactImg.svg";
import "./../css/routes/Contact.css";

export default function Contact({ loadingComplete }) {
  const animVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="contactPage"
      initial="hidden"
      animate={loadingComplete ? "visible" : "hidden"}
      variants={animVariants}
    >
      <div>
        <div className="contactTitle fraunces">Skontaktujmy się!</div>
        <ul className="contactText">
          <li>
            <a href="#">glablaura@gmail.com</a>
          </li>
          <li>
            <a href="#">lauraglab.com</a>
          </li>
          <li>
            <a href="#">linkedin</a>
          </li>
        </ul>
      </div>
      <div className="contactImg__section">
        <img className="contactImg" src={ContactImg} alt="rysunek osoby pijącej kawę"/>
      </div>
    </motion.div>
  );
}
