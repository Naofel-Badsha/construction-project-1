import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Registation = () => {
  const { createUser, singInWidthGoogle } = useContext(AuthContext);
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

  //-----------SingInWithGoogle-------
  const handleGoogleSingIn = () => {
    singInWidthGoogle()
      .then((result) => {
        console.log(result.user);
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
              className="w-full h-[600px] object-cover rounded-lg border-2"
            />
          </div>
          {/*------------Stape--------1--------*/}
          <div className="w-full">
            <div className="card bg-[#8b9db5] w-full ">
              <form onSubmit={handelSumitRegistation} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black font-bold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input input-bordered bg-white text-xl"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered bg-white text-xl"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl text-black font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type={showPassword ? "text" : "Password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered relative bg-white text-xl"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer absolute left-96 text-xl text-black mt-14"
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
                    <p className="text-xl text-black font-medium">
                      Please Accept our Terms and Conditions
                    </p>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-800 text-xl text-white border-0">
                    Registation
                  </button>
                </div>
                {registerError && <p>{registerError}</p>}
                {success && <p>{success}</p>}

                <div className="flex items-center justify-center py-4">
                  <div className="w-40 h-[1px] m-auto bg-white"></div>
                  {/*---------Google-----Login-------*/}
                  <div
                    onClick={handleGoogleSingIn}
                    className="w-16 h-16 m-auto border-2 rounded-full"
                  >
                    <img
                      src="https://i.ibb.co.com/NxJDLSr/Google-Loging.png"
                      className="cursor-pointer object-cover"
                    />
                  </div>
                  <div className="w-40 h-[1px] m-auto bg-white"></div>
                </div>


                <p className="text-lg text-center text-black">
                Allready have an account ? Please{" "}
                <Link
                  to="/login"
                  className="text-xl underline text-rose-600 font-bold"
                >
                  Login
                </Link>
              </p>
              </form>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
