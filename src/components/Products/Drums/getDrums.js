import { products } from "../../data/products";

export const getDrums = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products.filter((product)=>product.category == "drums"))
        reject("Data Error-Guitars")
    }, 2000);
     
}
)
