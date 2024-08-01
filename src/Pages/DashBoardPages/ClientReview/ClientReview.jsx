const ClientReview = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl text-sky-800">Client Review</h1>
        <h4 className="text-xl text-slate-500 py-1">
          Hi, Samantha. Wellcome back to Client Review!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-----------Cliebt-------Review-------Start----*/}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-10">
        {/*------------Card---------1----------*/}
        <div className="border-2 border-sky-800  flex w-full flex-col rounded-xl bg-transparent 
         text-gray-700 ">
          <div className=" p-4 flex items-center justify-between gap-4  text-gray-700  rounded-xl ">
            <div className="h-[58px] w-[58px] rounded-full">
              <img
                src="https://i.ibb.co/Drs30hD/rev-1.jpg"
                className="h-[58px] w-[58px] border-[3px] border-sky-500 inline-block rounded-full object-cover object-center"
              />
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
            </div>
          </div>
          <div className="">
            <h5 className=" text-xl font-bold text-[#008080] px-4">
              Akthar Ahmed
            </h5>
            <p className=" px-2 mb-4 text-center ">
              I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun!
            </p>
          </div>
        </div>
        {/*------------Card---------2----------*/}
        <div className="border-2 border-sky-800  flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className=" p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <div className="h-[58px] w-[58px] rounded-full">
              <img
                src="https://i.ibb.co/JzLhcqK/rev-2.jpg"
                className="h-[58px] w-[58px] border-[3px] border-sky-500  inline-block rounded-full object-cover object-center"
              />
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
            </div>
          </div>
          <div className="">
            <h5 className="block text-xl antialiased font-bold text-[#008080] px-4">
              Tania Islam
            </h5>
            <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
              I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun!
            </p>
          </div>
        </div>
        {/*------------Card---------3----------*/}
        <div className="border-2 border-sky-800 flex w-full flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className=" p-4 flex items-center justify-between gap-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <div className="h-[58px] w-[58px] rounded-full">
              <img
                src="https://i.ibb.co/59thnDP/rev-3.jpg"
                className="h-[58px] w-[58px] border-[3px] border-sky-500 inline-block rounded-full object-cover object-center"
              />
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-solid fa-star text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
              <i className="fa-regular fa-star-half-stroke text-xl text-[#ff6347]"></i>
            </div>
          </div>
          <div className="">
            <h5 className="block text-xl antialiased font-bold text-[#008080] px-4">
              Abdul Hamid
            </h5>
            <p className="block px-2 mb-4 font-sans text-base text-center antialiased leading-relaxed text-inherit">
              I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
