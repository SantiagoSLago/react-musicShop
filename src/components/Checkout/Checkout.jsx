import { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup.js";
import { toast } from "react-toastify";
import "../Checkout/checkout.css";

export const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalCartPrice, clearCart } = useContext(CartContext);
  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    //Dandole formato a la orden
    event.preventDefault();
    const order = {
      user: {
        ...dataForm,
      },
      products: [...cart],
      total: totalCartPrice(),
    };

    // Subir la orden a Firebase
    //--> Validacion de los campos del formulario <--
    const response = await validateForm(dataForm);
    if (response.status === "Success") {
      uploadOrder(order);
    } else {
      toast(response.error);
    }
  };
  const uploadOrder = async (order) => {
    const ordersRef = collection(db, "orders");
    const response = await addDoc(ordersRef, order);
    setIdOrder(response.id);
    //Borrar Carrito
    debugger
    const checkout = true;
    clearCart(checkout);
  };

  //EarlyReturn
  if (idOrder) {
    return (
      <div className="orderSuccessHolder">
        <div className="orderData">
          <h2>Compra realizada con exito</h2>
          <p>Id Order: {idOrder}</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <FormCheckout
        dataForm={dataForm}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
