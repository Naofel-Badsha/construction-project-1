import { useEffect } from "react";
import { useState } from "react";
import TeamCard from "./TeamCard";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div className="bg-white">
      {/*--------Section------banner--------*/}
      <div className="bg-slate-800 w-full h-[300px]">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white mt-24">
            Our Team Members
          </h2>
        </div>
      </div>
      {/*--------Section------banner--------*/}
      <div className="container m-auto py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
