import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="">
      {/* relative z-50 */}
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
