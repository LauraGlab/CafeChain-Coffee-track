import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArrowRight from "./../../assets/icons/arrowRight.svg";
import "./../../css/components/common/Cta.css";

export default function Cta({ text, to, className }) {
  return (
    <Link
      to={to}
      className={`cta ${className}`}
      aria-label={text} 
      title={text}
    >
      <span className="cta-link__text">{text}</span>
      <img
        className="cta-icon"
        src={ArrowRight}
        alt=""
        aria-hidden="true"
      />
    </Link>
  );
}

Cta.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string,
};