import { useQuery } from "@tanstack/react-query";
import NavBar from "../../Shared/navbar/NavBar";
import { Link, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Comment from "../../components/comment/Comment";
import { Button } from "flowbite-react";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const BlogDetails = () => {
  const { user } = useAuth();
  const { email } = user || {};
  const param = useParams();
  const id = param.id;

  const axiosSecure = useAxiosSecure();

  const { data: blog = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["perBlogDetails", id],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/allBlogs/${id}`);

    return data;
  };

  const {
    img,
    title,
    shortDescription,
    longDescription,
    category,
    bloggerEmail,
    _id,
  } = blog;

  return (
    <section className="relative z-0">
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>

      <div
        className="hero min-h-[570px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl md:text-6xl font-bold text-white opacity-85">
              {title}
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-medium">
              {shortDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 mb-8 md:ml-5">
        <span
          className={`px-8 md:px-10 text-md md:text-lg font-medium py-2  rounded-full
                     ${
                       blog.category === "Latest Trends" &&
                       "text-blue-600 bg-blue-100/90"
                     } ${
            blog.category === "AI and Machine Learning" &&
            "text-green-600 bg-green-100/90"
          } ${
            blog.category === "Cybersecurity" && "text-red-600 bg-red-100/90"
          } ${
            blog.category === "Gaming" && "text-yellow-600 bg-yellow-100/90"
          } ${
            blog.category === "Software and Apps" &&
            "text-purple-600 bg-purple-100/90"
          } `}
        >
          {category}
        </span>
      </div>
      <div className="mt-5 w-[97%] mx-auto ">
        <h1 className="text-xl font-medium">{longDescription}</h1>
      </div>
      <div
        className={`flex justify-end mr-10 mt-20 ${
          email !== bloggerEmail && "hidden"
        } `}
      >
        <Link to={`/updateBlog/${_id}`}>
          <Button size="md" gradientMonochrome="purple" pill>
            <MdOutlineBrowserUpdated className="text-xl mr-1" />{" "}
            <span className="text-md">Update Blog</span>
          </Button>
        </Link>
      </div>
      <div>
        <Comment bloggerEmail={bloggerEmail} blogId={id}></Comment>
      </div>
    </section>
  );
};

export default BlogDetails;
