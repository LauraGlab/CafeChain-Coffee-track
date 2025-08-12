import { Link } from "react-router-dom";
import cupSvg from "./../assets/errorImgs/errorImg.svg";
import "./../css/pages/ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page section">
      <div className="error-page__content">
        <img src={cupSvg} alt="Pusty kubek" className="error-page__img" />
        <h1 className="error-page__title">Ups! Coś poszło nie tak.</h1>
        <p className="error-page__text">
          Nie znaleźliśmy tej strony. Może spróbujesz wrócić do kawy?
        </p>
        <Link to="/" className="error-page__btn">
          Wróć na stronę główną
        </Link>
      </div>
    </div>
  );
}
