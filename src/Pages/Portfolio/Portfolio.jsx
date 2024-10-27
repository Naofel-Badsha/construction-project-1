import { useEffect, useState } from "react"
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
    const  [portfolios, setPortfolios] = useState([]);
    useEffect(() =>{
        fetch('/portfolios.json')
        .then(res => res.json())
        .then(data => setPortfolios(data))
    },[])
  return (
    <div className="bg-white">
      {/*--------Section------banner--------*/}
      <div className="bg-sky-800 w-full h-[300px]">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mt-24">
            Our Portfolio
          </h2>
        </div>
      </div>
      {/*--------Section------banner--------*/}

      <div className="container m-auto py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolios.map(portfolio => <PortfolioCard 
            key={portfolio.id}
            portfolio={portfolio}
            ></PortfolioCard>)}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
