import { Link } from "react-router-dom";

const ProjectCullectionCard = ({ bestProject }) => {
  const { id, image, projectName } = bestProject;
  return (
    <div>
      <Link to={`collectionBestProjectsDetails/${id}`}>
        <div>
          <img
            src={image}
            className="w-full h-[350px] object-cover opacity-60 border-2 border-sky-800"
          />
          <div className="absolute top-0 left-0 h-full w-full flex justify-center">
            <h3 className="flex items-center justify-center text-[#ff004f] font-bold text-2xl text-center">
              {projectName}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCullectionCard;
