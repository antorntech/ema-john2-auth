import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  const { product, handleRemoveProduct } = props;
  const { name, img, price, shipping, quantity } = props.product;
  return (
    <div className="review-items">
      <div className="">
        <img src={img} width="120px" height="100px" alt="" />
      </div>
      <div className="review-container">
        <div className="review-item-details">
          <p className="product-name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            Price: <span style={{ color: "orange" }}>{price}</span>
          </p>
          <p>
            <small>
              Shipping: <span style={{ color: "orange" }}>{shipping}</span>
            </small>
          </p>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveProduct(product)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
