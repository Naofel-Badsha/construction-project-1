const ExcellentServices = () => {
  return (
    <div className="bg-[#f6eded]">
      <div className="container m-auto">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-6 py-10 px-6">
          <h1 className="text-2xl md:text-4xl lg:text-4xl text-black font-bold flex-1">
            Our Excellent <br></br> Services
          </h1>

          <div className="flex-1">
            <p className="md:text-xl lg:text-xl text-gray-700">
              Check out our best services you can possibly orders in building,
              Your company and do not w.forget to ask via our email or our,
              Customer services if you are interested in using our services
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-12">
          {/*----------Card--------1--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/q7sHz5Q/c-b-1.webp"
              className="h-[350px] w-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black font-bold px-2 py-3">Industrial</h2>
              <p className="text-xl text-gray-700 px-2 py-1">
                Industrial devlopment is our main inline of business. We do Factory Constructio, warehouse and other.
              </p>
            </div>
          </div>
          {/*----------Card--------2--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/yXfGp9V/c-b-2.webp"
              className="h-[350px] w-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black font-bold px-2 py-3">Commercial</h2>
              <p className="text-xl text-gray-700 px-2 py-1">
                Our experience building in the Commercial filed includes showrooms, Supermalls and devlopment includes.
              </p>
            </div>
          </div>
          {/*----------Card--------3--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/wzPzhc5/c-b-3.jpg"
              className="h-[350px] w-full object-cover rounded-tl-lg rounded-tr-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black font-bold px-2 py-3">Resedential</h2>
              <p className="text-xl text-gray-700 px-2 py-1">
                Resedential devlopment is the beginning that has shaped us to this day. Our devlopment includes. House & Apartments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExcellentServices;
