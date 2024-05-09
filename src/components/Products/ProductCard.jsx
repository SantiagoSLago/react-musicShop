import "../Styles/productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard" key={product.id} to={`/details/${product.id}`}>
      <div>
        <img src={product.image} alt={product.name} className="productImage" />
      </div>
      <div className="productInfo">
        
        <p>Nombre: {product.name}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio Unitario: ${product.price}</p>

        <Link to={`/details/${product.id}`}><button>Detalle</button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
