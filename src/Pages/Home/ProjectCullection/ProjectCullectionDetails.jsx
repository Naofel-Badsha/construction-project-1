import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProjectCullectionDetails = () => {
  const [bestProjectDetail, setBestProjectDetail] = useState({});
  const bestProjectDetails = useLoaderData();
  const { id } = useParams();
  //---caking--for----id---And---type----
  const idInt = parseInt(id);

  useEffect(() => {
    const detailsProgect = bestProjectDetails.find(
      (bestProjectDetail) => bestProjectDetail.id == idInt
    );
    setBestProjectDetail(detailsProgect);
  }, [id, bestProjectDetail]);
  return (
    <div>
      {/*--------Section------banner--------*/}
      <div className="bg-sky-800 w-full h-[300px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white">
            Portfolio Details
          </h2>
        </div>
      </div>

      {/*----------Details----------*/}
      <div className="container m-auto py-10">
        <div className="flex items-start justify-between gap-10 flex-col lg:flex-row">
          {/*----------Image--------------*/}
          <div className="flex-1">
            <img
              src={bestProjectDetail.image}
              className="h-[600px] w-full object-cover rounded-lg"
            />
          </div>
          {/*----------Text--------------*/}
          <div className="flex-1 w-full px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-sky-800">
              Name:{" "}
              <small className="text-2xl md:text-3xl lg:text-4xl font-bold text-sky-800">
                {bestProjectDetail.projectName}
              </small>
            </h2>
            {/*----------1-----------*/}
            <p className="text-black  md:text-2xl lg:text-2xl font-medium py-1 mt-5">
              Location:{" "}
              <small className="text-slate-700 md:text-xl font-normal ml-2 text-justify">
                {bestProjectDetail.location}
              </small>
            </p>
            {/*----------2-----------*/}
            <h4 className="text-black md:text-2xl lg:text-2xl font-medium py-1">
              Porject Start Date:{" "}
              <small className="text-slate-700 md:text-xl font-normal ml-2 text-justify">
                {bestProjectDetail.startDate}
              </small>
            </h4>
            {/*----------3-----------*/}
            <h4 className="text-black md:text-2xl lg:text-2xl font-medium py-1">
              Porject End Date:{" "}
              <small className="text-slate-700 md:text-xl font-normal ml-2 text-justify">
                {bestProjectDetail.endDate}
              </small>
            </h4>
            {/*----------4-----------*/}
            <h4 className="text-black md:text-2xl lg:text-2xl font-medium py-1">
              Total Monts:{" "}
              <small className="text-slate-700 md:text-xl font-normal ml-2 text-justify">
                {bestProjectDetail.exitTotalMonths}
              </small>
            </h4>
            {/*----------4-----------*/}
            <p className="text-black md:text-2xl lg:text-2xl font-medium py-1">
              Project Discreption:{" "}
              <small className="text-slate-700 md:text-xl font-normal ml-2 text-justify">
                {bestProjectDetail.projectDetails}
              </small>
            </p>
          </div>
        </div>
        <div className=" flex items-center justify-center py-10">
          <Link to="/">
            <button className="btn text-xl text-white bg-sky-700 border-0">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCullectionDetails;
