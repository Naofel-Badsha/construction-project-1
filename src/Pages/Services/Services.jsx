import SectionBanner from "../../Components/SectionBanner/SectionBanner";

const Services = () => {
  return (
    <div className="bg-white">
      <SectionBanner></SectionBanner>
      <div className="flex items-center justify-center py-10">
        <div>
          <p className="text-2xl text-black">
            Construction companies offer a wide range of services, depending on
          </p>
          <p className="text-2xl text-black">
            their specialization and the scale of projects they handle. Here's
            an
          </p>
          <p className="text-2xl text-black">
            overview of some common services provided by construction companies
          </p>
        </div>
      </div>

      <div className="container m-auto py-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/*------Services------1------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
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
          </div>
          {/*------Services------2------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-regular fa-object-group text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Design & Build
            </h2>
            <li className="text-xl text-black">Architectural Design</li>
            <li className="text-xl text-black">Engineering Services</li>
            <li className="text-xl text-black">Interior Design</li>
          </div>
          {/*------Services------3------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-shield-halved text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Specialized Construction
            </h2>
            <li className="text-xl text-black">
              Commercial & Residential Construction
            </li>
            <li className="text-xl text-black">Industrial Facilities</li>
            <li className="text-xl text-black">Infrastructure Projects</li>
          </div>
          {/*------Services------4------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-lightbulb text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Renovation & Remodeling
            </h2>
            <li className="text-xl text-black">Home & Apartment Renovations</li>
            <li className="text-xl text-black">Commercial Space Updates</li>
            <li className="text-xl text-black">Historical Restorations</li>
          </div>
          {/*------Services------5------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-spa text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Specialty Services
            </h2>
            <li className="text-xl text-black">
              Green Building & Sustainability
            </li>
            <li className="text-xl text-black">Custom Builds</li>
            <li className="text-xl text-black">
              Pre & Post-construction Services
            </li>
          </div>
          {/*------Services------6------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-star text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Subcontracting Services
            </h2>
            <li className="text-xl text-black">Electrical & Plumbing Work</li>
            <li className="text-xl text-black">
              HVAC Installation & Maintenance
            </li>
            <li className="text-xl text-black">Painting & Finishing</li>
          </div>
          {/*------Services------7------*/}
          <div className="border border-sky-900 p-6 rounded-lg">
            <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
              <i className="fa-solid fa-paint-roller text-white text-3xl"></i>
            </div>
            <h2 className="text-center text-2xl font-bold text-sky-800 py-3">
              Consulting & Advisory
            </h2>
            <li className="text-xl text-black">Construction Consulting</li>
            <li className="text-xl text-black">Cost Estimation & Budgeting</li>
            <li className="text-xl text-black">Permitting & Compliance</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
