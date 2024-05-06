import  { useState, useEffect } from "react";
import Slider from "react-slick";
import img from '@Assets/images/furniture-images/product/1.jpg';
import img2 from '@Assets/images/furniture-images/product/2.jpg';

export default function SimpleSlider(props) {
  const [settings, setSettings] = useState({
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20%", // Default center padding for mobile
    slidesToShow: 1,
    speed: 500,
    arrows: false,
  });

  useEffect(() => {
    function updateSettings() {
      if (window.innerWidth >= 1920) {
        setSettings(prevSettings => ({
          ...prevSettings,
          centerPadding: "30%", // For large desktops
        }));
      } else if (window.innerWidth >= 1440) {
        setSettings(prevSettings => ({
          ...prevSettings,
          centerPadding: "25%", // For desktops
        }));
      } else if (window.innerWidth >= 1200) {
        setSettings(prevSettings => ({
          ...prevSettings,
          centerPadding: "15%", // For laptops
        }));
      } else if (window.innerWidth >= 1024) {
        setSettings(prevSettings => ({
          ...prevSettings,
          centerPadding: "17%", // For tablets
        }));
      } else {
        setSettings(prevSettings => ({
          ...prevSettings,
          centerPadding: "10%", // For mobile
        }));
      }
    }
    
    // Call updateSettings initially and add event listener for window resize
    updateSettings();
    window.addEventListener("resize", updateSettings);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={`http://localhost:8000/api/images/products/${props.image}`} alt="" height={"300px"} width={"300px"}/>
        </div>



      </Slider>
    </div>
  );
}
