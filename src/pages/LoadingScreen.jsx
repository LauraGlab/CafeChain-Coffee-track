import Logo from "./../assets/logoImgs/logo.svg";
import "./../css/pages/Loading.css";

const traceabilityData = [

];

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img className="loading-screen__image" src={Logo}/>
    </div>
  );
}
