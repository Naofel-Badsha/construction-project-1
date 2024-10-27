import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-20">
        <div className="flex  gap-10 flex-col  lg:flex-row-reverse ">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1 w-full ">
            <div className="">
              <img
                src="https://i.ibb.co/R7Lr9sH/story-1.jpg"
                className="h-[350px] w-full object-cover"
              />
            </div>
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text--------contact-----1-------*/}
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold">
              Our Story<br></br> Who we are
            </h1>
            <div className="py-5">
              <p className="text-xl text-gray-700 py-1 text-justify">
                Established in 1992, PT. Wahana Cipta operates as a General
                Contracting company with a footprint that we have planted
                throughtout Indonesia. Initially, we focused on construction in
                the field of residential housing devlopment in Jakarta. As the
                companny grows, b;noe we are present as a reliable...
              </p>
            </div>
            <Link to="/portfolio">
              <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
