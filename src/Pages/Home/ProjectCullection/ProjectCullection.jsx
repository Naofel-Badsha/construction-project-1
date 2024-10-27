import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import ProjectCullectionCard from "./ProjectCullectionCard";

const ProjectCullection = () => {
  const [bestProjects, setBestProjects] = useState([]);
  useEffect(() => {
    fetch("/collectionBestProjects.json")
      .then((res) => res.json())
      .then((data) => setBestProjects(data));
  }, []);

  return (
    <div className="py-10">
      <div className="container m-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold py-10">
          Our collection <br></br> best project
        </h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={true}
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
          {bestProjects.map((bestProject) => (
            <ul>
              <li className="relative">
                <SwiperSlide>
                  <ProjectCullectionCard
                    key={bestProject}
                    bestProject={bestProject}
                  ></ProjectCullectionCard>
                </SwiperSlide>
              </li>
            </ul>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectCullection;
