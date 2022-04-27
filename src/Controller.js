import React, { useState } from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Hobby";
import About from "./components/Target";
import $ from "jquery";
import "./components/styles/style.css";
import {
  FaFacebookMessenger,
  FaFacebook,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import avatar from "./components/images/avatar.jpg";
import user from "./components/images/user.gif";
import book from "./components/images/book.gif";
import heart from "./components/images/heart.gif";
import target from "./components/images/target.gif";
import Target from "./components/Target";
import Hobby from "./components/Hobby";
const PAGE_HOME = "home";
const PAGE_HOBBY = "hobby";
const PAGE_PRODUCT = "product";
const PAGE_TARGET = "target";

export default function Controller() {
  const [page, setPage] = useState(PAGE_HOME);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };
  const infoList = [
    {
      title: "Email",
      content: "thien.dohoangcs98@gmail.com",
    },
    {
      title: "Ngày sinh",
      content: "28 - 05 - 1998",
    },
    {
      title: "Số điện thoại",
      content: "0865676490",
    },
    {
      title: "Quê quán",
      content: "Phước Long - Bạc Liêu",
    },
  ];
  const sidebarList = [
    {
      title: "Giới thiệu",
      image: user,
      page: PAGE_HOME,
    },
    {
      title: "Sở thích",
      image: heart,
      page: PAGE_HOBBY,
    },
    {
      title: "Sản phẩm",
      image: book,
      page: PAGE_PRODUCT,
    },
    {
      title: "Mục tiêu",
      image: target,
      page: PAGE_TARGET,
    },
  ];
  return (
    <div id="controller">
      <marquee onmouseover="this.stop()" onmouseout="this.start()">
        Chào mừng bạn đến với Website của tôi...
      </marquee>
      <header>
        <div className="header container-fluid">
          <div className="row">
            <div className="col-xl-0 col-lg-2 col-md-2 col-sm-1 col-0"></div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-3 col-12">
              <img className="header__avatar" src={avatar} alt="avatar" />
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5 col-sm-7 col-12">
              <h4 className="header__name">Đỗ Hoàng Thiên</h4>
              <p className="header__about">Frontend Developer</p>
              <ul className="header__list">
                <li className="header__link">
                  <FaFacebook className="icon" />
                </li>
                <li className="header__link">
                  <FaFacebookMessenger className="icon" />
                </li>
                <li className="header__link">
                  <FaInstagram className="icon" />
                </li>
                <li className="header__link">
                  <FaGithub className="icon" />
                </li>
              </ul>
            </div>
            <div className="row col-xl-6 col-lg-12 col-md-12 container-fluid infoList">
              {infoList.map((info) => (
                <>
                  <div className="col-xl-0 col-lg-2 col-md-2 col-sm-1 col-1"></div>
                  <div className="col-xl-6 col-lg-4 col-md-4 col-sm-11 col-11">
                    <h5 className="infoList__title">{info.title}</h5>
                    <p className="infoList__content">{info.content}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="row">
          <div className="col-2">
            <div className="sidebar">
              <div className="sidebar__list">
                {sidebarList.map((list) => (
                  <div
                    className="sidebar__link"
                    onClick={() => navigateTo(list.page)}
                  >
                    <img className="sidebar__img" src={list.image} />
                    <span>{list.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-10">
            <div className="content">
              {page === PAGE_HOME && <Home />}
              {page === PAGE_TARGET && <Target />}
              {page === PAGE_HOBBY && <Hobby />}
              {page === PAGE_PRODUCT && <Product />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
