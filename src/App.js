import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import BasketProducts from "./components/BasketProduct";

import { useEffect } from "react";
import { updateTotal } from "./features/basketSlice";

function App() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);
  return (
    <>
      <BasketProducts />
    </>
  );
}

export default App;
