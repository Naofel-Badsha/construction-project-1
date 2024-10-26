const InventoryMnagement = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Inventory Mnagement</h1>
        <h4 className="text-xl text-slate-900 py-2">
          Hi, Samantha. Wellcome back to Inventory Mnagement!
        </h4>
      </div>
      {/*----------User-----------*/}
      {/*-----------Inventory Management---------Start-------*/}
      <div className="py-10">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryMnagement;
