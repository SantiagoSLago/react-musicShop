import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../Styles/cart.css";
import { Checkout } from "../Checkout/Checkout";
import CartEmpty from "./CartEmpty";



const Cart = () => {
  const { cart, clearCart, deleteProductById, totalCartPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cartProductListHolder">
        <h2>Items</h2>
        {cart.map((product) => {
          return (
            <div className="cartProductCard" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="cartProductImage"
              />
              <div className="cartProductData">
                <p>Nombre: {product.name}</p>
                <p>Precio Unitario: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio Total: ${product.quantity * product.price}</p>
              </div>
              <button onClick={() => deleteProductById(product.id)}>
                Delete Product
              </button>
            </div>
          );
        })}
      </div>
      <div className="cartDataCheckoutHolder">
        <h2 className="totalAmount">Monto Carrito: ${totalCartPrice()}</h2>
        <button onClick={clearCart}>Clear Cart</button>
        <Link to="/checkout"> Continuar Compra</Link>
      </div>
    </div>
  );
};

export default Cart;
