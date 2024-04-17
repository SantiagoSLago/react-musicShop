import { products } from "../data/products";

export const getAllProducts = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(products)
        reject("Data Error")
    }, 2000);
})