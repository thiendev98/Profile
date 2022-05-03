import React from "react";
import bkhcm from "./images/icons/bkhcm.png";
import spg9 from "./images/icons/spg9.jpg";
import thpt from "./images/icons/thpt.png";
import arrow from "./images/icons/arrow.gif";
import "./styles/style.css";
export default function Intro() {
  const introList = [
    {
      img: thpt,
      time: "07/2016",
      text: "Thi tốt nghiệp cấp 3 xong do không thực sự đam mê ngành học nào nên mình quyết định không học Đại học.",
    },
    {
      img: spg9,
      time: "12/02/2017 - 19/01/2019",
      text: "Tình nguyện nhập ngũ để rèn luyện bản thân tại Đại đội 15, Trung đoàn BB1, Sư đoàn 330, Quân khu 9 tại Chi Lăng - An Giang. Được nhận bằng khen 'Chiến sĩ tiên tiến' nhờ hoàn thành tốt nhiệm vụ được giao.",
    },
    {
      img: bkhcm,
      time: "8/2019 - Hiện tại",
      text: "Nhập học ngành Khoa học máy tính tại trường Đại học Bách Khoa - ĐHQG TP.HCM.",
    },
  ];
  const listArrow = [
    {
      title: "Arrow",
      img: arrow,
    },
    {
      title: "Arrow",
      img: arrow,
    },
    {
      title: "Arrow",
      img: arrow,
    },
    {
      title: "Arrow",
      img: arrow,
    },
    {
      title: "Arrow",
      img: arrow,
    },
  ];
  return (
    <div id="IntroPage">
      <div className="row container-fluid">
        {introList.map((intro) => (
          <>
            <div className="intro--item">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <img className="intro__img" src={intro.img} />
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <h4 className="intro__title">{intro.time}</h4>
                <p className="intro__text">{intro.text}</p>
              </div>
            </div>
            <div className="happy--item">
              {listArrow.map((arrow) => (
                <img className="happy__img" src={arrow.img} />
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
