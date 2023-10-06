import ProductCard from "./ProductCard";

export default function ProductList(props) {
  const { products } = props;
  return (
    <>
      <h5>{products.length} Products</h5>
      <hr />
      <div>
        {products.length > 0 && (
          <div className="grid d-flex gap-3 flex-wrap text-center">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
