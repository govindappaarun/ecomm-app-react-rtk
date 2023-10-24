// import { useEffect, useState } from "react";
// import axios from "axios";
import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureProducts } from "../../../redux/reducers/productSlice";

// const featureProductsUrl =
//   "https://strapi-store-server.onrender.com/api/products?featured=true";

export default function FeatureProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.featureProducts);
  
  // useEffect(() => {
  //   axios.get(featureProductsUrl).then((res) => setProducts(res.data.data));
  // }, []);

  useEffect(() => {
    dispatch(getFeatureProducts());
  }, [dispatch]);

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
