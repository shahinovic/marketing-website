import React from "react";
import "./Home.css";
import { SliderComponent } from "../slider/SliderComponent";

import FeatureProduct from "./FeatureProduct/FeatureProduct";
import { useGetProductsQuery } from "../../reduxServices/ProductsApi";
import ProductsSlider from "../productsSlider/ProductsSlider";

function Home({ setHomeCategory }) {
  const products = useGetProductsQuery("products")?.data;
  console.log("🚀 ~ file: Home.jsx:11 ~ Home ~ products:", products);

  return (
    <>
      <div className="Home">
        <SliderComponent products={products.slice(0, 3)} />
      </div>
      <FeatureProduct setHomeCategory={setHomeCategory} />
      <ProductsSlider products={products} dir="left" />
      <ProductsSlider products={[...products].reverse()} dir="right" />
    </>
  );
}

export default Home;
