//import DashClientReview from "../../../Components/DashClientReview/DashClientReview";

import ProjectAreaCharts from "../../../Components/Charts/ProjectAreaCharts/ProjectAreaCharts";

const Dashboard = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Dashboard</h1>
        <h4 className="text-xl text-slate-500 py-1">
          Hi, Samantha. Wellcome back to Admin!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*--------Calent-------Card-----Section------Start-------*/}
      <div className="flex items-center flex-col lg:flex-row gap-6  py-10">
        {/*---------Crad-------1-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full border-2 border-sky-800">
          <div className="card-body">
            <div className="flex items-center gap-10">
              <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
                <i className="fa-solid fa-hands-holding-circle  text-4xl w-[80px] h-[80px] text-center mt-5 text-black"></i>
              </div>
              <div>
                <h1 className="text-5xl text-black">100 +</h1>
                <h2 className="text-2xl py-2 text-black">Compleate Project</h2>
              </div>
            </div>
          </div>
        </div>
        {/*---------Crad-------2-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full border-2 border-sky-800">
          <div className="card-body">
            <div className="flex items-center gap-10">
              <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
                <i className="fa-solid fa-user-astronaut text-4xl w-[80px] h-[80px] text-center mt-5 text-black"></i>
              </div>
              <div>
                <h1 className="text-5xl text-black">99 %</h1>
                <h2 className="text-2xl py-2 text-black">Happy Clients</h2>
              </div>
            </div>
          </div>
        </div>
        {/*---------Crad-------3-------*/}
        <div className="rounded-lg bg-white shadow-xl w-full border-2 border-sky-800">
          <div className="card-body">
            <div className="flex items-center gap-10">
              <div className="w-[80px] h-[80px] rounded-full bg-sky-300 ">
                <i className="fa-solid fa-hourglass-half  text-4xl w-[80px] h-[80px] text-center mt-5 text-black"></i>
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

      {/*------------Charts-----------*/}
      <div className="">
        {/*------------1------------*/}
        <div>
          <h1 className="text-black text-xl font-bold mb-4">Compleate Projects</h1>
          <div className="border-2 border-sky-800 shadow-xl">
            <ProjectAreaCharts></ProjectAreaCharts>
          </div>
        </div>
        {/*------------2------------*/}
      </div>
    </div>
  );
};

export default Dashboard;
