import { useState, useEffect } from "react";
import { getAllProducts } from "./getAllProducts";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

const ProductDetailContainer = () => {
  const [product, SetProduct] = useState({});

  const {idProduct} = useParams()
  

  useEffect(() => {
    getAllProducts
      .then((resp) => {
        const newProduct = resp.find((product) => product.id == idProduct);
        console.log(newProduct)
        SetProduct(newProduct);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default ProductDetailContainer;
