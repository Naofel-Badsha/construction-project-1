import {  Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";


const DashboardLayout = () => {
 
  return (
    <div className='relative min-h-screen md:flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Outlet --> Dynamic content */}
      <div className='flex-1 md:ml-64'>
        <div className='p-5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;


{/* <ul className="menu rounded-box  mt-3 p-2  gap-5">
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
</ul> */}
