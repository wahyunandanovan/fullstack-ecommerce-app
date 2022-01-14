import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// act
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import { useParams, useNavigate } from "react-router-dom";

const ProductScreen = ({}) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && params && params.id !== product._id) {
      dispatch(getProductDetails(params.id));
    }
  }, [dispatch, product, params]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    navigate("/cart");
  };

  return (
    <div className="productscreen flex flex-wrap justify-center">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productsrenn__left grid w-1/2">
            <div className="left__image">
              <img className="p-8 shadow-sm " src={product?.imageUrl} alt={product?.name} />
            </div>
            <div className="left__info bg-white m-8 p-5 border ">
              <p className="text-2xl font-bold">{product.name}</p>
              <p className="text-xl font-semibold pt-2 border-b pb-1 ">${product.price}</p>
              <p className="pt-2 ">Descriptions : {product.description} </p>
            </div>
          </div>
          <div className="productscreen__right p-8 m-20 xl:w-1/6 sm:w-full ">
            <div className="right__info grid gap-4">
              <p className="text-2xl font-bold bg-white p-5">
                Price :<span className="text-green-500 ml-2">${product.price}</span>
              </p>
              <p className="font-bold text-2xl bg-white p-5">
                Status :
                <span className="font-semibold ml-2 ">{product.countInStock > 0 ? "In Stock" : "Out Stock"}</span>
              </p>
              <p className="font-bold text-2xl bg-white p-5">
                Qty :
                <select
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="ml-8 p-1 rounded-sm border bg-white w-1/2"
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                  ,
                </select>
              </p>
              <p className="">
                <button
                  onClick={addToCartHandler}
                  className="bg-slate-600 w-full p-2 text-white hover:bg-slate-900 rounded-sm "
                  type="button"
                >
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductScreen;
