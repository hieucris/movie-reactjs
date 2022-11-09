import React from "react";
import { Carousel } from "antd";

export default function HomeCarousel() {
  const contentStyle = {
    height: "600px",
    color: "#fff",
    lineHeight: "600px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel effect="fade">
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos./1000" className="w-full" alt="123" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos./1000" className="w-full" alt="123" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos./1000" className="w-full" alt="123" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src="https://picsum.photos./1000" className="w-full" alt="123" />
        </h3>
      </div>
    </Carousel>
  );
}
