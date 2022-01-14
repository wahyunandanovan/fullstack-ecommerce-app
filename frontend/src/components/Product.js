import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

export const Product = ({ imageUrl, name, price, description, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description ">{description}...</p>
        <p className="info__price">${price}</p>
        <Link
          to={`/product/${productId}`}
          className="info__button bg-slate-600 rounded-md text-slate-50 hover:bg-slate-900"
        >
          View
        </Link>
      </div>
    </div>
  );
};
