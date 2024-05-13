import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import NavBar from "../../Shared/navbar/NavBar";

import bg2 from "../../assets/authenticationBG/log2.jpg";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser } = useAuth();

  const handleError = (er) => {
    toast.error(er, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, url } = data;

    if (!/@.*\.com$/.test(email)) {
      handleError("Email must contain with '.com' at the end!");
      return;
    } else if (!password.length > 6) {
      handleError("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      handleError("Password must contain at least one uppercase letter!");
      return;
    } else if (!/[a-z]/.test(password)) {
      handleError("Password must contain at least one lowercase letter!");
      return;
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      handleError("Password must contain at least one special character!");
      return;
    } else if (!/\d.*\d/.test(password)) {
      handleError("Password must contain at least 2 digit numbers!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "Congratulation!",
          text: "You Have Successfully Registered!",
          icon: "success",
        });
        updateProfile(user, {
          displayName: name,
          photoURL: url,
        });

        reset();
      })
      .catch((error) => {
        const err = error.message
          .split("/")
          .pop()
          .replace(/^\w/, (c) => c.toUpperCase());
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: err,
        });
      });
  };

  return (
    <section className="relative z-0">
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>
      <div className="hero min-h-screen bg-[#79BAC1]  py-36 ">
        <Helmet>
          <title>Register Page | TechTrove</title>
        </Helmet>
        <div className="hero-content flex   gap-5 flex-col lg:flex-row  w-full">
          <div className=" flex-1 w-full rounded-xl ">
            <div
              className="hero rounded-xl"
              style={{
                backgroundImage: `url(${bg2})`,
              }}
            >
              <div className="hero-overlay bg-opacity-40 rounded-xl"></div>
              <div className="hero-content text-center text-neutral-content  ">
                <div className="max-w-lg space-y-10 my-10">
                  <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white">
                    &quot;Get Started: Create Your Account&quot;
                  </h1>
                  <p className="mb-5">
                    &quot;Embark on your technological journey by registering
                    for an account today. Take the first step towards accessing
                    a vast repository of knowledge, connecting with a diverse
                    community of tech enthusiasts, and staying informed about
                    the latest innovations in the industry. With your
                    registration, you&apos;ll unlock a plethora of exclusive
                    features designed to enhance your experience, including
                    personalized content recommendations tailored to your
                    interests, engaging discussions with fellow members, access
                    to premium resources, and the opportunity to contribute your
                    insights and expertise to our growing platform. Join us in
                    shaping the future of technology and be a part of our
                    dynamic community committed to fostering learning,
                    collaboration, and innovation.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card flex-1 w-full ">
            <div className=" bg-[#2A7886] rounded-2xl">
              <h1 className="text-center mb-2 mt-2 border-b-2 w-[70%] border-[#ffff] mx-auto pb-6 text-4xl font-semibold font-dm text-white">
                REGISTER NOW!
              </h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body  text-white"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    className="input text-black input-bordered border-[#512B58]"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="mt-2 text-red-800">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">URL</span>
                  </label>
                  <input
                    type="url"
                    name="url"
                    placeholder="Enter Your Photo URL"
                    className="input text-black input-bordered border-[#543A3A]"
                    {...register("url", { required: true })}
                  />
                  {errors.url && (
                    <span className="mt-2 text-red-800">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    className="input text-black input-bordered border-[#543A3A]"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="mt-2 text-red-800">
                      This field is required
                    </span>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input text-black input-bordered border-[#543A3A]"
                    {...register("password", { required: true })}
                  />
                  <span
                    onClick={handleShowPassword}
                    className="absolute bottom-3 right-5 text-2xl cursor-pointer"
                  >
                    {showPass ? (
                      <IoEye className="text-black" />
                    ) : (
                      <IoMdEyeOff className="text-black" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <span className="mt-2 text-red-800">
                    This field is required
                  </span>
                )}
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-transparent text-lg hover:bg-[#512B58] text-white transition-all"
                  >
                    REGISTER
                  </button>
                  <ToastContainer />
                </div>
              </form>
              <div className="mb-5">
                <h1 className="text-center text-white text-lg">
                  Already Have An Account ? Please{" "}
                  <Link className="text-blue-400 underline" to="/login">
                    Login
                  </Link>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
