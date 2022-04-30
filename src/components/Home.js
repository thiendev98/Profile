import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import thien from "./images/icons/thien.png";
import "./styles/style.css";
export default function Home({ onClick }) {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2000,
      typeSpeed: 100,
      strings: ["Sinh viên năm 3", "Frontend developer"],
    });
  }, []);
  return (
    <div id="HomePage">
      <div className="content__home">
        <div className="row container-fluid">
          <div className="col-xl-6 col-lg-6 col-sm-7">
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
          <div className="col-xl-6 col-lg-6 col-sm-5">
            <div className="home__img">
              <div className="home__img--item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
