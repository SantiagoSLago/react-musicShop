import { useState, useEffect } from "react";
// import { getAllProducts } from "./getAllProducts";
import ShowAllProducts from "./ShowAllProducts";
import { useParams } from "react-router-dom";
import db from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";
import Banner from "../Banner/Banner";
const ProductsList = () => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  // Desde aca firestore
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
    } catch (error) {
      console.log(error);
    }
  };

  // --> Buscar productos por category
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
  };

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategory]);
  //----------------------Hasta aca firebase--------------

  // useEffect(() => {
  //   getAllProducts
  //     .then((resp) => {
  //       if (idCategory) {
  //         const newProducts = resp.filter(
  //           (producto) => producto.category === idCategory
  //         );
  //         setProducts(newProducts);
  //       }else{
  //         setProducts(resp)
  //       }
  //     })
  //     .catch((data) => {
  //       console.log(data);
  //     });
  // }, [idCategory]);

  return (
    <div>
      <Banner/>
      <ShowAllProducts products={products} />
    </div>
  );
};

export default ProductsList;
