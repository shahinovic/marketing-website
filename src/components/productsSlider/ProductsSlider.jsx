import React from "react";
import "./ProductsSlider.css";
import { Link } from "react-router-dom";

const ProductsSlider = ({ products, dir }) => {
  const renderSlides = () => {
    return products?.map((product) => {
      return (
        <Link to={`/product/${product.id}`} className="slide" key={product.id}>
          <img src={product.image} alt={product.name} />
        </Link>
      );
    });
  };
  return (
    <div className="products-slider">
      <div
        style={{
          animation: `${
            dir === "left"
              ? "slide 30s linear infinite"
              : "reverse-slide 30s linear infinite"
          }`,
        }}
        className="slider-track"
      >
        {renderSlides()}
      </div>
    </div>
  );
};

export default ProductsSlider;
