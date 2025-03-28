import React from "react";
import "./ImageWheel.css";

const ImageWheel = () => {
  return (
    <div className="banner">
      <div className="inside-banner">
        <div className="slider">
          <div className="item _01">
            <img src="/camera.jpg" alt="image-1" />
          </div>
          <div className="item _02">
            <img src="/2.jpg" alt="image-1" />
          </div>
          <div className="item _03">
            <img src="/bw.jpg" alt="image-1" />
          </div>
          <div className="item _04">
            <img src="/3.jpg" alt="image-1" />
          </div>
          <div className="item _05">
            <img src="/camera.jpg" alt="image-1" />
          </div>
          <div className="item _06">
            <img src="/4.jpg" alt="image-1" />
          </div>
          <div className="item _07">
            <img src="/5.jpg" alt="image-1" />
          </div>
          <div className="item _08">
            <img src="/1.jpg" alt="image-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWheel;
