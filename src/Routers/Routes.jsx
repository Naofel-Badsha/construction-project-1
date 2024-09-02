import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/AboutUs/About";
import Services from "../Pages/Services/Services";
import Teams from "../Pages/FindATeam/Teams";
import Articles from "../Pages/Articles/Articles";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/ContactUs/Contact";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/DashBoardPages/Dashboard/Dashboard";

import LogedUser from "../Pages/DashBoardPages/LogedUser/LogedUser";
import ManageUser from "../Pages/DashBoardPages/ManageUser/ManageUser";
import SpecalClient from "../Pages/DashBoardPages/SpecalClient/SpecalClient";
import TechnicianList from "../Pages/DashBoardPages/TechnicianList/TechnicianList";
import InventoryMnagement from "../Pages/DashBoardPages/InventoryMnagement/InventoryMnagement";
import ClientReview from "../Pages/DashBoardPages/ClientReview/ClientReview";
import PortfolioDetails from "../Pages/Portfolio/PortfolioDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/team",
        element: (
          <PrivateRoute>
            <Teams></Teams>
          </PrivateRoute>
        ),
      },
      {
        path: "/portfolio",
        element: <PrivateRoute><Portfolio></Portfolio></PrivateRoute>,
      },
      {
        path: "/portfolioDetails/:id",
        element: <PrivateRoute><PortfolioDetails></PortfolioDetails></PrivateRoute>,
        loader: () => fetch('/portfolios.json') 
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registation",
        element: <Registation></Registation>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/technicianList",
            element: <TechnicianList></TechnicianList>,
          },
          {
            path: "/dashboard/inventoryMnagement",
            element: <InventoryMnagement></InventoryMnagement>,
          },
          {
            path: "/dashboard/logedUser",
            element: <LogedUser></LogedUser>,
          },
          {
            path: "/dashboard/mannageUser",
            element: <ManageUser></ManageUser>,
          },
          {
            path: "/dashboard/clientReview",
            element: <ClientReview></ClientReview>,
          },
          {
            path: "/dashboard/specalClient",
            element: <SpecalClient></SpecalClient>,
          },
        ],
      },
    ],
  },
]);

export default routes;
