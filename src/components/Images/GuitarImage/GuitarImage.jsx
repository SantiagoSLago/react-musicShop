import LogoTitle from "../../Titles/LogoTitile";
import "../GuitarImage/GuitarImage.css"
const GuitarImage = () => {
  return (
    <div className="logoDiv">
      <img src="/img/icono-guitarra.png" alt="" height={60} width={60}/>
      <LogoTitle/>
    </div>
  );
};

export default GuitarImage;
