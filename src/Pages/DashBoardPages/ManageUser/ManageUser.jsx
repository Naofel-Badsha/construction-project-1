const ManageUser = () => {
  return (
    <div>
      {/*----------User-----------*/}
      <div>
        <h1 className="text-2xl text-sky-800">Manage User</h1>
        <h4 className="text-xl text-slate-500 py-1">
          Hi, Samantha. Wellcome back to Manage User!
        </h4>
      </div>
      {/*----------User-----------*/}

      {/*-----------Manage-----User------Stert--------*/}
      <div className="py-10">
        <div className="overflow-x-auto">
          <table className=" w-full border-4 border-rose-600 table-xl text-black">
            <thead>
              <tr className="border-b-2 border-sky-900">
                <th className="text-xl text-sky-800">Id</th>
                <td className="text-xl text-sky-800">Name</td>
                <td className="text-xl text-sky-800">Job</td>
                <td className="text-xl text-sky-800">company</td>
                <td className="text-xl text-sky-800">location</td>
                <td className="text-xl text-sky-800">Last Login</td>
                <td className="text-xl text-sky-800">Favorite Color</td>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b-2 border-sky-900">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
                <th>1</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>United States</td>
                <td>12/5/2020</td>
                <td>Purple</td>
                <th>2</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Carroll Group</td>
                <td>China</td>
                <td>8/15/2020</td>
                <td>Red</td>
                <th>3</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>4</th>
                <td>Marjy Ferencz</td>
                <td>Office Assistant I</td>
                <td>Rowe-Schoen</td>
                <td>Russia</td>
                <td>3/25/2021</td>
                <td>Crimson</td>
                <th>4</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>5</th>
                <td>Yancy Tear</td>
                <td>Community Outreach Specialist</td>
                <td>Wyman-Ledner</td>
                <td>Brazil</td>
                <td>5/22/2020</td>
                <td>Indigo</td>
                <th>5</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>6</th>
                <td>Irma Vasilik</td>
                <td>Editor</td>
                <td>Wiza, Bins and Emard</td>
                <td>Venezuela</td>
                <td>12/8/2020</td>
                <td>Purple</td>
                <th>6</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>7</th>
                <td>Meghann Durtnal</td>
                <td>Staff Accountant IV</td>
                <td>Schuster-Schimmel</td>
                <td>Philippines</td>
                <td>2/17/2021</td>
                <td>Yellow</td>
                <th>7</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>8</th>
                <td>Sammy Seston</td>
                <td>Accountant I</td>
                <td>OHara, Welch and Keebler</td>
                <td>Indonesia</td>
                <td>5/23/2020</td>
                <td>Crimson</td>
                <th>8</th>
              </tr>
              <tr className="border-b-2 border-sky-900">
                <th>9</th>
                <td>Lesya Tinham</td>
                <td>Safety Technician IV</td>
                <td>Turner-Kuhlman</td>
                <td>Philippines</td>
                <td>2/21/2021</td>
                <td>Maroon</td>
                <th>9</th>
              </tr>
            </tbody>

            <tfoot className="border-t-2 border-sky-900">
              <tr>
                <th className="text-xl text-sky-800">Id</th>
                <td className="text-xl text-sky-800">Name</td>
                <td className="text-xl text-sky-800">Job</td>
                <td className="text-xl text-sky-800">company</td>
                <td className="text-xl text-sky-800">location</td>
                <td className="text-xl text-sky-800">Last Login</td>
                <td className="text-xl text-sky-800">Favorite Color</td>
                <th className="text-xl text-sky-800"></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
