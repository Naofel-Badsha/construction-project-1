import { Link } from "react-router-dom";

const PortfolioCard = ({ portfolio }) => {
  const {id, projectName, image} = portfolio;
  return (
    <div className="border-2 border-sky-800 rounded-[17px] hover:-translate-y-2 duration-150">
      <div className="card bg-white shadow-xl">
        <figure>
          <img src={image} className="h-[350px] w-full" />
        </figure>
        <div className="flex items-center justify-between p-6">
          <div className="">
            <h2 className="card-title text-xl md:text-2xl lg:text-2xl text-sky-800">{projectName}</h2>
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
