import React from "react";
import { Link } from "react-router-dom";

export const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="flex bg-white m-8 max-w-3xl p-2 items-center border shadow-sm">
      <div>
        <img className="w-28 border" src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p className="text-2xl font-bold pl-5 hover:text-green-500 ">{item.name}</p>
      </Link>
      <p className="cartitem__price text-green-500 pl-5 text-2xl">{item.price}</p>
      <select
        className="ml-5 border-2 w-24 text-center"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button onClick={() => removeHandler(item.product)}>
        <i className="fas fa-trash border-2 w-24 text-center ml-5 p-1 hover:text-red-600"></i>
      </button>
    </div>
  );
};
