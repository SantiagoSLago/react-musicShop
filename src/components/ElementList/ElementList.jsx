import "./ElementList.css";
import { Link } from "react-router-dom";

const ElementList = () => {
  return (
    <ul>
      <Link to={"/category/guitar"}>Guitars</Link>
      <Link to={"/category/bass"}>Bass</Link>
      <Link to={"/category/drums"}>Drums</Link>
    </ul>
  );
};

export default ElementList;
