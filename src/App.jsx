import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  MyNavbar,
  Contact,
  Home,
  Shop,
  Footer,
  Cart,
  ProductDetails,
} from "./components";
import "./App.css";
import { useGetProductsQuery } from "./reduxServices/ProductsApi";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [homeCategory, setHomeCategory] = useState("all");
  const products = useGetProductsQuery("products").data;

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <MyNavbar setOpenCart={setOpenCart} openCart={openCart} />
        {openCart && <Cart />}

        <Routes>
          <Route
            exact
            path="/"
            element={<Home setHomeCategory={setHomeCategory} />}
          />
          <Route path="/shop" element={<Shop homeCategory={homeCategory} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
