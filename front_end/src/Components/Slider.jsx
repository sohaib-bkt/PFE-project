import Slider from "react-slick";
import ProdHome from "../Components/ProdHome.jsx";
import { useEffect, useState } from "react";
import axiosClient from "../api/axios.js";


function Responsive() {
  const [latest, setLatest] = useState([]);
  
  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/latest').then((response) => {
      setLatest(response.data);
    })
  }, [])
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
