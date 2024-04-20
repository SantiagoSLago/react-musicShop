import "../Styles/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  return (
    <div className="productCard">
      <div>
        <img src={product.image} alt={product.name} className="productImage" />
      </div>
      <div className="productInfo">
        <p>Id: {product.id}</p>
        <p>Nombre: {product.name}</p>
        <p>Categoria: {product.category}</p>
        <p>Modelo: {product.type}</p>
        <p>Descripcion: {product.description}</p>
        <p>Precio: {product.price}</p>
        <Link to= {`/details/${product.id}`}>Detalle</Link>
      </div>
    </div>
  );
};

export default ProductCard;
