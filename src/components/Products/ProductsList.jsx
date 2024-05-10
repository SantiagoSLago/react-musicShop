import { useState, useEffect } from "react";
// import { getAllProducts } from "./getAllProducts";
import ShowAllProducts from "./ShowAllProducts";
import { useParams } from "react-router-dom";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";
import Banner from "../Banner/Banner";
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [productsName,setProductsName] = useState(null)

  const { idCategory } = useParams();
  

  // --> Consulta Firebase <--
  const getProducts = async () => {
    try {
      const dataDb = await getDocs(collection(db, "products"));
      const data = dataDb.docs.map((productDb) => {
        return {
          id: productDb.id,
          ...productDb.data(),
        };
      });
      setProducts(data);
      setProductsName(null)
    } catch (error) {
      console.log(error);
    }
  };

  // --> Buscar productos por category <--
  const getProductsByCategory = async () => {
    const q = query(
      collection(db, "products"),
      where("category", "==", idCategory)
    );
    const dataDb = await getDocs(q);
    const data = dataDb.docs.map((productDb) => {
      return {
        id: productDb.id,
        ...productDb.data(),
      };
    });
    setProducts(data);
    setProductsName(data[0].category)
    console.log(productsName)
    
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);
  

  return (
    <div>
      <Banner/>
      <ShowAllProducts products={products} productsName ={productsName} />
    </div>
  );
};

export default ProductsList;
