import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/*--------Section------banner--------*/}
      <div className="bg-sky-800 w-full h-[300px] flex items-center justify-center">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-white">
            Our About
          </h2>
        </div>
      </div>
      {/*----------Details---------*/}
      <div className="py-10 container m-auto">
        <div className="flex justify-between gap-12 flex-col lg:flex-row-reverse">
          {/*-----------Image--------Start---------*/}
          <div className="flex-1">
            <img
              src="https://i.ibb.co/T0NR5K1/cons-about-1.jpg"
              className="w-full h-[450px]"
            />
          </div>

          {/*-----------Text----------Start---------*/}
          {/*-----------Text--------contact-----1-------*/}
          <div className="px-6 flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-normal">
              Our company Building the Future, Restoring the Past
            </h1>
            <div className="py-8">
              <p className=" text-slate-800 md:text-xl lg:text-xl text-justify">
                Welcome to a trusted leader in the construction industry.
                decades of experience, we specialize in delivering high-quality,
                construction projects, from residential homes to commercial
                complexes and infrastructure developments. Our team of skilled.
                professionals is dedicated to excellence, innovation, and
                customer. and customer satisfaction.
              </p>
            </div>
            <Link to="/contact">
              <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-red-400 rounded-lg">
                Countact Me
              </button>
            </Link>
          </div>
        </div>
        <hr className="mt-10 w-full" />

        {/*--------Middle------text-----Start-----*/}
        <div className="flex items-center justify-center">
          <div className="py-16 px-6 text-black">
            <h3 className="text-xl md:text-3xl lg:text-3xl">
              At we stand out in the construction industry for our comprehensive
              approach and unwavering commitment to excellence. Here are some of
              the features that make us the preferred choice for your
              construction needs.
            </h3>
          </div>
        </div>
        {/*--------Middle------text-----End-----*/}

        {/*--------our----Company----Details--------*/}
        <div>
          <div>
            <div className="flex  gap-10 flex-col lg:flex-row px-6">
              {/*--------Details-------1--------*/}
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-3xl py-3 text-sky-800 font-bold">
                  <i className="fa-regular fa-circle-check mr-2 "></i> Company
                  Overview:
                </h1>
                <h2 className="text-xl text-black font-medium py-1">
                  Including its name:{" "}
                  <small className="text-xl text-slate-600 font-normal">
                    Real Estate
                  </small>
                </h2>
                <h2 className="text-xl text-black font-medium py-1">
                  Founding date:{" "}
                  <small className="text-xl text-slate-600 font-normal">
                    Established in 2005
                  </small>
                </h2>
                <h2 className="text-xl text-black font-medium py-1">
                  Location:{" "}
                  <small className="text-xl text-slate-600 font-normal">
                    322/ Gulistan Dhaka
                  </small>
                </h2>
                <h2 className="text-xl text-black font-medium py-1">
                  Briefly introduce the company:{" "}
                  <small className="text-xl text-justify text-slate-600 font-normal">
                    Real Estate Construction is a premier construction company
                    specializing in sustainable and eco-friendly building
                    projects. Established in 2005, Real Estate has earned a
                    reputation for excellence in the residential, commercial,
                    and infrastructure sectors. The company offers a wide range
                    of services, including design, project management,
                    construction, and maintenance, all tailored to meet the
                    unique needs of each client
                  </small>
                </h2>
              </div>

              {/*--------Details-------2--------*/}
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl lg:text-3xl py-3 text-sky-800 font-bold">
                  <i className="fa-regular fa-circle-check mr-2"></i> Mission
                  Statement:
                </h1>
                <small className="text-xl text-justify text-slate-600 font-normal">
                  Our mission is to innovate and provide high-quality technology
                  solutions by prioritizing customer satisfaction and ethical
                  business practices. We are committed to empowering businesses
                  and individuals through advanced software and hardware, and
                  strive to lead the industry with cutting-edge, sustainable
                  technology
                </small>
              </div>
            </div>
            <hr className="p-[1px] mt-6 bg-sky-800" />
          </div>

          {/*--------Details-------3--------*/}
          <div className="px-6">
            {/*------Experience & Expertise-Middle------text-----Start-----*/}
            <div className="flex items-center justify-center">
              <div className="py-16 px-6 text-black">
                <p className="text-xl md:text-3xl lg:text-3xl">
                  Introducing the team of a construction company is an important
                  way to expertise, and experience of the individuals who
                  contribute showcase the skills, to the company's success.
                  Here's a suggested structure for presenting team
                </p>
              </div>
            </div>
            {/*------Experience & Expertise-Middle------text-----End-----*/}

            <h1 className="text-2xl md:text-3xl lg:text-3xl py-3 text-sky-800 font-bold">
              <i className="fa-regular fa-circle-check mr-2"></i> Experience and
              Expertise:
            </h1>
            <div className="flex  gap-10 flex-col lg:flex-row">
              {/*---------Experience------Start-----*/}
              <div className="flex-1">
                <h2 className="text-2xl text-teal-700 py-6 font-bold">
                  Experience{" "}
                </h2>
                {/*---------Experience------1-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    1. Years in Business
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Mention the number of years your company has been operating,
                    emphasizing long-standing industry presence.
                  </li>
                </div>
                {/*---------Experience------2-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    2. Completed Projects
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Highlight the number and types of projects completed, such
                    as residential, commercial, industrial, or infrastructure
                    projects.
                  </li>
                </div>
                {/*---------Experience------3-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    3. Diverse Portfolio
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Showcase a variety of projects, from small renovations to
                    large-scale constructions, to demonstrate versatility.
                  </li>
                </div>
                {/*---------Experience------4-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    4. Clientele
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Mention notable clients or partnerships, which can lend
                    credibility and showcase your company's ability to meet
                    diverse needs
                  </li>
                </div>
                {/*---------Experience------5-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    5. Geographic Reach
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    If applicable, highlight the regions or countries where you
                    have successfully completed projects.
                  </li>
                </div>
              </div>

              {/*---------Expertise------Start-----*/}
              <div className="flex-1">
                <h2 className="text-2xl text-teal-700 py-6 font-bold">
                  Expertise{" "}
                </h2>
                {/*---------Expertise------1-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    1. Specializations
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Describe any specific areas of expertise, such as green
                    building practices, historic preservation, luxury home
                    construction, or high-rise buildings.
                  </li>
                </div>

                {/*---------Expertise------2-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    2. Technical Skills
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Emphasize the technical capabilities of your team, including
                    knowledge of modern construction techniques, materials, and
                    technologies.
                  </li>
                </div>

                {/*---------Expertise------3-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    3. Certifications and Accreditations
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    List any industry-specific certifications, such as LEED
                    certification, OSHA training, or other professional
                    credentials.
                  </li>
                </div>
                {/*---------Expertise------4-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    4. Team Qualifications
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Highlight the qualifications of key team members, such as
                    licensed architects, experienced project managers, skilled
                    engineers, and certified craftsmen.
                  </li>
                </div>
                {/*---------Expertise------5-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    5. Innovative Solutions
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Mention any innovative approaches or technologies your
                    company uses, such as BIM (Building Information Modeling),
                    prefabrication, or sustainable construction practices.
                  </li>
                </div>
                {/*---------Expertise------6-----*/}
                <div className="py-2">
                  <h3 className="text-xl text-black font-medium py-1">
                    6. Awards and Recognitions
                  </h3>
                  <li className="ml-3 text-xl text-slate-600 font-normal">
                    Mention any innovative approaches or Showcase any industry
                    awards or recognitions that validate your company's quality
                    and commitment to excellence.
                  </li>
                </div>
              </div>
            </div>
            <hr className="p-[1px] mt-6 bg-sky-800" />
          </div>

          {/*--------Details-------5--------*/}
          <div>
            <div className="px-6">
              {/*--------Middle------text-----Start-----*/}
              <div className="flex items-center justify-center">
                <div className="py-16 text-black">
                  <p className="text-xl md:text-3xl lg:text-3xl">
                    Client testimonials are a powerful way to build trust and
                    credibility for your construction company. They provide
                    prospective clients with insights into your company's work
                    quality, professionalism, and customer service. Here are
                    some examples of how to present client testimonials:
                  </p>
                </div>
              </div>
              {/*--------Middle------text-----Start-----*/}

              <h1 className="text-2xl md:text-3xl lg:text-3xl py-3 text-sky-800 font-bold">
                <i className="fa-regular fa-circle-check mr-2"></i>Format for
                Client Testimonials
              </h1>
              <div className="flex  gap-10 flex-col lg:flex-row py-6">
                {/*------Testimonials-----1-----*/}
                <div className="flex-1">
                  <h3 className="text-xl text-black font-medium py-1">
                    1. Client Name and Position (Optional)
                  </h3>
                  <li className="text-xl text-slate-600 font-normal">
                    Company/Project Name (if applicable)
                  </li>
                </div>
                {/*------Testimonials-----2-----*/}
                <div className="flex-1">
                  <h3 className="text-xl text-black font-medium py-1">
                    2. Testimonial
                  </h3>
                  <li className="text-xl text-slate-600 font-normal">
                    The testimonial should be a direct quote from the client,
                    expressing their satisfaction with your services.
                  </li>
                </div>
                {/*------Testimonials-----3-----*/}
                <div className="flex-1">
                  <h3 className="text-xl text-black font-medium py-1">
                    3. Project Details (Optional)
                  </h3>
                  <li className="text-xl text-slate-600 font-normal">
                    A brief description of the project, such as the type, scope,
                    and any unique aspects.
                  </li>
                </div>
              </div>
            </div>
            <hr className="p-[1px] mt-6 bg-sky-800" />
          </div>

          {/*--------Details-------6--------*/}
          <div className="px-6">
            {/*--------Middle------text-----Start-----*/}
            <div className="flex items-center justify-center">
              <div className="py-16 text-black">
                <p className="text-xl md:text-3xl lg:text-3xl">
                  Highlighting a construction company's community involvement
                  can showcase the company's commitment to social responsibility
                  and local engagement. This can build a positive reputation and
                  foster trust with clients, partners, and the broader
                  community. Here's a guide on how to present your company's
                  community involvement
                </p>
              </div>
            </div>
            {/*--------Middle------text-----End-----*/}

            <h1 className="text-2xl md:text-3xl lg:text-3xl text-sky-800 font-bold">
              <i className="fa-regular fa-circle-check mr-2"></i> Key Areas of
              Community Involvement
            </h1>
            {/*---------Community Involvement-------1------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                1. Local Charities and Non-Profit
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-normal">
                Supporting local charities through donations, sponsorships, or
                volunteer work.
              </li>
            </div>
            {/*---------Community Involvement-------2------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                2. Educational Initiatives
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Sponsoring scholarships or providing funding for educational
                programs in construction and related fields.
              </li>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Offering internships, apprenticeships, or mentoring programs for
                students interested in the construction industry.
              </li>
            </div>
            {/*---------Community Involvement-------3------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                3. Community Development Projects
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Participating in or leading community development projects, such
                as building affordable housing, community centers, or public
                infrastructure.
              </li>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Collaborating with local government and organizations on
                projects that improve community spaces.
              </li>
            </div>
            {/*---------Community Involvement-------4------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                4. Environmental Sustainability
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Implementing green building practices and promoting
                sustainability in construction projects.
              </li>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Engaging in local environmental initiatives, such as tree
                planting or clean-up events.
              </li>
            </div>
            {/*---------Community Involvement-------5------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                5. Employee Volunteer Programs
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Encouraging employees to volunteer in the community by providing
                paid volunteer days or organizing company-wide volunteer events.
              </li>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Supporting causes that are important to employees and involving
                them in the decision-making process for community initiatives.
              </li>
            </div>
            {/*---------Community Involvement-------6------*/}
            <div className="py-4">
              <h3 className="text-xl text-black font-medium py-1">
                6. Disaster Relief and Recovery
              </h3>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Providing support during natural disasters or emergencies, such
                as offering construction services for rebuilding efforts.
              </li>
              <li className="ml-2 text-xl text-slate-600 font-norma">
                Partnering with relief organizations to assist affected
                communities.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
