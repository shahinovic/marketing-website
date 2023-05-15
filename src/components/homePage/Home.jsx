import React from "react";
import "./Home.css";
import { SliderComponent } from "../slider/SliderComponent";

import FeatureProduct from "./FeatureProduct/FeatureProduct";
import { useGetProductsQuery } from "../../reduxServices/ProductsApi";

function Home({ setHomeCategory }) {
  const products = useGetProductsQuery("products")?.data?.slice(0, 3);
  return (
    <>
      <div className="Home">
        <SliderComponent products={products} />
      </div>
      <FeatureProduct setHomeCategory={setHomeCategory} />
    </>
  );
}

export default Home;
