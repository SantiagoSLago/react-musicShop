import { products } from "../../data/products";

export const getBass = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products.filter((product)=>product.category == "bass"))
        reject("Data Error-Bass")
    }, 2000);
     
}
)
