//import DashClientReview from "../../../Components/DashClientReview/DashClientReview";


const Dashboard = () => {
  return (
    <div>
        {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl text-sky-800">Dashboard</h1>
        <h4 className="text-xl text-slate-500 py-1">
          Hi, Samantha. Wellcome back to Admin!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*--------Calent-------Card-----Section------Start-------*/}
      <div className="flex items-center flex-col lg:flex-row gap-6  py-10">
        {/*---------Crad-------1-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full">
          <div className="card-body">
            <div className="flex items-center gap-10">
            <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
              <i className="fa-solid fa-hands-holding-circle  text-4xl w-[80px] h-[80px] text-center mt-5 "></i>
            </div>
            <div>
              <h1 className="text-5xl text-black">100 +</h1>
              <h2 className="text-2xl py-2 text-black">Compleate Project</h2>
            </div>
            </div>
          </div>
        </div>
        {/*---------Crad-------2-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full">
          <div className="card-body">
            <div className="flex items-center gap-10">
            <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
              <i className="fa-solid fa-hands-holding-circle  text-4xl w-[80px] h-[80px] text-center mt-5 "></i>
            </div>
            <div>
              <h1 className="text-5xl text-black">99 %</h1>
              <h2 className="text-2xl py-2 text-black">Happy Clients</h2>
            </div>
            </div>
          </div>
        </div>
        {/*---------Crad-------3-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full">
          <div className="card-body">
            <div className="flex items-center gap-10">
            <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
              <i className="fa-solid fa-hands-holding-circle  text-4xl w-[80px] h-[80px] text-center mt-5 "></i>
            </div>
            <div>
              <h1 className="text-5xl text-black">10 +</h1>
              <h2 className="text-2xl py-2 text-black">Project Pending</h2>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/*--------Calent-------Card-----Section------End-------*/}


      {/*--------Chart--------1-----Section------Start-------*/}

      {/*--------Chart--------1-----Section------End-------*/}



      {/*--------Chart--------Review-----Section------Start-------*/}
      {/* <DashClientReview></DashClientReview> */}
      {/*--------Chart--------Review-----Section------End-------*/}
    
    
    </div>
  );
};

export default Dashboard;
