import { useEffect } from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const InventoryMnagement = () => {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("/inventoryMenagement.json")
      .then((res) => res.json())
      .then((data) => setInventories(data));
  }, []);
  console.log(inventories);
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
          <table className=" w-full table text-black">
            <thead>
              <tr className="border-b-2 border-sky-900">
                <td className="text-xl font-bold text-black">Order Id</td>
                <td className="text-xl font-bold text-black">Technician</td>
                <td className="text-xl font-bold text-black">Engineers</td>
                <td className="text-xl font-bold text-black">Company</td>
                <td className="text-xl font-bold text-black">Location</td>
                <td className="text-xl font-bold text-black">Start Date</td>
                <td className="text-xl font-bold text-black">End Date</td>
                <td className="text-xl font-bold text-black">Exit Month</td>
                <td className="text-xl font-bold text-black"> Treak</td>
                <th className="text-xl font-bold text-black">Action</th>
              </tr>
            </thead>

            <tbody>
              {inventories.map((item) => (
                <tr key={item.id} className="border-b-2 border-sky-900 ">
                  <th>{item.orderId}</th>
                  <td>{item.technician}</td>
                  <td>{item.engineers}</td>
                  <td>{item.company}</td>
                  <td>{item.location}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>{item.exitTotalMonth} Months</td>
                  <td>
                    <button className="btn bg-sky-800 text-white border-0">
                      {item.track}
                    </button>
                  </td>
                  <td>
                    <button className="btn bg-red-600 border-0">
                    <MdDeleteForever  className="text-2xl text-white"/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryMnagement;
