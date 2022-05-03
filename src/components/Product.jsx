import React from "react";
import Slider from "react-slick";
import POSList from "./DataPOS";
import PetList from "./DataPet";
import book from "./images/icons/book-item.gif";
import "./styles/style.css";
export default function Product() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const listBook = [
    {
      title: "Book",
      img: book,
    },
    {
      title: "Book",
      img: book,
    },
    {
      title: "Book",
      img: book,
    },
  ];
  const listProducts = [
    {
      key: 1,
      title: "POS-Restaurant (Project đầu tiên của mình)",
      product: POSList,
    },
    {
      key: 2,
      title: "Shop bán phụ kiện thú cưng",
      product: PetList,
    },
  ];
  return (
    <div id="ProductPage">
      {listProducts.map((product, index) => (
        <>
          <h4 className="product--title">{product.title}</h4>
          <div className="row product--item container-fluid">
            <Slider {...settings}>
              {product.product.map((p) => (
                <img className="product__img" src={p.img} />
              ))}
            </Slider>
          </div>
          <div className="happy--item">
            {listBook.map((book) => (
              <img className="happy__img" src={book.img} />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
