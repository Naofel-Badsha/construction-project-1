const DashSearceAndPtofile = () => {
  return (
    <div>
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
      <div className="flex items-center justify-between p-5 gap-8 flex-col lg:flex-row">
        <div className="">
          <input
            type="text"
            placeholder="Searce Here...?"
            className="py-3 bg-white text-black text-lg border-none
             outline-none shadow-lg p-3 rounded-md w-[400px] "
          />
        </div>
        <div className="bg-white  py-3 px-4 shadow-lg rounded-md">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl text-sky-900">Hello, Samantha</h3>
            <div className="">
              <img
                src="https://i.ibb.co/BL3yvJf/d-pro-1.jpg"
                className="w-[50px] h-[50px] rounded-full border-4 hover:border-sky-800 duration-75 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSearceAndPtofile;
