import React, { useState } from "react";
import Home from "./components/Home";
import Product from "./components/Product";
import Contact from "./components/Contact";
import About from "./components/About";
const PAGE_HOME = "home";
const PAGE_CONTACT = "contact";
const PAGE_PRODUCT = "product";
const PAGE_ABOUT = "about";

export default function Controller() {
  const [page, setPage] = useState(PAGE_HOME);
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div id="controller">
      <header>
        <li onClick={() => navigateTo(PAGE_HOME)}>Home</li>
        <li onClick={() => navigateTo(PAGE_ABOUT)}>About</li>
        <li onClick={() => navigateTo(PAGE_PRODUCT)}>Product</li>
        <li onClick={() => navigateTo(PAGE_CONTACT)}>Contact</li>
      </header>
      {page === PAGE_HOME && <Home />}
      {page === PAGE_CONTACT && <Contact />}
      {page === PAGE_ABOUT && <About />}
      {page === PAGE_PRODUCT && <Product />}
    </div>
  );
}
