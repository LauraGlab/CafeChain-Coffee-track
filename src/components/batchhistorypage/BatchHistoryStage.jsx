import batchIcon1 from "./../../assets/batchIcons/batchIcon1.svg";
import batchIcon2 from "./../../assets/batchIcons/batchIcon2.svg";
import batchIcon3 from "./../../assets/batchIcons/batchIcon3.svg";
import batchIcon4 from "./../../assets/batchIcons/batchIcon4.svg";
import batchIcon5 from "./../../assets/batchIcons/batchIcon5.svg";
import batchIcon6 from "./../../assets/batchIcons/batchIcon6.svg";
import "./../../css/components/batchhistorypage/BatchHistoryStage.css";

export default function BatchHistoryStage({ step }) {
  const infoFields = [
    {
      key: "date",
      icon: batchIcon1,
      alt: "Ikona daty",
      className: "batch-history-stage__info-date",
    },
    {
      key: "location",
      icon: batchIcon2,
      alt: "Ikona lokalizacji",
      className: "batch-history-stage__info-location",
    },
    {
      key: "sustainability",
      icon: batchIcon3,
      alt: "Ikona zrównoważonego rozwoju",
      className: "batch-history-stage__info-sustainability",
    },
    {
      key: "beanType",
      icon: batchIcon4,
      alt: "Ikona rodzaju ziaren",
      className: "batch-history-stage__info-bean-type",
    },
    {
      key: "process",
      icon: batchIcon5,
      alt: "Ikona procesu",
      className: "batch-history-stage__info-process",
    },
    {
      key: "roasting",
      icon: batchIcon6,
      alt: "Ikona palenia",
      className: "batch-history-stage__info-roasting",
    },
  ];

  return (
    <section className="batch-history-stage" id={`stage-${step.index}`}>
      <div className="batch-history-stage__content">
        <div className="batch-history-stage__inner">
          {step.image && (
            <div className="batch-history-stage__image-wrapper">
              <img
                src={step.image}
                alt={`Etap ${step.index + 1}`}
                className="batch-history-stage__image"
              />
            </div>
          )}
          <div className="batch-history-stage__info-wrapper">
            <div>
              <h4 className="batch-history-stage__title">{step.stage}</h4>
              <div className="batch-history-stage__info">
                {infoFields.map(({ key, icon, alt, className }) =>
                  step[key] ? (
                    <div className="batch-history-stage__info-row" key={key}>
                      <img
                        src={icon}
                        className="batch-history-stage__info-icon"
                        alt={alt}
                      />
                      <p className={className}>{step[key]}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>

            <div className="batch-history-stage__description">
              <div className="batch-history-stage__text">
                <p>{step.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
