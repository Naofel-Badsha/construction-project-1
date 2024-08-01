const About = () => {
  return (
    <div className="">
      <div className="py-10 container m-auto">
        <div className="flex justify-between gap-12 flex-col lg:flex-row-reverse">
          {/*-----------Image--------Start---------*/}
          <div className=" ">
            <img
              src="https://i.ibb.co/T0NR5K1/cons-about-1.jpg"
              className="w-full h-[450px]"
            />
          </div>
          {/*-----------Image--------End---------*/}

          {/*-----------Text----------Start---------*/}
          <div>
            {/*-----------Text--------contact-----1-------*/}
            <div className="">
              <h1 className="text-2xl md:text-3xl lg:text-6xl font-normal">
                Our company <br></br> Building the Future, <br></br> Restoring
                the Past
              </h1>
              <div className="py-8">
                <p className="text-sm md:text-xl lg:text-xl">
                  Welcome to a trusted leader in the construction industry.
                </p>
                <p className="py-1 text-sm md:text-xl lg:text-xl">
                  decades of experience, we specialize in delivering
                  high-quality,
                </p>
                <p className="py-1 text-sm md:text-xl lg:text-xl">
                  construction projects, from residential homes to commercial
                </p>
                <p className="py-1 text-sm md:text-xl lg:text-xl">
                  complexes and infrastructure developments. Our team of skilled
                </p>
                <p className="py-1 text-sm md:text-xl lg:text-xl">
                  professionals is dedicated to excellence, innovation, and
                  customer
                </p>
                <p className="py-1 text-sm md:text-xl lg:text-xl">
                  and customer satisfaction.
                </p>
              </div>
              <button className="text-xl text-white bg-sky-900 px-7 py-3 hover:shadow-md hover:shadow-red-400 rounded-lg">
                Discover More
              </button>
            </div>
          </div>
          {/*-----------Text----------End---------*/}
        </div>
        <hr className="mt-10 w-full" />

        {/*--------Middle------text-----Start-----*/}
        <div className="flex items-center justify-center">
          <div className="py-16 text-black">
            <h3 className="text-2xl md:text-3xl lg:text-3xl">
              At we stand out in the construction industry for our comprehensive
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-3xl">
              approach and unwavering commitment to excellence. Here are some
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-3xl">
              of the features that make us the preferred choice for your
              construction <br></br> needs.
            </h3>
          </div>
        </div>
        {/*--------Middle------text-----End-----*/}

        {/*--------our----Company----Details--------*/}
        <div>
          <div>
            <div className="flex  gap-10 flex-col lg:flex-row">
              {/*--------Details-------1--------*/}
              <div className="flex-1">
                <h1 className="text-3xl py-3 text-sky-900">
                  <i className="fa-regular fa-circle-check mr-2"></i> Company
                  Overview:
                </h1>
                <h2 className="text-[22px] text-black py-1">
                  Including its name:{" "}
                  <small className="text-[18px] text-slate-400">
                    Real Estate
                  </small>
                </h2>
                <h2 className="text-[22px] text-black py-1">
                  Founding date:{" "}
                  <small className="text-[18px] text-slate-400">
                    Established in 2005
                  </small>
                </h2>
                <h2 className="text-[22px] text-black py-1">
                  Location:{" "}
                  <small className="text-[18px] text-slate-400">
                    322/ Gulistan Dhaka
                  </small>
                </h2>
                <h2 className="text-[22px] text-black py-1">
                  Briefly introduce the company:{" "}
                  <small className="text-[18px] text-slate-400">
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
                <h1 className="text-3xl py-3 text-sky-900">
                  <i className="fa-regular fa-circle-check mr-2"></i> Mission
                  Statement:
                </h1>
                <small className="text-[18px] text-slate-400">
                  Our mission is to innovate and provide high-quality technology
                  solutions by prioritizing customer satisfaction and ethical
                  business practices. We are committed to empowering businesses
                  and individuals through advanced software and hardware, and
                  strive to lead the industry with cutting-edge, sustainable
                  technology
                </small>
              </div>
            </div>
            <hr className="py-4 mt-6" />
          </div>

          {/*--------Details-------3--------*/}
          <div>
            {/*------Experience & Expertise-Middle------text-----Start-----*/}
            <div className="flex items-center justify-center">
              <div className="py-16 text-black">
                <p className="text-2xl md:text-3xl lg:text-3xl">
                  Introducing the team of a construction company is an important
                  way 
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                  to expertise, and experience of the individuals who contribute
                    showcase
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                  the skills, to the company's success. Here's a suggested structure 
                <br></br>  for presenting team
                  </p>
                </p>
              </div>
            </div>
            {/*------Experience & Expertise-Middle------text-----End-----*/}

            <h1 className="text-3xl py-3 text-sky-900">
              <i className="fa-regular fa-circle-check mr-2"></i> Experience and
              Expertise:
            </h1>
            <div className="flex  gap-10 flex-col lg:flex-row">
              {/*---------Experience------Start-----*/}
              <div className="flex-1">
                <h2 className="text-2xl text-teal-700 py-6">Experience </h2>
                {/*---------Experience------1-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    1. Years in Business
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Mention the number of years your company has been operating,
                    emphasizing long-standing industry presence.
                  </li>
                </div>
                {/*---------Experience------2-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    2. Completed Projects
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Highlight the number and types of projects completed, such
                    as residential, commercial, industrial, or infrastructure
                    projects.
                  </li>
                </div>
                {/*---------Experience------3-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    3. Diverse Portfolio
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Showcase a variety of projects, from small renovations to
                    large-scale constructions, to demonstrate versatility.
                  </li>
                </div>
                {/*---------Experience------4-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">4. Clientele</h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Mention notable clients or partnerships, which can lend
                    credibility and showcase your company's ability to meet
                    diverse needs
                  </li>
                </div>
                {/*---------Experience------5-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    5. Geographic Reach
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    If applicable, highlight the regions or countries where you
                    have successfully completed projects.
                  </li>
                </div>
              </div>

              {/*---------Expertise------Start-----*/}
              <div className="flex-1">
                <h2 className="text-2xl text-teal-700 py-6">Expertise </h2>
                {/*---------Expertise------1-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">1. Specializations</h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Describe any specific areas of expertise, such as green
                    building practices, historic preservation, luxury home
                    construction, or high-rise buildings.
                  </li>
                </div>

                {/*---------Expertise------2-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    2. Technical Skills
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Emphasize the technical capabilities of your team, including
                    knowledge of modern construction techniques, materials, and
                    technologies.
                  </li>
                </div>

                {/*---------Expertise------3-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    3. Certifications and Accreditations
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    List any industry-specific certifications, such as LEED
                    certification, OSHA training, or other professional
                    credentials.
                  </li>
                </div>
                {/*---------Expertise------4-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    4. Team Qualifications
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Highlight the qualifications of key team members, such as
                    licensed architects, experienced project managers, skilled
                    engineers, and certified craftsmen.
                  </li>
                </div>
                {/*---------Expertise------5-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    5. Innovative Solutions
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Mention any innovative approaches or technologies your
                    company uses, such as BIM (Building Information Modeling),
                    prefabrication, or sustainable construction practices.
                  </li>
                </div>
                {/*---------Expertise------6-----*/}
                <div className="py-2">
                  <h3 className="text-[22px] text-black">
                    6. Awards and Recognitions
                  </h3>
                  <li className="ml-5 text-[18px] text-slate-400">
                    Mention any innovative approaches or Showcase any industry
                    awards or recognitions that validate your company's quality
                    and commitment to excellence.
                  </li>
                </div>
              </div>
            </div>
            <hr className="py-4 mt-6" />
          </div>

          {/*--------Details-------4--------*/}
          <div>
            <div className="flex  gap-10 flex-col lg:flex-row">
              {/*---------Key Team Members-----------*/}
              <div>
                <h1 className="text-3xl py-3 text-sky-900">
                  <i className="fa-regular fa-circle-check mr-2"></i> Key Team
                  Members:
                </h1>
                {/*--------Team------1-------- */}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    1. Project Managers
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Aitur Rahman
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Summarize their experience in managing various
                      construction projects.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Detail their role in planning, executing, and overseeing
                      construction projects, including coordination with clients
                      and subcontractors.
                    </small>
                  </li>
                </div>

                {/*--------Team------2--------*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    2. Lead Architects/Designers
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      [Architect(s) Name(s)]
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Highlight their qualifications, including degrees,
                      certifications, and previous work.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Explain their role in designing and conceptualizing
                      projects, ensuring aesthetic and functional quality.
                    </small>
                  </li>
                </div>

                {/*--------Team------3--------*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    3. Engineers (Structural, Civil, Mechanical, etc.)
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      [Engineer(s) Name(s)]
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:-
                    <small className="text-[18px] ml-2 text-slate-400">
                      Describe their expertise in specific engineering
                      disciplines.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Outline their responsibilities, such as designing
                      structural elements, ensuring safety standards, and
                      integrating technical systems.
                    </small>
                  </li>
                </div>

                {/*--------Team------4--------*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    4. Construction Supervisors
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      [Supervisor(s) Name(s)]
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Provide a brief overview of their hands-on experience in
                      construction.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Describe their role in overseeing site activities,
                      managing crews, and ensuring quality control.
                    </small>
                  </li>
                </div>

                {/*--------Team------5--------*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    5. Safety Officers
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      [Safety Officer(s) Name(s)]
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Highlight their certifications and experience in
                      occupational safety.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Detail their responsibilities in enforcing safety
                      protocols, conducting site inspections, and training staff
                      on safety measures.
                    </small>
                  </li>
                </div>

                {/*--------Team------6--------*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    6. Administrative and Support Staff
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Support Staff
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Include roles like Human Resources, Marketing, and Office
                      Administration.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Summarize their contributions to company operations,
                      employee relations, client communication, and overall
                      support
                    </small>
                  </li>
                </div>
              </div>
              {/*----------Team Leadership----------*/}
              <div>
                <h1 className="text-3xl py-3 text-sky-900">
                  <i className="fa-regular fa-circle-check mr-2"></i>Team
                  Leadership:
                </h1>

                {/*------Team------1----*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    1. CEO/Founder:{" "}
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:{" "}
                    <small className="text-[18px] ml-2 text-slate-400">
                      CEO
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Briefly describe the CEO's experience and background in
                      the construction industry
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Outline their responsibilities, such as overseeing the
                      company's strategic direction, client relations, and
                      overall management.
                    </small>
                  </li>
                </div>

                {/*------Team------2----*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    2. Chief Operating Officer (COO):{" "}
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:{" "}
                    <small className="text-[18px] ml-2 text-slate-400">
                      COO's
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Highlight the COO's experience in project management and
                      operations.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Explain their role in managing day-to-day operations,
                      ensuring project efficiency, and coordinating between
                      departments.
                    </small>
                  </li>
                </div>

                {/*------Team------3----*/}
                <div className="py-4">
                  <h3 className="text-[24px] text-teal-700">
                    2. Chief Operating Officer (COO):{" "}
                  </h3>
                  <li className="text-[22px] text-black py-1">
                    Name:{" "}
                    <small className="text-[18px] ml-2 text-slate-400">
                      CFO's
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Background:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Provide an overview of the CFO's expertise in financial
                      planning and analysis.
                    </small>
                  </li>
                  <li className="text-[22px] text-black py-1">
                    Role:
                    <small className="text-[18px] ml-2 text-slate-400">
                      Describe their responsibilities in financial management,
                      budgeting, and cost control.
                    </small>
                  </li>
                </div>
              </div>
            </div>
            <hr className="py-4 mt-6" />
          </div>

          {/*--------Details-------5--------*/}
          <div>
            <div>
              {/*--------Middle------text-----Start-----*/}
              <div className="flex items-center justify-center">
                <div className="py-16 text-black">
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                    Client testimonials are a powerful way to build trust and
                    credibility for
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                    your construction company. They provide prospective clients
                    with insights into
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                    your company's work quality, professionalism, and customer
                    service. Here
                  </p>
                  <p className="text-2xl md:text-3xl lg:text-3xl">
                    are some examples of how to present client testimonials:
                  </p>
                </div>
              </div>
              {/*--------Middle------text-----Start-----*/}

              <h1 className="text-3xl py-3 text-sky-900">
                <i className="fa-regular fa-circle-check mr-2"></i>Format for
                Client Testimonials
              </h1>
              <div className="flex  gap-10 flex-col lg:flex-row py-6">
                {/*------Testimonials-----1-----*/}
                <div className="flex-1">
                  <h3 className="text-[22px] text-black py-1">
                    1. Client Name and Position (Optional)
                  </h3>
                  <li className="text-[18px] text-slate-400">
                    Company/Project Name (if applicable)
                  </li>
                </div>
                {/*------Testimonials-----2-----*/}
                <div className="flex-1">
                  <h3 className="text-[22px] text-black py-1">
                    2. Testimonial
                  </h3>
                  <li className="text-[18px] text-slate-400">
                    The testimonial should be a direct quote from the client,
                    expressing their satisfaction with your services.
                  </li>
                </div>
                {/*------Testimonials-----3-----*/}
                <div className="flex-1">
                  <h3 className="text-[22px] text-black py-1">
                    3. Project Details (Optional)
                  </h3>
                  <li className="text-[18px] text-slate-400">
                    A brief description of the project, such as the type, scope,
                    and any unique aspects.
                  </li>
                </div>
              </div>
            </div>
            <hr className="py-4 mt-6" />
          </div>

          {/*--------Details-------6--------*/}
          <div>
            {/*--------Middle------text-----Start-----*/}
            <div className="flex items-center justify-center">
              <div className="py-16 text-black">
                <p className="text-2xl md:text-3xl lg:text-3xl">
                  Highlighting a construction company's community involvement
                  can showcase
                </p>
                <p className="text-2xl md:text-3xl lg:text-3xl">
                  the company's commitment to social responsibility and local
                  engagement.
                </p>
                <p className="text-2xl md:text-3xl lg:text-3xl">
                  This can build a positive reputation and foster trust with
                  clients, partners,
                </p>
                <p className="text-2xl md:text-3xl lg:text-3xl">
                  and the broader community. Here's a guide on how to present
                  your company's <br></br> community involvement
                </p>
              </div>
            </div>
            {/*--------Middle------text-----End-----*/}

            <h1 className="text-3xl py-3 text-sky-900">
              <i className="fa-regular fa-circle-check mr-2"></i> Key Areas of
              Community Involvement
            </h1>
            {/*---------Community Involvement-------1------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                1. Local Charities and Non-Profit
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Supporting local charities through donations, sponsorships, or
                volunteer work.
              </li>
            </div>
            {/*---------Community Involvement-------2------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                2. Educational Initiatives
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Sponsoring scholarships or providing funding for educational
                programs in construction and related fields.
              </li>
              <li className="text-[18px] ml-2 text-slate-400">
                Offering internships, apprenticeships, or mentoring programs for
                students interested in the construction industry.
              </li>
            </div>
            {/*---------Community Involvement-------3------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                3. Community Development Projects
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Participating in or leading community development projects, such
                as building affordable housing, community centers, or public
                infrastructure.
              </li>
              <li className="text-[18px] ml-2 text-slate-400">
                Collaborating with local government and organizations on
                projects that improve community spaces.
              </li>
            </div>
            {/*---------Community Involvement-------4------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                4. Environmental Sustainability
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Implementing green building practices and promoting
                sustainability in construction projects.
              </li>
              <li className="text-[18px] ml-2 text-slate-400">
                Engaging in local environmental initiatives, such as tree
                planting or clean-up events.
              </li>
            </div>
            {/*---------Community Involvement-------5------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                5. Employee Volunteer Programs
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Encouraging employees to volunteer in the community by providing
                paid volunteer days or organizing company-wide volunteer events.
              </li>
              <li className="text-[18px] ml-2 text-slate-400">
                Supporting causes that are important to employees and involving
                them in the decision-making process for community initiatives.
              </li>
            </div>
            {/*---------Community Involvement-------6------*/}
            <div className="py-4">
              <h3 className="text-[22px] text-black py-1">
                6. Disaster Relief and Recovery
              </h3>
              <li className="text-[18px] ml-2 text-slate-400">
                Providing support during natural disasters or emergencies, such
                as offering construction services for rebuilding efforts.
              </li>
              <li className="text-[18px] ml-2 text-slate-400">
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
