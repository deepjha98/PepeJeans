import React from "react";
import { RiShareForwardFill } from "react-icons/ri";

////////////////////////////////////////////////
const OrderDetails = ({
  PantsProductImg,
  ProductName,
  description,
  quantity,
  size,
  price,
}) => {
  return (
    <div className="order-details">
      <div className="order-details__header">
        <h4 className="order-details--info">Order Details</h4>
        <div className="order-details--share">
          <RiShareForwardFill />
          <span className="share--span">Share this product</span>
        </div>
      </div>
      <div className="order-details__info">
        <div className="order-details__img">
          <img
            className="order-details__img--image"
            src={PantsProductImg}
            alt="product"
          ></img>
        </div>
        <div className="order-details__description">
          <div className="product--title">{ProductName}</div>
          <div className="product--info">{description}</div>
          <div className="product--details">
            <span>Size : {size}</span> | <span>Qty:{quantity}</span>
          </div>
          <div className="product--price">
            <span>Rs.</span>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
};
////////////////////////////////////////////////
export default OrderDetails;
