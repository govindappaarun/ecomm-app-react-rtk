import { useEffect, useState } from "react";
import axios from "axios";

const featureProductsUrl =
  "https://strapi-store-server.onrender.com/api/products?featured=true";
export default function () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(featureProductsUrl).then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div>
      {products.length > 0 && (
        <div class="grid text-center">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function Card({ product }) {
  return (
    <div class="g-col-4 g-col-md-4 card shadow-md" style={{ width: "18rem" }}>
      <img
        src={`${product["attributes"]["image"]}&w=200`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{product["attributes"]["title"]}</h5>
        <a href="#" className="btn btn-primary">
          {product["attributes"]["price"]}
        </a>
      </div>
    </div>
  );
}
