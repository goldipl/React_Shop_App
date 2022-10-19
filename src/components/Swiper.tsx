// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Keyboard, Mousewheel } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./../styles/swiper.css"

export default() => {
  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
    >
      <SwiperSlide><img className="swiper-image" src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg" alt="Image 01" /></SwiperSlide>
      <SwiperSlide><img className="swiper-image" src="https://images.pexels.com/photos/972887/pexels-photo-972887.jpeg" alt="Image 02" /></SwiperSlide>
      <SwiperSlide><img className="swiper-image" src="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg" alt="Image 03" /></SwiperSlide>
    </Swiper>
  );
};