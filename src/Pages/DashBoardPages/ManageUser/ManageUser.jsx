import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const ManageUser = () => {
  const [manageUsers, setManageUsers] = useState([]);
  useEffect(() => {
    fetch("/manageUsers.json")
      .then((res) => res.json())
      .then((data) => setManageUsers(data));
  }, []);
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Manage User</h1>
        <h4 className="text-xl text-slate-900 py-1">
          Hi, Samantha. Wellcome back to Manage User!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-----------Manage-----User------Stert--------*/}
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className="w-full table text-black ">
            <thead>
              <tr className="border-b-2 border-sky-900 ">
               <th className="text-xl font-bold text-black">Id</th>
                <th className="text-xl font-bold text-black">Imges</th>
                <td className="text-xl font-bold text-black">Name</td>
                <td className="text-xl font-bold text-black">Email</td>
                <td className="text-xl font-bold text-black">Location</td>
                <td className="text-xl font-bold text-black">Reating </td>
                <td className="text-xl font-bold text-black">Last Login</td>
                <td className="text-xl font-bold text-black">Contact</td>
                <td className="text-xl font-bold text-black">Action</td>
              </tr>
            </thead>

            <tbody>
              {manageUsers.map((item) => (
                <tr key={item.id} className="border-b-2 border-sky-900 ">
                  <th>{item.id}</th>
                  <th>
                    <div className="">
                      <div className="rounded-full h-w-14 w-14 ">
                        <img
                          src={item.image}
                          className="rounded-full h-12 w-12 object-cover"
                        />
                      </div>
                    </div>
                  </th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.location}</td>
                  <td>{item.rating}</td>
                  <td>{item.lastLogin}</td>
                  <td>{item.phoneNumber}</td>
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

export default ManageUser;
