import "./CartScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// component
import { CartItem } from "../components/CartItem";

//act
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <div className="flex sm:flex-wrap justify-center cartscreen mt-8">
      {/* left */}
      <div className="">
        <h2 className="m-8  font-bold text-4xl">Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className=" p-5 text-xl ">
            Your cart is empty{" "}
            <Link className="text-green-500" to="/">
              Continue Shopping
            </Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      {/* right */}
      <div className="right bg-white p-8 w-max border shadow-sm h-60 mt-28">
        <div className="cartscreen__info text-xl">
          <p className="font-bold">Sub Total ({getCartCount()}) Items</p>
          <p className="text-green-500 border-b-2">${getCartSubtotal()}</p>
        </div>
        <div>
          <button className="bg-slate-700 text-white p-2 mt-14 rounded-md hover:bg-slate-900 mt-4">
            Procced to checkout
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
