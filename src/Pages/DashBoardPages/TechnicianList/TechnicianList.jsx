const TechnicianList = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">TechnicianList</h1>
        <h4 className="text-xl text-slate-900 py-1">
          Hi, Samantha. Wellcome back to TechnicianList!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-------------------------*/}
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className=" w-full  table-xl text-black">
            <thead>
              <tr className="border-b-2 border-sky-900">
                <th className="text-xl text-sky-800">Img</th>
                <td className="text-xl text-sky-800">Name</td>
                <td className="text-xl text-sky-800">Type</td>
                <td className="text-xl text-sky-800">company</td>
                <td className="text-xl text-sky-800">Reating </td>
                <td className="text-xl text-sky-800">Last Login</td>
                <td className="text-xl text-sky-800">Contact</td>
                <th>Id</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <div className="">
                    <div className="rounded-full h-12 w-12 ">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        className="rounded-full h-12 w-12"
                      />
                    </div>
                  </div>
                </th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>9.5%</td>
                <td>12/16/2020</td>
                <td>+00134500</td>
                <th>1</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <div className="">
                    <div className="rounded-full h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                        className="rounded-full h-12 w-12"
                      />
                    </div>
                  </div>
                </th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>8.7%</td>
                <td>12/5/2020</td>
                <td>+00213456</td>
                <th>2</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <div className="">
                    <div className="rounded-full h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                        className="rounded-full h-12 w-12"
                      />
                    </div>
                  </div>
                </th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>7.7%</td>
                <td>8/15/2020</td>
                <td>+00567890</td>
                <th>3</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <div className="">
                    <div className="rounded-full h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                        className="rounded-full h-12 w-12"
                      />
                    </div>
                  </div>
                </th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>6.5%</td>
                <td>3/25/2021</td>
                <td>+00547680</td>
                <th>4</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicianList;
