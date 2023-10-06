import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";

export default function Layout() {
  return (
    <div>
      <div className="top-bar">
        <div className="links d-flex gap-3">
          <NavLink to="/login">SignIn / Guest</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
      <NavBar />
      <Outlet />
    </div>
  );
}
