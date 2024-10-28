import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { singInUser, singInWidthGoogle } = useContext(AuthContext);
  const [singInError, setSingInError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //-----Navigate----By---Default----Homepage-----
  const navigate = useNavigate();

  const handelSumitLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //-----------------
    setSingInError("");
    setSuccess("");

    //-------SingIn------user------
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login SuccessFully");
        //-----Login------or-----Input--Fild----Reset----
        e.target.reset();
        //-----User----Login fater Default home page-----
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setSingInError(error.message);
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
              src="https://i.ibb.co/dQMwg11/login-1.webp"
              className="w-full h-[550px] object-cover rounded-lg border-2"
            />
          </div>
          {/*------------Stape--------2--------*/}
          <div className="w-full">
            <div className="card bg-[#8b9db5] w-full ">
              <form onSubmit={handelSumitLogin} className="card-body">
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
                    className="input input-bordered bg-white text-black text-xl"
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
                    type={showPassword ? "password" : "Text"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input input-bordered bg-white text-black text-xl"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute ml-96 mt-14 cursor-pointer text-black font-bold text-xl"
                  >
                    {showPassword ? "Hide" : "show"}
                  </span>
                  <label className="label">
                    <a
                      href="#"
                      className="link hover:text-cyan-700 text-lg text-black font-medium "
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-sky-800 text-xl text-white border-0">
                    Login
                  </button>
                </div>
                {singInError && <p>Rite Type A Password </p>}
                {success && <p>Login SuccessFully</p>}

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
                <p className="text-lg text-center py-3 text-black">
                  Dont have an account ?{" "}
                  <Link
                    to="/registation"
                    className="text-xl underline text-rose-600 font-bold"
                  >
                    Register
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

export default Login;
