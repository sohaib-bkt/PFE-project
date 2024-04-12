import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProdCard from "./ProdCard";

function Responsive({grid}) {
  const [dynamicSettings, setDynamicSettings] = useState(null);

  // Function to handle responsive changes
  const handleResponsiveChange = () => {
    if (window.innerWidth >= 1024) {
      setDynamicSettings({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    } else if (window.innerWidth >= 600) {
      setDynamicSettings({
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    } else {
      setDynamicSettings({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResponsiveChange(); // Call on initial render
    window.addEventListener("resize", handleResponsiveChange);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResponsiveChange);
    };
  }, []);

  // Function to apply settings when button 1 is clicked
  useEffect(() => {
    if (grid === 2) {
      setDynamicSettings({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    } else if (grid === 3) {
      setDynamicSettings({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    } else if (grid === 4) {
      setDynamicSettings({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    } else {
      // Default to grid 1
      setDynamicSettings({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        speed: 500,
        initialSlide: 0,
        rows: 2,
      });
    }
  }, [grid]);

  return (
    <>
      <div className="slider-container">
        <Slider {...(dynamicSettings || {})}>
          <div>
            <ProdCard />
          </div>
          <div>
            <ProdCard />
          </div>
          <div>
            <ProdCard />
          </div>
          <div>
            <ProdCard />
          </div>
          <div>
            <ProdCard />
          </div>
          <div>
            <ProdCard />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Responsive;
