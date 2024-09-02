import { Link } from "react-router-dom";

const PortfolioCard = ({ portfolio }) => {
  const {id, projectName, image} = portfolio;
  return (
    <div className="border-4 border-sky-900 rounded-[17px]">
      <div className="card bg-white shadow-xl">
        <figure>
          <img src={image} className="h-[350px] w-full" />
        </figure>
        <div className="flex items-center justify-between p-6">
          <div className="">
            <h2 className="card-title text-2xl text-sky-800">{projectName}</h2>
          </div>
          <div>
            <Link to={`/portfolioDetails/${id}`}>
              <button className="btn bg-sky-800 text-white text-xl border-0">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
