const NewsAndUpdate = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-10">
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-black py-10">
          News & Update
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
          {/*--------Card-------1--------*/}
          <div>
            <img src="https://i.ibb.co/LQDhp7w/update-1.jpg" 
            className="h-[350px] w-full"/>
          </div>
          {/*--------Card-------1--------*/}
          <div>
            <img src="https://i.ibb.co/ggC1fhp/update-1.jpg" 
            className="h-[350px] w-full"/>
          </div>
          {/*--------Card-------1--------*/}
          <div>
            <img src="https://i.ibb.co/GWyTJny/update-3.webp" 
            className="h-[350px] w-full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;
