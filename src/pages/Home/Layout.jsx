import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { useSelector } from "react-redux";

export default function Layout() {
  const { isLoggedIn, user } = useSelector(state => state.auth)
  return (
    <div>
      <div className="top-bar">
        <div className="links d-flex gap-3">
          {!isLoggedIn &&
            <>
              <NavLink to="/login">SignIn / Guest</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>}
          {isLoggedIn &&
            <>
              <div>Welcome {user.username} </div>
              <button>Logout</button>
            </>
          }
        </div>
      </div>
      <NavBar />
      <Outlet />
    </div>
  );
}
