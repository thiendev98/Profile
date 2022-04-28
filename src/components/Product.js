import React from "react";
import Slider from "react-slick";
import POSList from "./DataPOS";
import PetList from "./DataPet";
export default function Product() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
  };
  return (
    <div id="ProductPage">
      <Slider {...settings}>
        {PetList.map((list) => (
          <img src={list.img} />
        ))}
      </Slider>
    </div>
  );
}
