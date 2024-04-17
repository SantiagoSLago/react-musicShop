import { useState, useEffect } from "react";
import { getDrums } from "./getDrums";
import ShowAllProducts from "../ShowAllProducts";


const DrumsList = () => {
    const [drums,setDrums] = useState([])

    getDrums
    .then((resp)=>{
        setDrums(resp)
    })
    .catch((data) => {
        console.log(data)
    })

    return(
        <div>
            <h1>Listado de Baterias</h1>
            <ShowAllProducts products={drums} />
        </div>
    )
    
}

export default DrumsList