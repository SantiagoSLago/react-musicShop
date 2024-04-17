import { useState, useEffect } from "react";
import { getAllProducts } from "./getAllProducts";
import ShowAllProducts from "./ShowAllProducts";
import { useParams } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    getAllProducts
      .then((resp) => {
        if (idCategory) {
          const newProducts = resp.filter(
            (producto) => producto.category === idCategory
          );
          setProducts(newProducts);
        }else{
          setProducts(resp)
        }
      })
      .catch((data) => {
        console.log(data);
      });
  }, [idCategory]);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <ShowAllProducts products={products} />
    </div>
  );
};

export default ProductsList;
