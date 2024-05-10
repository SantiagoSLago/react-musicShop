import { useState, useEffect } from "react";
import { getAllProducts } from "./getAllProducts";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import CountController from "../ItemCount/CountController";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";
import "../Styles/productDetail.css";
const ProductDetailContainer = () => {
  const [product, SetProduct] = useState({});

  const { idProduct } = useParams();

  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count };
    addToCart(productCart);
  };

  // --> Firebase <--

  const getProduct = async () => {
    const docRef = doc(db, "products", idProduct);
    const dataDb = await getDoc(docRef);

    const data = {
      id: dataDb.id,
      ...dataDb.data(),
    };
    SetProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [idProduct]);


  return (
    <div className="productDetailHolder">
      <div className="imageCounterHolder">
        {/* <ProductCard product={product} /> */}
        <div className="detailImageHolder">
          <img
            src={product.image}
            alt={product.name}
            className="productImage"
          />
        </div>
        <div className="detailCounterHolder">
          <CountController
            handleAddToCart={handleAddToCart}
            stock={product.stock}
          />
        </div>
      </div>
      <div className="productDescription">
        <p>Nombre: {product.name}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio Unitario: ${product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailContainer;
