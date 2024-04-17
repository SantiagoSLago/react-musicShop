import { useState, useEffect } from "react";
import { getGuitars } from "./getGuitars";
import ShowAllProducts from "../ShowAllProducts";


const GuitarsList = () => {
    const [guitars,setGuitars] = useState([])

    getGuitars
    .then((resp)=>{
        setGuitars(resp)
    })
    .catch((data) => {
        console.log(data)
    })

    return(
        <div>
            <h1>Listado de Guitarras</h1>
            <ShowAllProducts products={guitars} />
        </div>
    )
    
}

export default GuitarsList