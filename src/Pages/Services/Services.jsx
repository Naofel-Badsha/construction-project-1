import { useState } from "react";
import SectionBanner from "../../Components/SectionBanner/SectionBanner";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  },[])

  return (
    <div className="bg-white">
      <SectionBanner></SectionBanner>
      <div className="flex items-center justify-center py-10 container m-auto">
        <div className="flex items-center justify-center">
          <p className="px-4 text-xl md:text-2xl lg:text-2xl text-black">
            Construction companies offer a wide range of services, depending on
            their specialization and the scale of projects they handle. Here's
            an  overview of some common services provided by construction companies
          </p>
        </div>
      </div>

      <div className="container m-auto py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/*------Services------1------*/}
          {/* <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-house  text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              General Contracting
            </h2>
            <li className="text-xl text-black">Project Management</li>
            <li className="text-xl text-black">
              Site Preparation & Excavation
            </li>
            <li className="text-xl text-black">Foundation Work</li>
          </div> */}

          {
            services.map(service => <ServicesCard key={service.id}
            service={service}></ServicesCard>)
          }

        </div>
      </div>
    </div>
  );
};

export default Services;
