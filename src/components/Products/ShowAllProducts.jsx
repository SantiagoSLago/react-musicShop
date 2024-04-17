import ProductCard from "./ProductCard";

const ShowAllProducts = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllProducts
