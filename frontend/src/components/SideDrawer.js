import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";
import { useSelector } from "react-redux";

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links text-center pt-80 text-2xl" onClick={click}>
        <li className="bg-zinc-900 text-slate-100 p-2">
          <Link to="/cart">
            <i className="fas fa-shopping-cart px-2 hover:text-green-500"></i>{" "}
            <span className="hover:text-green-500">Cart</span>
            <span className="sidedrawer__cartbridge px-2">{getCartCount()}</span>
          </Link>
        </li>
        <li className="font-bold hover:text-green-500 border text-white bg-slate-500 mt-2 p-1">
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
