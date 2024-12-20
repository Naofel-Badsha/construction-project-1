//import HomeBannerImage from "../../../assets/h-banner-1.jpg";
import { useState } from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";

const HomeBanner = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-slate-800">
      {/* min-h-screen */}
      <div className="py-10 container m-auto">
        <div className="flex justify-between gap-12 flex-col lg:flex-row-reverse">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1">
            <img
              src="https://i.ibb.co/PWsPPc4/pngtree-removebg-preview.png"
              className="w-full"
            />

            {/*-----Image--------contact------Start------*/}
            <div className="bg-sky-900 flex gap-16 p-6 flex-col md:flex-row lg:flex-row">
              {/*-----Image-------Left-----contact-------*/}
              <div>
                {/*---------contact----1-----*/}
                <div className="flex items-center gap-12 relative">
                  <h4 className="text-xl text-white">General</h4>
                  <h4 className="text-xl text-white">
                    <small className="text-4xl font-bold mr-5 text-white">
                      25
                    </small>
                    Years
                  </h4>

                  {/*----------Star------Icon----*/}
                  <div className="absolute left-[223px] -mt-6">
                    <i className="fa fa-star text-2xl text-white"></i>
                  </div>
                </div>
                {/*---------contact----2-----*/}
                <div className="flex items-center gap-12 mt-2">
                  <h3 className="text-2xl text-white">Project</h3>
                  <h3 className="text-2xl text-white">Operated</h3>
                </div>
              </div>

              {/*-----Image-------Right-----contact-------*/}
              <div>
                <p className="text-xl text-white">
                  As a trusted general project has been. operating for 25 years,
                  our commitment is, always to prioritize our client
                  satisfaction.
                </p>
              </div>
            </div>
            {/*-----Image--------contact------End------*/}
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div className="px-6 text-white flex-1">
            {/*-----------Text--------contact-----1-------*/}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-6xl font-normal">
                Discover Your Dream Home Width Our Expert
              </h1>
              <div className="py-8">
                <p className="md:text-xl lg:text-xl">
                  More than 100 building and housing projects that we have
                  built.
                </p>
                <p className="py-1 md:text-xl lg:text-xl">
                  The building owner chose us over other contractors in Jakarta,
                </p>
                <p className="py-1 md:text-xl lg:text-xl">
                  becauses our work is deffernt....!
                </p>
              </div>
              <Link to="/about">
                <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
                  About More
                </button>
              </Link>
            </div>

            {/*-----------Text--------contact-----2-------*/}
            <div className="py-12">
              <div className="flex items-center flex-wrap gap-12">
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                ></ScrollTrigger>

                {/*------Counter------1----------*/}
                <div>
                  <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={300}
                        duration={4}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </h1>
                  <p className="text-xl mt-4">Happy</p>
                  <p className="text-xl">Client</p>
                </div>
                {/*------Counter------2----------*/}
                <div>
                  <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={900}
                        duration={4}
                        delay={0}
                      ></CountUp>
                    )}
                    +
                  </h1>
                  <p className="text-xl mt-4">Amazing</p>
                  <p className="text-xl">projects</p>
                </div>
                {/*------Counter------3----------*/}
                <div>
                  <h1 className="text-center font-bold text-white  text-5xl md:text-5xl lg:text-6xl">
                    {counterOn && (
                      <CountUp
                        start={0}
                        end={20}
                        duration={4}
                        delay={0}
                      ></CountUp>
                    )}
                    +
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
