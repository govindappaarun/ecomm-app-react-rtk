import { useEffect } from "react";
import ProductFilterForm from "./ProductFilterForm";
import ProductList from "./ProductList";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/reducers/productSlice";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const meta = useSelector((state) => state.products.meta);

  useEffect(() => {
    // getProducts();
    dispatch(getProducts());
  }, [dispatch]);

  // function getProducts() {
  //   console.log(form);
  //   console.log(new URLSearchParams(form).toString());
  //   const qs = new URLSearchParams(form).toString();
  //   axios
  //     .get(
  //       `https://strapi-store-server.onrender.com/api/products?${
  //         qs.length > 0 ? qs : ""
  //       }`
  //     )
  //     .then((res) => {
  //       setProducts(res.data.data);
  //       setMeta(res.data.meta);
  //     });
  // }

  const handleSearch = (form) => {
    const queryString = form ? new URLSearchParams(form).toString() : "";
    console.log({ queryString });
    dispatch(getProducts(queryString));
    // setForm(form);
    setSearchParams(form, () => {
      console.log(searchParams);
    });
  };

  return (
    <div className="container">
      {meta && (
        <ProductFilterForm
          companies={meta.companies}
          categories={meta.categories}
          handleSearch={handleSearch}
        />
      )}
      {products && <ProductList products={products} />}
    </div>
  );
}
