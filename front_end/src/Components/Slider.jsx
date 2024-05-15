import Slider from "react-slick";
import ProdHome from "./ProdHome.jsx";
import { useEffect, useState } from "react";
import axiosClient from "../api/axios.js";

function Responsive() {
  const [latest, setLatest] = useState([]);
  
  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/latest').then((response) => {
      setLatest(response.data);
    })
  }, [])

  // Adjust settings based on the number of items in 'latest'
  const settings = {
    dots: true,
    infinite: latest.length > 1, // Set infinite to false when there's only one photo
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: latest.length > 3, // Adjust according to the number of items
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: latest.length > 2 // Adjust according to the number of items
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: latest.length > 1 // Adjust according to the number of items
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {latest.map((prod) => (
          <div key={prod.id}>
            <ProdHome prod={prod} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
