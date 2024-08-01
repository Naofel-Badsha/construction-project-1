const Different = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto py-10">
        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-6 py-10">
          <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">
            Our Excellent <br></br> Services
          </h1>
          <div>
            <p className="text-lg md:text-xl lg:text-xl text-gray-400">
              Check out our best services you can possibly orders in building
            </p>
            <p className="text-lg md:text-xl lg:text-xl text-gray-400">
              Your company and do not w.forget to ask via our email or our
            </p>
            <p className="text-lg md:text-xl lg:text-xl text-gray-400">
              Customer services if you are interested in using our services
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4    ">
          {/*----------Card---------1-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[60px] h-[60px] bg-sky-900 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-toolbox text-2xl mt-[5px] "></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black">Experienced</h2>
              <p className="text-xl py-1 text-gray-400">
                Our experience of 25 years of
              </p>
              <p className="text-xl py-1 text-gray-400">building and making</p>
              <p className="text-xl py-1 text-gray-400">
                achievements in the world
              </p>
              <p className="text-xl py-1 text-gray-400">of devlopment</p>
            </div>
          </div>
          {/*----------Card---------2-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[60px] h-[60px] bg-sky-900 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-tag text-2xl mt-[5px] "></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black">Competitive price</h2>
              <p className="text-xl py-1 text-gray-400">
                The prices we offer you are
              </p>
              <p className="text-xl py-1 text-gray-400">
                very competitive widthout
              </p>
              <p className="text-xl py-1 text-gray-400">
                reducing the qualuty of the
              </p>
              <p className="text-xl py-1 text-gray-400">company work in the</p>
              <p className="text-xl py-1 text-gray-400">slightest</p>
            </div>
          </div>
          {/*----------Card---------3-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[60px] h-[60px] bg-sky-900 text-center rounded-full border-8 border-slate-300">
              <i className="fa-solid fa-clock-rotate-left text-2xl mt-[5px] "></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black">On Time</h2>
              <p className="text-xl py-1 text-gray-400">
                We prioritize the qualuty of
              </p>
              <p className="text-xl py-1 text-gray-400">
                our work and finish it on time
              </p>
            </div>
          </div>
          {/*----------Card---------4-------*/}
          <div className="border-2 border-sky-900 p-4 rounded-lg">
            <div className="w-[60px] h-[60px] bg-sky-900 text-center rounded-full border-8 border-slate-300">
              <i className="fa-brands fa-rebel text-2xl mt-[5px] "></i>
            </div>
            <div>
              <h2 className="text-3xl py-5 text-black">Best Materials</h2>
              <p className="text-xl py-1 text-gray-400">
                The material determines the
              </p>
              <p className="text-xl py-1 text-gray-400">
                building itself so we
              </p>
              <p className="text-xl py-1 text-gray-400">
                recommend that you use
              </p>
              <p className="text-xl py-1 text-gray-400">
                the best & quality materials
              </p>
              <p className="text-xl py-1 text-gray-400">in its class.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;
