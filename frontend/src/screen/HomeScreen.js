import "./HomeScreen.css";
import { Product } from "../components/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title text-4xl font-bold p-10 m-auto">Latest Product</h2>
      <div className="homescreen__product grid gap-8 xl:grid-cols-6 md:grid-cols-3 sm:grid-col-1 ">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
