import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";
import ProductCard from "../ProductCard/ProductCard";
import { useGetProductsQuery } from "../../reduxServices/ProductsApi";

export function SliderComponent({ products }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const products = useGetProductsQuery("products")?.data?.slice(0, 3);
  if (!products) return null;

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div key={index} style={{ height: "fit-content" }}>
          <ProductCard product={product} index={index} />
        </div>
      ))}
    </Slider>
  );
}
