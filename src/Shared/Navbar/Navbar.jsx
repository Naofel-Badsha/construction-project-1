import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const navLink = (
    <>
      <li>
        <NavLink className="text-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className="text-lg" to="/team">
              Find a Team
            </NavLink>
          </li>
          <li>
            <NavLink className="text-lg" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink className="text-lg" to="/contact">
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white sticky inset-0 z-50  w-full max-w-full rounded-none border  bg-opacity-30 py-2 px-4 text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-2 lg:py-2">
      <div className="container m-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i className="fa-solid fa-bars text-2xl"></i>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  text-white gap-6"
            >
              {navLink}
            </ul>
          </div>
          <a className="text-xl font-bold">
            Real <span className="text-sky-900">Estate</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <button
                onClick={handleLogOut}
                className="btn text-xl bg-sky-800 text-white border-0"
              >
                SingOut
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn text-xl border-0">Login</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
