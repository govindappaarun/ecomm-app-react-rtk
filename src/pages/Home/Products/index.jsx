import { useEffect, useState } from "react";
import ProductFilterForm from "./ProductFilterForm";
import axios from "axios";
import ProductList from "./ProductList";
export default function Products() {
  const [products, setProducts] = useState([]);
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((res) => {
        setProducts(res.data.data);
        setMeta(res.data.meta);
      });
  }, []);

  return (
    <div className="container">
      {meta && (
        <ProductFilterForm
          companies={meta.companies}
          categories={meta.categories}
        />
      )}
      {products && <ProductList products={products} />}
    </div>
  );
}
