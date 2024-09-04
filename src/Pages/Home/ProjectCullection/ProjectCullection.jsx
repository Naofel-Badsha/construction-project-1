import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ProjectCullection = () => {
  return (
    <div className="py-10">
      <div className="container m-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-black py-10">
          Our collection <br></br> best project
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={true}
          grabCursor={true}
          delay={"100"}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {/*----------Slider----------1--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/7tCg0r7/p-1.jpg"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center  mt-20">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  Green Valley
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------2--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img
                  src="https://i.ibb.co/qBjJw60/p-2.jpg"
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  Office Tower
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------3--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/0CswxxL/p-3.jpg" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-boldtext-xl  mb-3 text-center ">
                  Seaside Resort
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------4--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/rQD4909/p-4.webp" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  City Park
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------5--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/3vXGhfh/josh6.webp" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  Mountain Villas
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------6--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/NFDQr0P/p-6.jpg" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  EcoCity Mall
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------7--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/BjwWmdM/p-7.jpg" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-boldtext-xl  mb-3 text-center ">
                  Riverfront Luxury
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------8--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/wKYtTV3/p-8.jpg" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  Office Complex
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
          {/*----------Slider----------9--------*/}
          <ul>
            <li className="relative">
              <SwiperSlide>
                <img src="https://i.ibb.co/Nt9bmqK/p-9.jpg" 
                className="w-full h-[300px] object-cover"/>
                <div className="absolute top-0 left-0 h-full w-full flex justify-center mt-28">
                  <h3 className=" text-black font-bold text-xl  mb-3 text-center ">
                  Cultural Cente
                  </h3>
                </div>
              </SwiperSlide>
            </li>
          </ul>
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCullection;
