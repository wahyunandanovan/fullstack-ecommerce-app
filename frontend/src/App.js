import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeScreen from "./screen/HomeScreen";
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
import Navbar from "./components/Navbar";
import SideDRawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import { useState } from "react";

function App() {
  const [sideToggle, setSideTogle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar click={() => setSideTogle(true)} />
      <SideDRawer show={sideToggle} click={() => setSideTogle(false)} />
      <Backdrop show={sideToggle} click={() => setSideTogle(false)} />

      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/product/:id" element={<ProductScreen />} />
          <Route exact path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
