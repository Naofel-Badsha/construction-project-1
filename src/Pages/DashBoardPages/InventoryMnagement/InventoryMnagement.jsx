const InventoryMnagement = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl text-sky-800">Inventory Mnagement</h1>
        <h4 className="text-xl text-slate-500 py-1">
          Hi, Samantha. Wellcome back to Inventory Mnagement!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*----------*****------------*/}
      <div className="py-10">
        <div className=" bg-white py-3 px-4 rounded-lg">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-6">
            <h2 className="text-3xl text-sky-900">In Stock</h2>
            <button className="btn text-xl bg-sky-600  text-white">
              <i className="fa-solid fa-plus text-xl text-white"></i>Add New
            </button>
          </div>
        </div>
      </div>
      {/*----------*****------------*/}

      {/*-----------Search-Bar-----&-----Button----*/}
      <div className=" flex gap-6 flex-col lg:flex-row items-center justify-between">
        <div className=" py-10">
          <input
            type="text"
            placeholder="Searce Here...?"
            className="py-3 bg-white text-black text-lg border-none
             outline-none shadow-lg p-3 rounded-md w-[400px] "
          />
        </div>
        <div className="flex items-center gap-6">
          <div className="bg-white w-[60px] h-[60px] text-center rounded-lg">
            <i className="fa-solid fa-calendar-days text-4xl text-black  text-center mt-2 "></i>
          </div>
          <button className="btn text-lg bg-white text-sky-600">Status</button>
        </div>
      </div>
      {/*-----------Search-Bar-----&-----Button----*/}

      {/*-----------Inventory Management---------Start-------*/}
      <div className="">
        <div className="overflow-x-auto">
          <table className=" w-full table-xl text-black">
            <thead>
              <tr className="border-b-2 border-sky-900">
                <th className="text-xl text-sky-800">Edit</th>
                <td className="text-xl text-sky-800">Order Id</td>
                <td className="text-xl text-sky-800">Technician</td>
                <td className="text-xl text-sky-800">company</td>
                <td className="text-xl text-sky-800">location</td>
                <td className="text-xl text-sky-800">Date</td>
                <td className="text-xl text-sky-800"> Treak</td>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2 border-sky-900 ">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>Russia</td>
                <td>3/25/2021</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Wyman-Ledner</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Wiza, Bins and Emard</td>
                <td>Venezuela</td>
                <td>12/8/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                  Pending
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Meghann Durtnal</td>
                <td>Staff Accountant IV</td>
                <td>Schuster-Schimmel</td>
                <td>Philippines</td>
                <td>2/17/2021</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Completed
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>OHara, Welch and Keebler</td>
                <td>Indonesia</td>
                <td>5/23/2020</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                  Pending
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>Lesya Tinham</td>
                <td>Safety Technician IV</td>
                <td>Turner-Kuhlman</td>
                <td>Philippines</td>
                <td>2/21/2021</td>
                <td>
                  <button className=" bg-sky-800 text-white px-2 py-1 rounded-lg cursor-pointer">
                    Pending
                  </button>
                </td>
                <th>
                  <i className="fa-solid fa-trash-arrow-up text-3xl text-black cursor-pointer"></i>
                </th>
              </tr>
            </tbody>

            <tfoot className="border-t-2 border-sky-900">
              <tr>
                <th className="text-xl text-sky-800">Edit</th>
                <td className="text-xl text-sky-800">Order Id</td>
                <td className="text-xl text-sky-800">Technician</td>
                <td className="text-xl text-sky-800">company</td>
                <td className="text-xl text-sky-800">location</td>
                <td className="text-xl text-sky-800">Date</td>
                <td className="text-xl text-sky-800">Treak</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryMnagement;
