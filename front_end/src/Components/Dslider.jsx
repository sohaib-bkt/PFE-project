import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export default function Dslider(props) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
          <SwiperSlide style={{display:'flex', justifyContent:'center'}}><img src={`http://localhost:8000/api/images/products/${props.image}`}  height={'400px'}  width={'400px'} style={{objectFit:'cover' }}></img></SwiperSlide>
         { props.images && JSON.parse(props.images).map((imageName, index) => (
          <SwiperSlide key={index} style={{display:'flex', justifyContent:'center'}}>
            <img src={`http://localhost:8000/api/images/products/${imageName}`} height={"400px"} width={'400px'} style={{objectFit:'cover' }}alt="" />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}
