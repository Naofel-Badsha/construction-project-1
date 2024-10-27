import { useEffect } from "react";
import { useState } from "react";

const Group = () => {
  const [brandGroups, setBrandGroups] = useState([]);
  useEffect(() => {
    fetch("/brandGroups.json")
      .then((res) => res.json())
      .then((data) => setBrandGroups(data));
  }, []);
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto ">
        <div className="flex items-center justify-around gap-6 py-16 overflow-x-auto">
          {/*------Brand-------logo-----1----*/}
          {brandGroups.map((item) => (
            <img key={item.id} src={item.image} className="rounded-lg w-44 h-44 border-2 border-sky-800" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Group;
