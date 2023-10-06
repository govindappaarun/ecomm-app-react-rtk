import { Link } from "react-router-dom";

function Card(props) {
  const { product } = props;
  return (
    <Link to={`/products/${product.id}`}>
      <div
        className="g-col-4 g-col-md-4 card shadow-md"
        style={{ width: "18rem" }}
      >
        <img
          src={`${product["attributes"]["image"]}&w=200`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product["attributes"]["title"]}</h5>
          <button className="btn btn-primary">
            {product["attributes"]["price"]}
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
