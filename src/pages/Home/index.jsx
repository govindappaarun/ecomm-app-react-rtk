import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";
import FeatureProducts from "./Products/Feature-Products";

export default function () {
  const { state } = useLocation();
  return (
    <div>
      <div className="top-bar">
        <div className="links d-flex gap-3">
          <NavLink to="/login">SignIn / Guest</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
      <NavBar />
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
            <button className="btn btn-primary btn-lg">Our Products</button>
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
    </div>
  );
}
