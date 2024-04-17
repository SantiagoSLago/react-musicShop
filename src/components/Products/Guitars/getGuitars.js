import { products } from "../../data/products";

export const getGuitars = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products.filter((product)=>product.category == "guitar"))
        reject("Data Error-Guitars")
    }, 2000);
     
}
)
