//import MeetProfile from "../../../Components/MeetProfile/MeetProfile";

import { Link } from "react-router-dom";

const MeetAndTalk = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-20">
        <div className="flex gap-10 flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <div>
              {/*-----------Text--------contact-----1-------*/}
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold">
                  Meet snd talk width <br></br> our best architecture
                </h1>
                <div className="py-5">
                  <p className="text-xl text-gray-700 py-1 text-justify">
                    All our teams are profazssional and competent in their
                    fildes and will help you realize your dream building width
                    the excellent result.
                  </p>
                </div>
              </div>
              {/*-------Button------*/}
              <div className="flex flex-wrap items-start gap-10">
                <Link to="/team">
                  <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
                    See all Team
                  </button>
                </Link>
                <Link to="/dashboard">
                <button className="text-xl text-black  px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg border-2">
                  How it works <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
                </Link>
              </div>
            </div>
          </div>

          {/*-----------Image--------Start---------*/}
          <div className="flex-1 relative w-full ">
            <div className="">
              <img
                src="https://i.ibb.co/FsrMxS9/mett.jpg"
                className="h-[350px] w-full object-cover"
              />
            </div>
            <div className="absolute  -right-[70px] top-0">
              {/* <MeetProfile></MeetProfile> */}
            </div>
          </div>
          {/*-----------Image--------End---------*/}
        </div>
      </div>
    </div>
  );
};

export default MeetAndTalk;
