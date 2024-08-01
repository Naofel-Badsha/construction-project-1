

const PortfolioCard = ({portfolio}) => {
    const  {portfolio_name, image} = portfolio;   
    return (
        <div className="border-4 border-sky-900 rounded-[17px]">
        <div className="card bg-white shadow-xl">
          <figure>
            <img
              src={image}
              className="h-[350px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-sky-800">{portfolio_name}</h2>
          </div>
        </div>
      </div>
    );
};

export default PortfolioCard;