import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../EstateCard/EstateCard";
import 'animate.css';

const Home = () => {
  const estate = useLoaderData();
  // console.log(estate);
  return (
    <div>
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
          <img
            src="https://i.ibb.co/y4Gm9TQ/Real.jpg"
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/k5v9kMg/pexels-davidmcbee-1546168.jpg"
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/wyf70W4/real-estate.webp"
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/w6MQ89G/istockphoto-1483319549-170667a.webp"
            alt=""
            style={{ width: "100%", height: "100vh" }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-20">
        <h1 className="text-3xl text-center animate__animated animate__backInUp">View Our Property</h1>
        {
            estate.map(aEstate => <EstateCard
                key={aEstate.id}
                estate={aEstate}
            ></EstateCard>)
        }
      </div>
    </div>
  );
};

export default Home;