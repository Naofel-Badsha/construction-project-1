import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registation = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //--------Navigate-----user-------
  const navigate = useNavigate();

  const handelSumitRegistation = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(accepted, name, email, password);
    //-------Reset----error------
    setRegisterError("");
    setSuccess("");
    //----chacked----Password-----
    if (password.length < 6) {
      setRegisterError(" Password should be at least 6 characters");
      return;
    }
    //----Speactial---Character----chacked----Password-----
    else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one Uppercase Charracters"
      );
      return;
    }
    //----Acceptes-----Terms----and-----Conditions--------
    else if (!accepted) {
      setRegisterError("Please accepted Terms and Conditions!");
      return;
    }

    //--------create-----a---new---user-----
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        //-----Login------or-----Input--Fild----Reset----
        e.target.reset();
        //-----User----Login fater Default home page-----
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <div className="container m-auto">
        <div className="flex items-center gap-10 flex-col lg:flex-row py-16">
          {/*------------Stape--------1--------*/}
          <div className="w-full">
            <img
              src="https://i.ibb.co/Y2TF7Rc/reg-1.webp"
              className="w-full rounded-lg"
            />
          </div>
          {/*------------Stape--------1--------*/}
          <div className="w-full">
            <div className="card bg-base-100 w-full ">
              <form onSubmit={handelSumitRegistation} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "Password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered relative"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute left-96 mt-14"
                  >
                    {showPassword ? "Show" : "Hide"}
                  </span>
                  <div className="flex items-center gap-3 mt-5 ">
                    <input
                      type="checkbox"
                      name="terms"
                      id="terms"
                      className="w-[25px] h-[25px] cursor-pointer"
                    />
                    <p className="text-xl">
                      Please Accept our Terms and Conditions
                    </p>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-800 text-xl text-white">
                    Registation
                  </button>
                </div>

                {registerError && <p>{registerError}</p>}
                {success && <p>{success}</p>}
              </form>
              <p className="text-lg text-center py-3">
                Allready have an account ? Please{" "}
                <Link to="/login" className="text-xl underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
