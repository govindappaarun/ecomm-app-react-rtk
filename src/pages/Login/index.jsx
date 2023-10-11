import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginForm);
    if (loginForm.email.length && loginForm.password.length) {
      doLogin({ ...loginForm });
    }
  };
  const doLogin = ({ email, password }) => {
    axios
      .post("https://strapi-store-server.onrender.com/api/auth/local", {
        identifier: email,
        password: password,
      })
      .then((res) => {
        setLoginForm({ email: "", password: "" });
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      });
  };
  const handleGuestLogin = () => {
    doLogin({ email: "test@test.com", password: "secret" });
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center h-100vh">
      <div className="form-container">
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={handleGuestLogin}
            >
              Guest User
            </button>
          </div>
        </form>
        <p>
          Not a member yet? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}
