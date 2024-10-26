import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaUser, FaUsersCog } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { GoSponsorTiers } from "react-icons/go";
import { GrLogout } from "react-icons/gr";
import { IoMdListBox } from "react-icons/io";
import {
  MdInventory,
  MdOutlineDashboardCustomize,
  MdOutlinePreview,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  //   const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      {/*-----Small-----Screen-----Navbar-----*/}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/*-------Sidebar-------*/}
      <div
      // bg-gray-100
        className={`z-20 md:fixed flex flex-col justify-between overflow-x-hidden bg-slate-950 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src="https://i.ibb.co/4ZXzmq5/logo.png"
                  alt="logo"
                  width="100"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/*----------Dashboard----------*/}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdOutlineDashboardCustomize className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Dashboard</span>
              </NavLink>

              {/*----------Technician List----------*/}
              <NavLink
                to="/dashboard/technicianList"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <IoMdListBox className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">
                  Technician List
                </span>
              </NavLink>
              {/*----------Inventory Mnagement----------*/}
              <NavLink
                to="/dashboard/inventoryMnagement"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdInventory className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Inventory Mng.</span>
              </NavLink>
              {/*----------Loged User----------*/}
              <NavLink
                to="/dashboard/logedUser"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUser className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Loged User</span>
              </NavLink>
              {/*----------Mannage User----------*/}
              <NavLink
                to="/dashboard/mannageUser"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FaUsersCog className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Mannage User</span>
              </NavLink>
              {/*----------Client Review----------*/}
              <NavLink
                to="/dashboard/clientReview"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdOutlinePreview className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Client Review</span>
              </NavLink>
              {/*----------Specal Client----------*/}
              <NavLink
                to="/dashboard/specalClient"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GoSponsorTiers className="w-7 h-7" />
                <span className="mx-4 text-xl font-medium">Specal Client</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            // onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
