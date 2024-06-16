import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="https://i.ibb.co/y4Gm9TQ/Real.jpg" alt="" style={{width: '100%', height: '100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/k5v9kMg/pexels-davidmcbee-1546168.jpg" alt="" style={{width: '100%', height: '100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/wyf70W4/real-estate.webp" alt="" style={{width: '100%', height: '100vh'}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/w6MQ89G/istockphoto-1483319549-170667a.webp" alt="" style={{width: '100%', height: '100vh'}}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
