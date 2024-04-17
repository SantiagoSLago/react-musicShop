import LogoTitle from "../../Titles/LogoTitile";
import "../GuitarImage/GuitarImage.css"
import { Link } from "react-router-dom";
const GuitarImage = () => {
  return (
    <Link to={"/"} className="logoDiv">
      <img src="/img/icono-guitarra.png" alt="" height={60} width={60}/>
      <LogoTitle/>
    </Link>
  );
};

export default GuitarImage;
