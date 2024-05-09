import { createContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (newProduct) => {
    const condition = isInCart(newProduct.id);

    if (condition) {
      const productsMod = cart.map((productCart) => {
        if (productCart.id === newProduct.id) {
          return {
            ...productCart,
            quantity: productCart.quantity + newProduct.quantity,
          };
        } else {
          setCart([...cart, newProduct]);
        }
      });
      setCart(productsMod);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  // Calculo de cantidad total de productos en el carrito
  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );
    return quantity;
  };

  // Calcular el precio total de toda la compra
  const totalCartPrice = () => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    return totalPrice;
  };
  // Vaciar Carrito
  const clearCart = (checkout) => {
    if (checkout === true) {
      setCart([]);
    } else {
      Swal.fire({
        title: "¿Estas Seguro?",
        text: "Se eliminaran todos los elementos de tu compra",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([]);
          Swal.fire({
            title: "Exito!",
            text: "Tu carrito ha sido vaciado",
            icon: "success",
          });
        }
      });
    }
  };

  // Detectar si un producto se encuentra o no en el carrito
  const isInCart = (productId) => {
    const condition = cart.some((product) => product.id === productId);
    return condition;
  };

  // Eliminar un producto del carrito por ID
  const deleteProductById = (productId) => {
    const productsFilter = cart.filter((product) => product.id !== productId);
    setCart(productsFilter);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        totalQuantity,
        clearCart,
        deleteProductById,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
