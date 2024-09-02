const TeamCard = ({ team }) => {
  const { image, member_name, degree, title } = team;
  return (
    <div className="border-2 border-sky-900 rounded-[17px] hover:-translate-y-2 duration-150">
      <div className="card bg-white shadow-xl">
        <figure>
          <img
            src={image}
            className="h-[350px] w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-sky-800">{member_name}</h2>
          <p className="text-xl text-black">{title}</p>
          <p className="text-xl text-black">{degree}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
