const Different = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-10">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-6 py-10 px-6">
          <h1 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold flex-1">
            What Make Us <br></br> Different?
          </h1>
          <div className="flex-1">
            <p className="text-lg md:text-xl lg:text-xl text-gray-700">
              Check out our best services you can possibly orders in building,
              Your company and do not w.forget to ask via our email or our,
              Customer services if you are interested in using our services.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-6">
          {/*----------Card---------1-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[80px] h-[80px] m-auto flex items-center justify-center bg-sky-800 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-toolbox text-4xl text-white"></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black font-bold">Experienced</h2>
              <p className="text-xl py-1 text-gray-700">
                Our experience of 25 years of building and making achievements
                in the world of devlopment.
              </p>
            </div>
          </div>
          {/*----------Card---------2-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[80px] h-[80px] m-auto flex items-center justify-center bg-sky-800 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-tag text-4xl text-white"></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black font-bold">Competitive price</h2>
              <p className="text-xl py-1 text-gray-700">
                The prices we offer you are very competitive widthout reducing
                the qualuty of the company work in the slightest.
              </p>
            </div>
          </div>
          {/*----------Card---------3-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[80px] h-[80px] m-auto flex items-center justify-center bg-sky-800 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-clock-rotate-left text-4xl text-white"></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black font-bold">On Time</h2>
              <p className="text-xl py-1 text-gray-700">
                We prioritize the qualuty of our work and finish it on time.
              </p>
            </div>
          </div>
          {/*----------Card---------4-------*/}
          <div className="border-2 border-sky-800 p-4 rounded-lg">
            <div className="w-[80px] h-[80px] m-auto flex items-center justify-center bg-sky-800 text-center rounded-full border-8 border-slate-300">
              <i className="fa-brands fa-rebel text-4xl text-white"></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black font-bold">Best Materials</h2>
              <p className="text-xl py-1 text-gray-700">
                The material determines the building itself so we recommend that
                you use the best & quality materials in its class.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
