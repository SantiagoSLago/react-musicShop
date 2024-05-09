import { useState } from "react";
import "../Styles/countController.css";
const CountController = ({ handleAddToCart, stock }) => {
  const [contador, setContador] = useState(1);

  const handleAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const handlesubtract = () => {
    setContador(contador - 1);
  };
  return (
    <div className="counterHolder">
      <button onClick={handlesubtract} className="btn-plus-minus">
        -
      </button>
      <button onClick={handleAdd} className="btn-plus-minus">
        +
      </button>
      <p>Cantidad: {contador}</p>
      <div>
        <button onClick={() => handleAddToCart(contador)}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};
export default CountController;
