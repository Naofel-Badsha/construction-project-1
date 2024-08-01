import HomeBannerImage from "../../../assets/h-banner-1.jpg";

const HomeBanner = () => {
  return (
    <div className="bg-slate-800">
        {/* min-h-screen */}
      <div className="py-10 container m-auto">
        <div className="flex justify-between gap-12 flex-col lg:flex-row-reverse">
            {/*-----------Image--------Start---------*/}
            <div>
              <img src={HomeBannerImage} className="w-full" />

              {/*-----Image--------contact------Start------*/}
              <div className="bg-sky-900 flex gap-16 p-6 flex-col md:flex-row lg:flex-row">
                {/*-----Image-------Left-----contact-------*/}
                <div>
                  {/*---------contact----1-----*/}
                  <div className="flex items-center gap-12 relative">
                    <h4 className="text-xl">General</h4>
                    <h4 className="text-xl">
                      <small className="text-4xl font-bold mr-5">25</small>Years
                    </h4>

                    {/*----------Star------Icon----*/}
                    <div className="absolute left-[223px] -mt-6">
                      <i className="fa fa-star text-2xl"></i>
                    </div>
                  </div>
                  {/*---------contact----2-----*/}
                  <div className="flex items-center gap-12 mt-2">
                    <h3 className="text-2xl">Project</h3>
                    <h3 className="text-2xl">Operated</h3>
                  </div>
                </div>

                {/*-----Image-------Right-----contact-------*/}
                <div>
                  <p className="text-xl">
                    As a trusted general project has been.
                  </p>
                  <p className="text-xl">
                    operating for 25 years, our commitment is,
                  </p>
                  <p className="text-xl">
                    always to prioritize our client satisfaction.
                  </p>
                </div>
              </div>
              {/*-----Image--------contact------End------*/}
            </div>
            {/*-----------Image--------End---------*/}

            {/*-----------Text----------Start---------*/}
            <div>
              {/*-----------Text--------contact-----1-------*/}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-6xl font-normal">
                  Discover Your <br></br> Dream Home Width <br></br> Our Expert
                </h1>
                <div className="py-8">
                  <p className="text-sm md:text-xl lg:text-xl">
                    More than 100 building and housing projects that we have
                    built.
                  </p>
                  <p className="py-1 text-sm md:text-xl lg:text-xl">
                    The building owner chose us over other contractors in
                    Jakarta,
                  </p>
                  <p className="py-1 text-sm md:text-xl lg:text-xl">
                    becauses our work is deffernt....!
                  </p>
                </div>
                <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-red-400 rounded-lg">
                  Discover More
                </button>
              </div>

              {/*-----------Text--------contact-----2-------*/}
              <div className="py-12">
                <div className="flex items-center flex-wrap gap-12">
                  {/*------Counter------1----------*/}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      300
                      <small className="text-5xl font-bold text-sky-900">
                        +
                      </small>
                    </h1>
                    <p className="text-xl mt-4">Happy</p>
                    <p className="text-xl">Client</p>
                  </div>
                  {/*------Counter------2----------*/}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      900
                      <small className="text-5xl font-bold text-sky-900">
                        +
                      </small>
                    </h1>
                    <p className="text-xl mt-4">Amazing</p>
                    <p className="text-xl">projects</p>
                  </div>
                  {/*------Counter------3----------*/}
                  <div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                      20
                      <small className="text-5xl font-bold text-sky-900">
                        +
                      </small>
                    </h1>
                    <p className="text-xl mt-4">Awards</p>
                    <p className="text-xl">Winning</p>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------Text----------End---------*/}
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
