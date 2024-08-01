const ProjectCullection = () => {
  return (
    <div className="bg-[#fff]">
      <div className="container m-auto">
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-black py-10">
          Our collection <br></br> best project
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-10">
          {/*--------Image------1m-----*/}
          <div>
            <img
              src="https://i.ibb.co/d4ws5G7/project-2.webp"
              className="h-[350px] w-full"
            />
          </div>
          {/*--------Image------2-----*/}
          <div>
            <img
              src="https://i.ibb.co/1Q08F6Q/project-1.webp"
              className="h-[350px] w-full"
            />
          </div>
          {/*--------Image------3-----*/}
          <div>
            <img
              src="https://i.ibb.co/3mJMYp1/project-3.jpg"
              className="h-[350px] w-full"
            />
          </div>
          {/*--------Image------4-----*/}
          <div>
            <img
              src="https://i.ibb.co/McxCXpX/projects-4.jpg"
              className="h-[350px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCullection;
