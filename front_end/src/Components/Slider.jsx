import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import ProdCard from "./ProdCard";

function Responsive() {
  const [dynamicSettings, setDynamicSettings] = useState(null);

  // Function to handle responsive changes
  const handleResponsiveChange = () => {
    if (window.innerWidth >= 1024) {
      setDynamicSettings({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      });
    } else if (window.innerWidth >= 600) {
      setDynamicSettings({
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
        dots: true
      });
    } else {
      setDynamicSettings({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
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
  const applySettingsButton1 = () => {
    setDynamicSettings({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    });
  };
  const applySettingsButton2 = () => {
    setDynamicSettings({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    });
  };  const applySettingsButton3 = () => {
    setDynamicSettings({
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    });
  };  const applySettingsButton4 = () => {
    setDynamicSettings({
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true
    });
  };

  return (
    <>
      <div className="slider-container">
        <button onClick={applySettingsButton2} className="btn btn-primary">Grid 2</button>
        <button onClick={applySettingsButton3} className="btn btn-primary">Grid 3</button>
        <button onClick={applySettingsButton4} className="btn btn-primary">Grid 4</button>
        <button onClick={applySettingsButton1} className="btn btn-primary">Grrid 1</button>


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
