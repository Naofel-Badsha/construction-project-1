import { NavLink, Outlet } from "react-router-dom";
import DashSearceAndPtofile from "../Components/DashSearceAndPtofile/DashSearceAndPtofile";
import { useState } from "react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white">
      <div className="container m-auto">
        <div onClick={() => setOpen(!open)} className="flex items-center gap-4">
          {
            open ?  <i className="fa-solid fa-xmark text-black text-2xl cursor-pointer"></i> 
            :
            <i className="fa-solid fa-bars text-black text-2xl cursor-pointer"></i>
          }
          <h1 className="text-3xl text-sky-900 py-4">Dashboard Layout</h1>
        </div>

        <div className="flex gap-10 h-screen">
          <div  className={`w-[20%] absolute h-full bg-slate-700 
            ${open ? "ml-2":"-ml-[500px]"}`}>
            <h3 className="text-xl text-center py-4 border-b-2 border-white">Hello Dashboard</h3>

            <ul className="menu rounded-box  mt-3 p-2  gap-5">
              <li className="text-xl">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/technicianList">Technician List</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/inventoryMnagement">Inventory Mnagement</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/logedUser">Loged User</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/mannageUser">Mannage User</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/clientReview">Client Review</NavLink>
              </li>
              <li className="text-xl">
                <NavLink to="/dashboard/specalClient">Specal Client</NavLink>
              </li>
            </ul>
          </div>
          <div className={`w-full bg-[#f5f1f1] h-full
            ${open ? "ml-0" : "w-full "}`}>
              {/* ml-44 */}
            {/*------------------*/}
            <div>
              <DashSearceAndPtofile></DashSearceAndPtofile>
            </div>
            {/*------------------*/}
            <div className={`p-5
              ${open ? "" : "w-full"}`}>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
