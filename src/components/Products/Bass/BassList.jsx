import { useState, useEffect } from "react";
import { getBass } from "./getBass";
import ShowAllProducts from "../ShowAllProducts";

const BassList = () => {
  const [bass, setBass] = useState([]);

  useEffect(
    getBass
      .then((resp) => {
        setBass(resp);
      })
      .catch((data) => {
        console.log(data);
      }),
    []
  );

  return (
    <div>
      <h1>Listado de Bajos</h1>
      <ShowAllProducts products={bass} />
    </div>
  );
};

export default BassList;
