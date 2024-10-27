const NewsAndUpdate = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-10">
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold py-10">
          News & Update
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {/*--------Card-------1--------*/}
          <div>
            <img
              src="https://i.ibb.co.com/F7dWFjL/news-1.jpg"
              className="h-[350px] w-full"
            />
            <h1 className="text-2xl py-4 text-black font-bold">
              {" "}
              Elements of Content in Epoxy Paint
            </h1>
            <p className="text-xl text-slate-700">Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what dose that have to do with the costruction of existing buildings? Epoxy itself is included in the type of resin...</p>
          </div>
          {/*--------Card-------2--------*/}
          <div>
            <img
              src="https://i.ibb.co.com/x5JYvGz/news-2.jpg"
              className="h-[350px] w-full"
            />
            <h1 className="text-2xl py-4 text-black font-bold">5 Right Steps in Warehouse Planning and Construction.</h1>
            <p className="text-xl text-slate-700">Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully. When the planing is done properly, the construction...</p>
          </div>
          {/*--------Card-------3--------*/}
          <div>
            <img
              src="https://i.ibb.co/ggC1fhp/update-1.jpg"
              className="h-[350px] w-full"
            />
            <h1 className="text-2xl py-4 text-black font-bold">The Right Solution to Build a Sturdy Type 45 House</h1>
           <p className="text-xl text-slate-700">Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and taks shelter from the bad weather...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;
