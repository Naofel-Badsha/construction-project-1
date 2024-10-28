const TestimonialsCard = ({ testimonial }) => {
  const { image, name, headingText, description } = testimonial;
  return (
    <div className="container m-auto py-10">
      <div className="hero bg-slate-800">
        <div className="hero-content gap-10 flex-col lg:flex-row">
          <div className="flex-1">
            <img src={testimonial.image} className="w-full h-[700px] object-cover rounded-lg" />
            
            <h1 className="text-3xl text-white font-bold py-5 text-center">{testimonial.name}</h1>
          </div>

          <div className="flex-1">
            <h1 className="text-5xl text-white font-bold">{testimonial.headingText}</h1>
            <p className="py-6 text-xl text-white">{testimonial.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
