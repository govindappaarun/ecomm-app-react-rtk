import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const featureProductsUrl =
  "https://strapi-store-server.onrender.com/api/products?featured=true";

export default function FeatureProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(featureProductsUrl).then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div className="grid d-flex gap-3 text-center">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}
