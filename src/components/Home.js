import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import avatar from "./images/icons/avatar.png";
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
      <div className="row container-fluid">
        <div className="col-xl-6">
          <div className="wapper">
            <h2>Xin chào!!!</h2>
            <h3>
              Mình là
              <span ref={textRef}></span>
            </h3>
            <button onClick={onClick}>Bắt đầu</button>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="home__img">
            <img src={avatar} alt="thienthien" />
          </div>
        </div>
      </div>
    </div>
  );
}
