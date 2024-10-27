import { useEffect, useState } from "react";

const TechnicianList = () => {
  const [technicians, setTechnicians] = useState([]);
  useEffect(() => {
    fetch("/technicianList.json")
      .then((res) => res.json())
      .then((data) => setTechnicians(data));
  }, []);
  console.log(technicians);
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl font-bold text-sky-800">Technician List</h1>
        <h4 className="text-xl text-slate-900 py-1">
          Hi, Samantha. Wellcome back to TechnicianList!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-------------------------*/}
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className=" w-full  table text-black">
            <thead>
              <tr className="border-b-2 border-sky-900">
                <th className="text-xl font-bold text-black">Id</th>
                <th className="text-xl font-bold text-black">Img</th>
                <td className="text-xl font-bold text-black">Name</td>
                <td className="text-xl font-bold text-black">Project Name</td>
                <td className="text-xl font-bold text-black">Company</td>
                <td className="text-xl font-bold text-black">Location</td>
                <td className="text-xl font-bold text-black">Title</td>
                <td className="text-xl font-bold text-black">Experience</td>
                <td className="text-xl font-bold text-black">Email</td>
                <td className="text-xl font-bold text-black">Rating</td>
                <td className="text-xl font-bold text-black">Total Works</td>
                <td className="text-xl font-bold text-black">Group</td>
                <td className="text-xl font-bold text-black">Contact</td>
              </tr>
            </thead>

            <tbody>
              {technicians.map((item) => (
                <tr key={item.id} className="border-b-2 border-sky-900">
                  <td>{item.id}</td>
                  <th>
                    <div className="">
                      <div className="rounded-full h-14 w-14 ">
                        <img
                          src={item.image}
                          className="rounded-full h-12 w-12"
                        />
                      </div>
                    </div>
                  </th>
                  <td>{item.EngineerName}</td>
                  <td>{item.ProjectName}</td>
                  <td>{item.company}</td>
                  <td>{item.location}</td>
                  <td>{item.title}</td>
                  <td>{item.workExperience} Years</td>
                  <th>{item.email}</th>
                  <th>{item.rating}</th>
                  <th>{item.totalWorks}</th>
                  <th>{item.group}</th>
                  <th>{item.contact}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TechnicianList;
