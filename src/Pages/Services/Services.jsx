import { useState } from "react";
import SectionBanner from "../../Components/SectionBanner/SectionBanner";
import { useEffect } from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-white">
      {/*--------Section------banner--------*/}
      <div className="bg-sky-800 w-full h-[300px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white">
            Our Services
          </h2>
        </div>
      </div>

     {/*---------Details---------*/}
      <div className="flex items-center justify-center py-10 container m-auto">
        <div className="flex items-center justify-center">
          <p className="px-4 text-xl md:text-2xl lg:text-2xl text-black">
            Construction companies offer a wide range of services, depending on
            their specialization and the scale of projects they handle. Here's
            an overview of some common services provided by construction
            companies
          </p>
        </div>
      </div>

      <div className="container m-auto py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
