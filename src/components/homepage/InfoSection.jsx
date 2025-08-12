import { motion } from "framer-motion";
import Cta from "../common/Cta.jsx";
import "./../../css/components/homepage/InfoSection.css";

export default function InfoSection({
  title,
  description,
  linkText,
  linkTo,
  image,
}) {
  return (
    <section className="info-section">
      {image && <img className="info-section__image" src={image} alt={title} />}
      <div className="info-section__content">
        <motion.h2
          className="info-section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="info-section__description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
        {linkText && linkTo && <Cta text={linkText} to={linkTo} />}
      </div>
    </section>
  );
}
