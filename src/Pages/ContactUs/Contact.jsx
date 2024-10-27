import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      {/*--------Section------banner--------*/}
      <div className="bg-sky-800 w-full h-[300px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white">
            Our Contact
          </h2>
        </div>
      </div>
      <div className="container m-auto py-10">
        {/*-----------Part------1--------Start-------*/}
        <div className="flex  justify-between gap-12 flex-col lg:flex-row">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1">
            <img
              src="https://i.ibb.co/6NDwGCB/pngtree-2.png"
              className="w-full h-[450px]"
            />
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div className="flex-1">
            {/*-------------Heading-----------*/}
            <h1 className="px-6 text-2xl md:text-4xl lg:text-5xl font-bold text-sky-800 py-10">
              Contact Information
            </h1>

            <div className="px-6">
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2 ">
                Company Name:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1 ">
                  Real Estate
                </small>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2 ">
                Address:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1">
                  Dhaka, Gulistan, Twintower-40/75
                </small>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2 ">
                Phone Number:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1">
                  01733457698
                </small>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2 ">
                Email Address:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1">
                  realstate@gmail.com
                </small>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2 ">
                Website:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1">
                  .........
                </small>
              </h2>
              <h2 className="text-xl md:text-2xl lg:text-2xl font-medium text-black py-2">
                Business Hours:{" "}
                <small className="md:text-xl lg:text-xl text-slate-700 font-normal ml-1">
                  [Days and Hours of Operation]
                </small>
              </h2>
            </div>
          </div>
          {/*-----------Text----------End---------*/}
        </div>
        {/*-----------Part------1--------End-------*/}

        {/*-----------Part------2--------Start-------*/}
        <div className="flex items-center justify-between gap-12 flex-col lg:flex-row py-10">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1 w-full">
            <img
              src="https://i.ibb.co/fdT7BJY/DGlMn.jpg"
              className="w-full h-[500px] rounded-xl"
            />
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div className="flex-1 w-full">
            <h1 className="px-6 text-2xl md:text-4xl lg:text-5xl font-bold text-sky-800 py-10">
              Contact Form
            </h1>
            <div>
              <div className="card bg-[#8b9db5]">
                <form className="card-body">
                  {/*------From-----Input------1-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-xl lg:text-xl text-black font-bold">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="input input-bordered w-full bg-white text-black"
                      required
                    />
                  </div>
                  {/*------From-----Input------2-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-xl lg:text-xl text-black font-bold">
                        Email
                      </span>
                    </label>
                    <input
                      type="Email"
                      placeholder="Enter your Email"
                      className="input input-bordered bg-white text-black"
                      required
                    />
                  </div>
                  {/*------From-----Input------3-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-xl lg:text-xl text-black font-bold">
                        Phone
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your Phone"
                      className="input input-bordered bg-white text-black"
                      required
                    />
                  </div>
                  {/*------From-----Input------4-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-xl lg:text-xl text-black font-bold">
                        Subject
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Subject"
                      className="input input-bordered w-full bg-white text-black"
                      required
                    />
                  </div>
                  {/*------From------Textarea-----5-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text md:text-xl lg:text-xl text-black font-bold">
                        Messages
                      </span>
                    </label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Enter Your Message"
                      className="w-full h-[100px] p-4 bg-white text-black rounded-lg outline-none border-2 mt-4"
                      required
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-800 text-xl text-white border-0">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*-----------Text----------End---------*/}
        </div>
        {/*-----------Part------2--------End-------*/}

        {/*-----------Part------3--------Start-------*/}
        <div className="flex gap-6 px-6 justify-between flex-col md:flex-row lg:flex-row py-10">
          {/*--------1---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Social Media Links</h2>
            <div className="flex gap-6">
              <Link>
                <i className="fa-brands fa-facebook text-3xl text-black hover:text-sky-600 hover:-translate-y-2 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter text-3xl text-black hover:text-sky-600 hover:-translate-y-2 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram text-3xl text-black hover:text-sky-600 hover:-translate-y-2 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-pinterest text-3xl text-black hover:text-sky-600 hover:-translate-y-2 duration-75"></i>
              </Link>
            </div>
          </div>
          {/*--------2---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Call to Action</h2>
            <div className="flex gap-6 flex-col">
              <Link>
                <i className="fa-solid fa-phone text-black text-2xl"></i>{" "}
                <small className="text-2xl text-black ml-3">017*******08</small>
              </Link>
              <Link>
                <i className="fa-brands fa-whatsapp text-black text-2xl"></i>{" "}
                <small className="text-2xl text-black ml-3">017*******08</small>
              </Link>
              <Link>
                <i className="fa-solid fa-info text-black text-2xl"></i>{" "}
                <small className="text-2xl text-black ml-3">017*******08</small>
              </Link>
            </div>
          </div>
          {/*--------3---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Office Locations</h2>
            <div>
              <p className="md:text-xl text-black">
                Dhaka, Gulistan, Twintower-40/75
              </p>
            </div>
          </div>
        </div>
        {/*-----------Part------3--------End-------*/}
      </div>
    </div>
  );
};

export default Contact;
