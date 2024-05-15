import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/navbar/NavBar";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddBlog = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { email } = user || {};
  // use hook for form
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm();

  // submition

  const { mutate } = useMutation({
    mutationFn: (data) => {
      axiosSecure
        .post("/allBlogs", data)
        .then((value) => {
          const data = value.data;
          console.log(data);
          return data;
        })
        .catch((err) => console.log(err));
    },
    onSuccess: () => {
      toast.success("Successfully Added The Blog");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <section className="relative z-0">
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://source.unsplash.com/random/1920x1080/?technology)",
        }}
      >
        <Helmet>
          <title>Add Blogs Page | TechTrove</title>
        </Helmet>
        <div className="hero-overlay bg-opacity-45"></div>
        <div className="hero-content mt-32">
          <div className="hero min-h-screen ">
            <div className="hero-content flex flex-col  gap-6">
              <div className="text-center w-full flex-1 ">
                <h1 className="text-4xl md:text-5xl font-bold text-white opacity-85  ">
                  Your Gateway to Sharing Insights
                </h1>
                <p className="py-6 w-full md:w-[80%] mx-auto  text-lg md:text-xl text-white opacity-85">
                  Welcome to the Blog Portal, your dedicated space for knowledge
                  exchange and thought leadership. This is where your insights
                  come alive and your expertise reaches a global audience. Dive
                  into the art of storytelling and enrich our diverse tapestry
                  of content by contributing your original blog posts. Whether
                  you’re illuminating industry trends, offering life hacks, or
                  sharing personal journeys, your voice is valuable here.
                  Connect with like-minded readers and writers, and become a
                  part of a community that values growth, learning, and the
                  power of words. Embrace this opportunity to influence,
                  inspire, and inform. Craft your narrative, hit publish, and
                  watch as your ideas take flight across the digital landscape.
                </p>
              </div>
              <div className="card flex-1 w-full ">
                <div className=" rounded-2xl">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="card-body  p-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            Title_Name
                          </span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          placeholder="Enter Your Title_Name"
                          className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                          {...register("title", { required: true })}
                        />
                        {errors.title && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            Image
                          </span>
                        </label>
                        <input
                          type="url"
                          name="img"
                          placeholder="Enter Your Image URL"
                          className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                          {...register("img", { required: true })}
                        />
                        {errors.img && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>

                      <div className="form-control col-span-1 md:col-span-2">
                        <label id="shortDescription" className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            Short_Description
                          </span>
                        </label>
                        <textarea
                          id="shortDescription"
                          rows="5"
                          type="text"
                          name="shortDescription"
                          placeholder="Enter Your Short Description"
                          className="input-accent text-white text-lg border p-3 rounded-2xl  border-[#ffff] bg-transparent my-5"
                          {...register("shortDescription", { required: true })}
                        />
                        {errors.shortDescription && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            category_Name
                          </span>
                        </label>
                        <select
                          name="category"
                          id="category"
                          className="select select-accent text-white text-lg  border-[#ffff] bg-transparent"
                          {...register("category", { required: true })}
                        >
                          <option className="bg-[#512B58] text-xl ">
                            Latest Trends
                          </option>
                          <option className="bg-[#512B58] text-xl">
                            AI and Machine Learning
                          </option>
                          <option className="bg-[#512B58] text-xl">
                            Cybersecurity
                          </option>
                          <option className="bg-[#512B58] text-xl">
                            Gaming
                          </option>
                          <option className="bg-[#512B58] text-xl">
                            AI and Machine Learning
                          </option>
                          <option className="bg-[#512B58] text-xl">
                            Software and Apps
                          </option>
                        </select>

                        {errors.category && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            Blogger_Email
                          </span>
                        </label>
                        <input
                          type="text"
                          name="bloggerEmail"
                          defaultValue={email}
                          readOnly
                          placeholder="Enter Your Blogger Email"
                          className="input input-accent text-white text-lg  border-[#ffff] bg-transparent"
                          {...register("bloggerEmail", { required: true })}
                        />
                        {errors.bloggerEmail && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="form-control col-span-1 md:col-span-2">
                        <label id="longDescription" className="label">
                          <span className="label-text text-white text-xl font-semibold">
                            Long_Description
                          </span>
                        </label>
                        <textarea
                          id="longDescription"
                          rows="8"
                          type="text"
                          name="longDescription"
                          placeholder="Enter Your Long_Description"
                          className="input-accent text-white text-lg border p-3 rounded-2xl  border-[#ffff] bg-transparent my-5"
                          {...register("longDescription", { required: true })}
                        />
                        {errors.longDescription && (
                          <span className="mt-2 text-yellow-300">
                            This field is required
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-control mt-10 mb-6">
                      <button
                        type="submit"
                        className="btn bg-transparent text-2xl hover:bg-[#512B58] text-white transition-all"
                      >
                        ADD ITEM
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddBlog;
