import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="py-10 container m-auto">
        {/*-----------Part------1--------Start-------*/}
        <div className="flex  justify-between gap-12 flex-col lg:flex-row">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1">
            <img
              src="https://i.ibb.co/T0NR5K1/cons-about-1.jpg"
              className="w-full h-[450px]"
            />
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div className="flex-1">
            <h1 className="text-3xl text-sky-800 py-6">Contact Information</h1>
            <div>
              <h2 className="text-2xl text-black py-2">
                Company Name:{" "}
                <small className="text-xl text-slate-400 ml-3">
                  Real Estate
                </small>
              </h2>
              <h2 className="text-2xl text-black py-2">
                Address:{" "}
                <small className="text-xl text-slate-400 ml-3">
                  Dhaka, Gulistan, Twintower-40/75
                </small>
              </h2>
              <h2 className="text-2xl text-black py-2">
                Phone Number:{" "}
                <small className="text-xl text-slate-400 ml-3">
                  01733457698
                </small>
              </h2>
              <h2 className="text-2xl text-black py-2">
                Email Address:{" "}
                <small className="text-xl text-slate-400 ml-3">
                  realstate@gmail.com
                </small>
              </h2>
              <h2 className="text-2xl text-black py-2">
                Website:{" "}
                <small className="text-xl text-slate-400 ml-3">.........</small>
              </h2>
              <h2 className="text-2xl text-black py-2">
                Business Hours:{" "}
                <small className="text-xl text-slate-400 ml-3">
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
              src="https://i.ibb.co/T0NR5K1/cons-about-1.jpg"
              className="w-full h-[500px]"
            />
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div className="flex-1 w-full">
            <h1 className="text-3xl text-sky-800  py-6">Contact Form</h1>
            <div>
              <div className="card bg-slate-950 ">
                <form className="card-body">
                  {/*------From-----Input------1-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  {/*------From-----Input------2-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="Email"
                      placeholder="Enter your Email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/*------From-----Input------3-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter your Phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  {/*------From-----Input------4-------*/}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Subject"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>
                  {/*------From------Textarea-----5-------*/}
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter Your Message"
                    className="w-full h-[100px] p-4 rounded-lg outline-none border-2 mt-4"
                    required
                  ></textarea>
                  <div className="form-control mt-6">
                    <button className="btn bg-sky-800 text-xl text-white">
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
        <div className="flex gap-6  justify-between flex-col md:flex-row lg:flex-row py-10">
          {/*--------1---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Social Media Links</h2>
            <div className="flex gap-6">
              <Link>
                <i className="fa-brands fa-facebook text-2xl hover:text-sky-600 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-twitter text-2xl hover:text-sky-600 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram text-2xl hover:text-sky-600 duration-75"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-pinterest text-2xl hover:text-sky-600 duration-75"></i>
              </Link>
            </div>
          </div>
          {/*--------2---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Call to Action</h2>
            <div className="flex gap-6 flex-col">
              <Link>
                <i className="fa-solid fa-phone text-2xl"></i> <small className="text-2xl ml-3">017*******08</small>
              </Link>
              <Link>
                <i className="fa-brands fa-whatsapp text-2xl"></i> <small className="text-2xl ml-3">017*******08</small>
              </Link>
              <Link>
                <i className="fa-solid fa-info text-2xl"></i> <small className="text-2xl ml-3">017*******08</small>
              </Link>
            </div>
          </div>
          {/*--------3---------*/}
          <div>
            <h2 className="text-2xl text-sky-800 py-4">Office Locations</h2>
            <div>
              <p className="text-xl">Dhaka, Gulistan, Twintower-40/75</p>
            </div>
          </div>
        </div>
        {/*-----------Part------3--------End-------*/}
      </div>
    </div>
  );
};

export default Contact;
