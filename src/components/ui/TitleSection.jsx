import "./../../css/components/ui/TitleSection.css";

export default function TitleSection({ titleSection, titleImg }) {
  return (
    <section
      style={{ backgroundImage: `url(${titleImg})` }}
      className="title-section"
    >
      <h3 className="title-section__title">{titleSection}</h3>
    </section>
  );
}