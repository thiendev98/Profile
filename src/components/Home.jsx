import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import reactjs from "./images/icons/reactjs.png";
import "./styles/style.css";
export default function Home({ onClick }) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 200,
      strings: ["Sinh viên năm 3", "Frontend developer"],
    });
  }, []);
  return (
    <div id="HomePage">
      <div className="content__home">
        <div className="row container-fluid home--item">
          <div className="col-xl-6 col-lg-6 col-md-6 cod-sm-12 col-12">
            <div className="wapper">
              <h2>Xin chào!!!</h2>
              <h3>
                Mình là
                <span ref={textRef}></span>
              </h3>
            </div>
            <div className="button-btn">
              <button onClick={onClick}>Giới thiệu</button>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 home--images">
            <img className="home__img" src={reactjs} />
          </div>
        </div>
      </div>
    </div>
  );
}
