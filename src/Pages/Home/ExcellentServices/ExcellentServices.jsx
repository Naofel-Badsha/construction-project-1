const ExcellentServices = () => {
  return (
    <div className="bg-[#f6eded]">
      <div className="container m-auto">
        <div className="flex items-center justify-between flex-col md:flex-row lg:flex-row gap-6 py-10 px-6">
          <h1 className="text-2xl md:text-4xl lg:text-4xl text-black">
            Our Excellent <br></br> Services
          </h1>
          <div>
            <p className=" md:text-xl lg:text-xl text-gray-400">
              Check out our best services you can possibly orders in building
            </p>
            <p className="md:text-xl lg:text-xl text-gray-400">
              Your company and do not w.forget to ask via our email or our
            </p>
            <p className=" md:text-xl lg:text-xl text-gray-400">
              Customer services if you are interested in using our services
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 py-12">
          {/*----------Card--------1--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/q7sHz5Q/c-b-1.webp"
              className="h-[300px] w-full rounded-t-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black px-2 py-3">Industrial</h2>
              <p className="text-xl text-gray-400 px-2 py-1">
                Industrial devlopment is our main
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                inline of business. We do Factory
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                Constructio, warehouse and other
              </p>
            </div>
          </div>
          {/*----------Card--------2--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/yXfGp9V/c-b-2.webp"
              className="h-[300px] w-full rounded-t-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black px-2 py-3">Commercial</h2>
              <p className="text-xl text-gray-400 px-2 py-1">
                Our experience building in the
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                Commercial filed includes showrooms,
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">Supermalls and </p>
            </div>
          </div>
          {/*----------Card--------3--------*/}
          <div className="border-2 border-sky-900 rounded-lg">
            <img
              src="https://i.ibb.co/wzPzhc5/c-b-3.jpg"
              className="h-[300px] w-full rounded-t-lg"
            />
            <div className="py-6 px-4">
              <h2 className="text-3xl text-black pxyj-2 py-3">Resedential</h2>
              <p className="text-xl text-gray-400 px-2 py-1">
                Resedential devlopment is the
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                beginning that has shaped us to this
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                day. Our devlopment includes
              </p>
              <p className="text-xl text-gray-400 px-2 py-1">
                House & Apartments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExcellentServices;
