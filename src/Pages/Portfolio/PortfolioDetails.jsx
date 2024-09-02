import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PortfolioDetails = () => {
  const [portDetail, setPortDetail] = useState({});

  const portDetails = useLoaderData();
  console.log("I am All Loading Data", portDetails);
  const { id } = useParams();
  console.log("I am Single Id", id);
  //---caking--for----id---And---type----
  const idInt = parseInt(id);

  useEffect(() => {
    const detailsPortfolio = portDetails.find(
      (portDetail) => portDetail.id == idInt
    );
    setPortDetail(detailsPortfolio);
  }, [id, portDetail]);

  return (
    <div className="container m-auto py-10">
      <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
        {/*----------Image--------------*/}
        <div className="flex-1">
          <img src={portDetail.image} 
          className="h-[600px] w-full object-cover rounded-lg" />
        </div>
        {/*----------Text--------------*/}
        <div className="flex-1 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-sky-800">{portDetail.projectName}</h2>
        <p className="text-sky-800 text-2xl font-bold py-1 mt-5">Location: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.location}</small></p>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Project Type: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.projectType}</small></h4>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Client: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.client}</small></h4>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Architect: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.architect}</small></h4>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Completion Date: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.completionDate}</small></h4>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Materials: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.materials}</small></h4>
        
        <p className="text-sky-800 text-2xl font-bold py-1 mt-5">Description: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.description}</small></p>
        <p className="text-sky-800 text-2xl font-bold py-1">Sustainability: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.sustainability}</small></p>
        <p className="text-sky-800 text-2xl font-bold py-1">Technology: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.technology}</small></p>
        <p className="text-sky-800 text-2xl font-bold py-1">Challenges: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.challenges}</small></p>
        <h4 className="text-sky-800 text-2xl font-bold py-1">Budget: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.budget}</small></h4>
        <p className="text-sky-800 text-2xl font-bold py-1">Contractors Name & Role: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.contractors_1_name} & {portDetail.contractors_1_role}</small></p>
        <p className="text-sky-800 text-2xl font-bold py-1">Contractors Name & Role: <small className="text-black text-xl font-medium ml-2 text-justify">{portDetail.contractors_2_name} & {portDetail.contractors_2_role}</small></p>
        
        
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
