import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Dslider(props) {
  return (
    <div style={{ position: 'relative' }}>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        modules={[Navigation]} 
        pagination={false} // Disable pagination
        className="mySwiper"
        loop={true} // Enable loop
      >
        <SwiperSlide style={{display:'flex', justifyContent:'center'}}>
          <img src={`http://localhost:8000/api/images/products/${props.image}`} height={'400px'} width={'400px'} style={{objectFit:'cover' }} alt="" />
        </SwiperSlide>
        {props.images && JSON.parse(props.images).map((imageName, index) => (
          <SwiperSlide key={index} style={{display:'flex', justifyContent:'center'}}>
            <img src={`http://localhost:8000/api/images/products/${imageName}`} height={"400px"} width={'400px'} style={{objectFit:'cover' }} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom navigation arrows */}
      <div className="custom-prev" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: '10'}}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '24px' }} />
      </div>
      <div className="custom-next" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: '10'}}>
        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
}
