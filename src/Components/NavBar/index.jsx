import { useContext } from "react";
import "./style.css";
import { BsCart2, BsMoon, BsMoonFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/reducers/themeSlice";
export default function NavBar() {
  const { state } = useContext(CartContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.value);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            C
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/products"
                  aria-disabled="true"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart" aria-disabled="true">
                  Cart
                </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-2">
              <div
                onClick={() => {
                  dispatch(toggleTheme());
                }}
              >
                {currentTheme === "light" ? <BsMoon /> : <BsMoonFill />}
              </div>

              <BsCart2
                onClick={() => {
                  navigate("/cart");
                }}
              />
              {state.totalCount}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
