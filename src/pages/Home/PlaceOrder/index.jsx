import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PlaceOrder() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      fullName: yup.string().required().min(5),
      address: yup.string().required().min(10),
    })
    .required();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    // console.log(data);
    const { jwt } = JSON.parse(localStorage.getItem("user"));
    const payload = {
      name: data.fullName,
      address: data.address,
      chargeTotal: 20298.9,
      orderTotal: "$202.99",
      cartItems: [
        {
          cartID: "6#FF5733",
          productID: 6,
          image:
            "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "coffee table",
          price: "17999",
          company: "Modenza",
          productColor: "#FF5733",
          amount: 1,
        },
      ],
      numItemsInCart: 1,
    };
    axios
      .post(
        "https://strapi-store-server.onrender.com/api/orders",
        {
          data: payload,
        },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then(() => navigate("/orderList"));
  };

  return (
    <div className="container">
      <h3>Place your order</h3>
      <hr />
      <h5>Shipping Information</h5>
      <form style={{ maxWidth: 500 }} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            placeholder="Enter Full Name"
            {...register("fullName")}
          />
          {errors.fullName && <p>{errors.fullName.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Shipping address"
            {...register("address")}
          />
          {errors.address && (
            <p style={{ color: "red" }}>{errors.address.message}</p>
          )}
        </div>
        <div className="d-flex">
          <button className="btn btn-primary flex-grow-1">Place Order</button>
        </div>
      </form>
    </div>
  );
}
