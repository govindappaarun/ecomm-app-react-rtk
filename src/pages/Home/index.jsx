import { Link, NavLink, Outlet } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";
import FeatureProducts from "./Products/Feature-Products";

export default function Home() {
  return (
     <main style={{ marginLeft: "100px" }}>
        <section className="hero d-flex gap-2">
          <div
            className="d-flex flex-column align-items-start justify-content-center px-5 gap-3"
            style={{ flexGrow: 1 }}
          >
            <h1 className="display-3">We are changing the way people shop</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <Link to="products" className="btn btn-primary btn-lg">Our Products</Link>
          </div>
          <img
            style={{ width: "50%", height: "450px" }}
            src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
            alt="slider"
          />
        </section>
        <section className="feat-products">
          <h2>Feature Products</h2>
          <hr />
          <FeatureProducts />
        </section>
      </main> 
  );
}
