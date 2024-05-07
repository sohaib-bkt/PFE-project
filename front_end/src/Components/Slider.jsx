import axiosClient from "../api/axios.js";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProdHome from "./ProdHome";  
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function SliderHome() {
  const [latest, setLatest] = useState([]);
  
  useEffect(() => {
    axiosClient.get('http://localhost:8000/api/latest').then((response) => {
      setLatest(response.data);
    });
  }, []);
  
  return (
    <div style={{ margin: '20px' }}> {/* Inline style for margin */}
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {latest.map((prod) => (
          <SwiperSlide key={prod.id}>
            <ProdHome prod={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
  
    </div>
  );
}
