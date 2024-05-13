import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../Shared/navbar/NavBar";

import bg3 from "../../assets/authenticationBG/log3.jpg";

const Login = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();

  const { loginUser, googleProvider, gitHubProvider, twitterProvider } =
    useAuth();

  const [showPass, setShowPass] = useState(false);
  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    loginUser(email, password)
      .then(() => {
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });

        // navigate(location?.state ? location.state : "/");

        // reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleProvider()
      .then(() => {
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });
        // navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };
  const handleGithubLogin = () => {
    gitHubProvider()
      .then(() => {
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });
        // navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };
  const handleTwitterLogin = () => {
    twitterProvider()
      .then(() => {
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });
        // navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };

  return (
    <section className="relative z-0">
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>
      <div
        className="hero min-h-screen relative z-0 "
        style={{
          backgroundImage: `url(${bg3})`,
        }}
      >
        <Helmet>
          <title>Login Page | TechTrove</title>
        </Helmet>
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content mt-36">
          <div className="hero min-h-screen ">
            <div className="hero-content flex flex-col lg:flex-row-reverse gap-10">
              <div className="text-center w-full flex-1 ">
                <h1 className="text-4xl md:text-6xl font-bold text-white opacity-95 font-dm">
                  Welcome Back!
                </h1>
                <p className="py-6 font-serif text-lg text-white opacity-90">
                &quot;Sign in to access your account and explore our latest tech
                  blogs. Stay updated with cutting-edge trends, insightful
                  articles, and expert opinions from our community of tech
                  enthusiasts.&quot;
                </p>
              </div>
              <div className="card flex-1 w-full ">
                <div className=" rounded-2xl">
                  <h1 className="text-center mt-2  w-[70%]  mx-auto  text-5xl font-semibold font-dm text-white opacity-95]">
                    LOGIN NOW!
                  </h1>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body font-serif"
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white text-xl">
                          Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="mt-2 text-yellow-300">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="form-control relative">
                      <label className="label">
                        <span className="label-text text-white text-xl">
                          Password
                        </span>
                      </label>
                      <input
                        type={showPass ? "text" : "password"}
                        name="password"
                        placeholder="Enter Your Password"
                        className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                        {...register("password", { required: true })}
                      />
                      <span
                        onClick={handleShowPassword}
                        className="absolute bottom-3 right-5 text-2xl cursor-pointer"
                      >
                        {showPass ? (
                          <IoEye className="text-white" />
                        ) : (
                          <IoMdEyeOff className="text-white" />
                        )}
                      </span>
                    </div>
                    {errors.password && (
                      <span className="mt-2 text-yellow-300">
                        This field is required
                      </span>
                    )}
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn bg-transparent text-xl hover:bg-[#512B58] text-white transition-all"
                      >
                        LOGIN
                      </button>
                    </div>
                  </form>
                  <p className="text-white text-xl text-center font-semibold">
                    OR
                  </p>
                  <div className="text-white border-t-2 pt-5 mt-6 w-[60%] mx-auto ">
                    <div className="flex justify-center items-center mb-5 gap-6">
                      <span
                        onClick={handleGoogleLogin}
                        className=" border-2 p-2 border-white rounded-full"
                      >
                        <FcGoogle className="text-2xl cursor-pointer hover:scale-125 transition-all" />
                      </span>
                      <span
                        onClick={handleGithubLogin}
                        className="border-2 p-2 border-white rounded-full"
                      >
                        <FaGithub className="text-2xl cursor-pointer hover:scale-125 transition-all" />
                      </span>
                      <span
                        onClick={handleTwitterLogin}
                        className="border-2 p-2 border-white rounded-full"
                      >
                        <FaTwitter className="text-2xl cursor-pointer hover:scale-125 transition-all text-blue-500" />
                      </span>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h1 className="text-center text-lg font-serif text-white">
                      New To This Website ? Please{" "}
                      <Link
                        className="text-blue-500 underline cursor-pointer hover:scale-110 transition-all"
                        to="/register"
                      >
                        Register
                      </Link>{" "}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
