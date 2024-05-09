import ProductCard from "./ProductCard";
import "../Styles/productCard.css"

const ShowAllProducts = ({ products }) => {
  return (
    <div className="itemListHolder">
      <h2>All our products</h2>
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
