import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <nav className="xl:flex bg-zinc-900 sm:flex p-8  justify-between items-center ">
      {/* logo */}
      <div className="navbar__logo">
        <h2 className="font-bold text-2xl text-slate-100">Monggo Shopping Cart</h2>
      </div>
      {/* link */}
      <div className="flex w-max text-xl rounded-md items-center md:flex sm:hidden">
        <ul className="flex items-center">
          <li className="text-slate-100 hover:text-green-500 bg-slate-800 p-3 rounded-md">
            <Link to="/cart">
              <i className="fas fa-shopping-cart p-1"></i>
              Cart
              <span className="cartlogo__badge bg-slate-100 text-zinc-900 rounded-full p-1 ml-2 border ">
                {getCartCount()}
              </span>
            </Link>
          </li>
          <li className="ml-8 text-slate-100 hover:text-green-500">
            <Link to="/">Shop</Link>
          </li>
        </ul>
      </div>
      {/* humbergermenu */}
      <div onClick={click} className="flex flex-col cursor-pointer justify-between hover:bg-red-500">
        <div className="bg-slate-100 w-10 h-1 mb-1"></div>
        <div className="bg-slate-100 w-10 h-1 "></div>
        <div className="bg-slate-100 w-10 h-1 mt-1"></div>
      </div>
    </nav>
  );
};
export default Navbar;
