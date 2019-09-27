import React, { useState } from "react";

import iconLaser from "../img/icon_laser.png";
import iconMachining from "../img/icon_machining.png";
import iconGrinding from "../img/icon_grinding.png";

import { Carousel, Image } from "react-bootstrap";

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}
      style={carStyle}
    >
      <Carousel.Item style={itemStyle}>
        <Image src={iconLaser} alt="Laser slide" style={imgStyle} />
        <Carousel.Caption style={capStyle}>
          <h5>Laser Processing</h5>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <Image src={iconMachining} alt="Machining slide" style={imgStyle} />
        <Carousel.Caption style={capStyle}>
          <h5>Machining</h5>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "100%" }}>
        <Image src={iconGrinding} alt="Grinding slide" style={imgStyle} />
        <Carousel.Caption style={capStyle}>
          <h5>Grinding</h5>
          <p>Description</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
const carStyle = {
  backgroundColor: "var(--lmp-dark-blue)",
  textAlign: "center",
  marginBottom: "3rem",
  paddingTop: "3rem",
  paddingBottom: "3rem",
  position: "relative"
};

const capStyle = {
  position: "relative",
  left: "0",
  right: "0",
  marginBottom: "0"
};

const imgStyle = {
  height: "231px",
  position: "relative"
};

const itemStyle = {
  width: "100%"
};
