const ServicesCard = ({ service }) => {
  const {
    name,
    description,
    category,
    duration,
    cost_estimate,
    phone,
    email
  } = service;
  return (
    <div>
      <div className="border border-sky-900 p-6 rounded-lg h-full">
        <div className="flex items-center justify-center bg-sky-800 w-[55px] h-[55px] m-auto rounded-full ">
          <i className="fa-solid fa-house  text-white text-3xl"></i>
        </div>
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-sky-800 py-3">
          {name}
        </h2>
        <div className="py-4">
        <p className="text-xl text-black py-1">Category: <small className="text-sky-800 ml-1">{category}</small></p>
        <p className="text-xl text-black py-1">Days: <small className="text-sky-800 ml-1">{duration}</small></p>
        <p className="text-xl text-black py-1">Money: <small className="text-sky-800 ml-1">{cost_estimate}</small></p>
        <p className="text-xl text-black py-1 text-justify">Description: <small className="text-sky-800 ml-1">{description}</small></p>
        <p className="text-xl text-black py-1">Phone: <small className="text-sky-800 ml-1">{phone}</small></p>
        <p className="text-xl text-black py-1">Email: <small className="text-sky-800 ml-1">{email}</small></p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
