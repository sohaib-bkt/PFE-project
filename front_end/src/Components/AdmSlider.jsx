import React, { Component } from "react";
import Slider from "react-slick";
import image from "@Assets/images/musashi.jpg";

function AdmSlider() {
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        arrows: false,
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="sliderdiv">
            <img src={image} alt="image" />
        </div>
        <div className="sliderdiv">
            <img src={image} alt="image" />
        </div>
        <div className="sliderdiv">
            <img src={image} alt="image" />
        </div>
      </Slider>
    </div>
  );
}

export default AdmSlider;
