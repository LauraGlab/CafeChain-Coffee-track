import Cup from "../assets/loadingImgs/cupImg.svg";
import DecoCup from "../assets/loadingImgs/cupDecoImg.svg";
import "./../css/routes/Loading.css";

const traceabilityData = [
  { id: "seven", src: Cup },
  { id: "six", src: Cup },
  { id: "five", src: Cup },
  { id: "four", src: Cup },
  { id: "three", src: Cup },
  { id: "two", src: Cup },
  { id: "one", src: Cup },
  { id: "zero", src: DecoCup },
];

export default function Loading() {
  return (
    <div className="loading">
      {traceabilityData.map((stage) => (
        <div className="traceStep__section" key={stage.id}>
          <img className="traceStep" src={stage.src} id={stage.id} alt="filiżanka kawy"/>
        </div>
      ))}
    </div>
  );
}
