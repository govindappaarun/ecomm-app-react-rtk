import { useLocation } from "react-router-dom";
import "./style.css";

export default function () {
  const { state } = useLocation();
  return (
    <div>
      <h2>Home Page</h2>
      {state?.email && <h4> Welcome {state.email} !</h4>}
    </div>
  );
}
