const OurStory = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-20">
        <div className="flex  gap-24 flex-col  lg:flex-row-reverse ">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1 w-full ">
            <div className="">
              <img
                src="https://i.ibb.co/R7Lr9sH/story-1.jpg"
                className="h-[300px] w-full"
              />
            </div>
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text--------contact-----1-------*/}
          <div className="flex-1">
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">
              Our Story<br></br> Who we are
            </h1>
            <div className="py-5">
              <p className="text-xl text-gray-400 py-1">
                Established in 1992, PT. Wahana Cipta operates as a General
              </p>
              <p className="text-xl text-gray-400 py-1">
                Contracting company with a footprint that we have planted
              </p>
              <p className="text-xl text-gray-400 py-1">
                throughtout Indonesia. Initially, we focused on construction
                inB;
              </p>
              <p className="text-xl text-gray-400 py-1">
                the field of residential housing devlopment in Jakarta.
              </p>
              <p className="text-xl text-gray-400 py-1">
                As the companny grows, b;noe we are present as a reliable...
              </p>
            </div>

            <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
