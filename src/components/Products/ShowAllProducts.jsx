import ProductCard from "./ProductCard";
import "../Styles/productCard.css"

const ShowAllProducts = ({ products,productsName }) => {
  console.log(productsName)
  return (
    <div className="itemListHolder">
 

      <h2>{productsName !== null ? `${productsName} catalog` : "All our products"}</h2>
      <div className="itemsList">
        {products.map((product) => {
          return (
                        
            <div key={product.id} className="productCardHolder">
              <ProductCard product={product} />
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default ShowAllProducts;
