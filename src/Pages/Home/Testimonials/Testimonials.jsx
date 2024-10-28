import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("/testimonils.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  console.log(testimonials);
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={true}
        pagination={true}
        delay={"100"}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <div>
            <SwiperSlide>
              <TestimonialsCard
                key={testimonial.id}
                testimonial={testimonial}
              ></TestimonialsCard>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
