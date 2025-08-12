import { useState, useEffect, useRef } from "react";
import Cta from "./../common/Cta.jsx";
import "./../../css/components/batchhistorypage/BatchHistoryButtons.css";

export default function BatchHistoryButtons({ batchDetails }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      for (const step of batchDetails) {
        const el = document.getElementById(`stage-${step.index}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 200 && rect.bottom > 200) {
            setActiveIndex(step.index);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [batchDetails]);

  useEffect(() => {
    if (
      activeIndex !== null &&
      buttonRefs.current[activeIndex] &&
      containerRef.current
    ) {
      const button = buttonRefs.current[activeIndex];
      const container = containerRef.current;

      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const containerScrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      if (
        buttonLeft < containerScrollLeft ||
        buttonLeft + buttonWidth > containerScrollLeft + containerWidth
      ) {
        container.scrollTo({
          left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  const handleScrollTo = (index) => {
    const element = document.getElementById(`stage-${index}`);
    if (element) {
      const yOffset = -200;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${scrolled ? "sticky" : ""} batch-history-buttons`}
    >
      {batchDetails.map((step, idx) => (
        <div
          key={step.index}
          ref={(el) => (buttonRefs.current[step.index] = el)}
          className={`batch-history-buttons__button ${
            activeIndex === step.index ? "active" : ""
          }`}
          onClick={() => handleScrollTo(step.index)}
        >
          <Cta text={step.stage} className="batch-history__btn-bg"/>
        </div>
      ))}
    </div>
  );
}
