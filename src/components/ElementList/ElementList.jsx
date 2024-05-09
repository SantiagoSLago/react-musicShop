import "./ElementList.css";
import { Link } from "react-router-dom";

const ElementList = () => {
  return (
    <ul>
      <Link to={"/category/guitar"} className="link">Guitars</Link>
      <Link to={"/category/bass"} className="link">Bass</Link>
      <Link to={"/category/drums"} className="link">Drums</Link>
    </ul>
  );
};

export default ElementList;
