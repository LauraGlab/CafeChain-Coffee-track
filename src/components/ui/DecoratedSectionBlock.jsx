import "./../../css/components/ui/DecoratedSectionBlock.css";

export default function DecoratedSectionBlock({
  title,
  content,
  imageSrc,
  imageAlt = "",
  background = "white",
  classNameText = "",
  classNameImageWrapper = "",
  first = false,
  reverse = false,
  children,
}) {
  
  return (
    <div className={`section-block ${reverse ? "section-block--reverse" : ""}`}>
      <div
        className={`section-block__image-wrapper ${
          first ? "section-block__image-wrapper--decorated" : ""
        } ${classNameImageWrapper}`}
      >
        <img
          className={`${
            first ? "section-block__image--desktop" : ""
          } section-block__image`}
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
      <div
        className={`section-block__text ${
          first ? "section-block__text--decorated" : ""
        } bg-${background} ${classNameText}`}
      >
        {title && <h3 className="section-block__text-title">{title}</h3>}
        {content && <p className="section-block__text-subtitle">{content}</p>}
        {children}
      </div>
    </div>
  );
}
