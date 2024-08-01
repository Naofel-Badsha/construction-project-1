//import MeetProfile from "../../../Components/MeetProfile/MeetProfile";

const MeetAndTalk = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-20">
        <div className="flex  gap-24 flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <div>
              {/*-----------Text--------contact-----1-------*/}
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">
                  Meet snd talk width <br></br> our best architecture
                </h1>
                <div className="py-5">
                  <p className="text-xl text-gray-400 py-1">
                    All our teams are profazssional and competent in
                  </p>
                  <p className="text-xl text-gray-400 py-1">
                    their fildes and will help you realize your dream
                  </p>
                  <p className="text-xl text-gray-400 py-1">
                    building width the excellent result.
                  </p>
                </div>
              </div>
              {/*-------Button------*/}
              <div className="flex flex-wrap items-start gap-10">
                <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
                  See all Team
                </button>
                <button className="text-xl text-black  px-7 py-3 hover:shadow-md hover:shadow-teal-400 rounded-lg">
                  How it works <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          {/*-----------Image--------Start---------*/}
          <div className="flex-1 relative w-full ">
            <div className="">
              <img
                src="https://i.ibb.co/FsrMxS9/mett.jpg"
                className="h-[300px] w-full"
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
