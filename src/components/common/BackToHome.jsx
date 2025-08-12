import { Link } from "react-router-dom";
import ArrowLeft from "./../../assets/icons/arrowLeft.svg";
import "./../../css/components/common/BackToHome.css";

export default function BackToHome(){

    return (
        <Link to="/" className="back-to-home">
            <img className="back-to-home__icon" src={ArrowLeft}/>
            <span>
            Wróć do <strong>Strona główna</strong>
            </span>
        </Link>
    );
}