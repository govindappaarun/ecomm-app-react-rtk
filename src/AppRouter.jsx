import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRouter;
/*
Components 
 /Input
 /Footer 
 /Header
 /NavBar
 /Button

pages
 /Home
  Home.jsx
  style.css
  /dir1 

  /dir2 

  /dir3 


 /Login
  index.jsx
  style.css

 /Register
  
 /Product
 */
