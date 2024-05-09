import "./CartImage.css"
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";


const CartWidget = () => {

  const {totalQuantity} = useContext(CartContext)
  return (
    <Link to="/cart" className="cartDiv">
      {/* <img src="/img/carrito.png" alt="" height={60} /> */}
      <i class="fa-solid fa-cart-shopping shopping-cart"></i>
      <i className="numberIcon">{totalQuantity()}</i>
    </Link>
  );
};

export default CartWidget;
