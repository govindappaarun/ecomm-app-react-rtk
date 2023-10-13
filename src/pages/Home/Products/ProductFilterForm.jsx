import { useState } from "react";

export default function ProductFilterForm(props) {
  const { companies = [], categories = [] } = props;

  const [orderTypes] = useState(["a-z", "z-a", "low", "high"]);
  const [form, setForm] = useState({
    search: "",
    order: orderTypes[0],
    company: companies[0],
    category: categories[0],
    shipping: "",
    price: 100000,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "radio" || type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    props.handleSearch(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row g-3">
          <div className="col">
            <label className="form-label">Search</label>
            <input
              name="search"
              type="text"
              className="form-control"
              placeholder="Product Name"
              aria-label="Product Name"
              value={form.search}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">Category</label>
            <select
              name="category"
              className="form-control"
              value={form.category}
              onChange={handleChange}
            >
              {categories.length > 0 &&
                categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
            </select>
          </div>
          <div className="col">
            <label className="form-label">Company</label>
            <select
              name="company"
              className="form-control"
              value={form.company}
              onChange={handleChange}
            >
              {companies.length > 0 &&
                companies.map((company) => (
                  <option key={company}>{company}</option>
                ))}
            </select>
          </div>
          <div className="col">
            <label className="form-label">Order</label>
            <select
              name="order"
              className="form-control"
              value={form.order}
              onChange={handleChange}
            >
              {orderTypes.length > 0 &&
                orderTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <label className="form-label">Price Range</label>
            <input
              type="range"
              name="price"
              min="0"
              max="100000"
              className="form-control"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="shipping"
                value={form.shipping}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Free shipping?
              </label>
            </div>
          </div>
          <div className="col">
            <button className="btn btn-primary">Search</button>
          </div>
          <div className="col">
            <button className="btn btn-secondary">Reset</button>
          </div>
        </div>
      </div>
    </form>
  );
}
