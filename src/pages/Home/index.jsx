import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";

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
      <h2>Home Page</h2>
      {state?.email && <h4> Welcome {state.email} !</h4>}
    </div>
  );
}
