import { useQuery } from "@tanstack/react-query";
import NavBar from "../../Shared/navbar/NavBar";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BlogDetails = () => {
  const param = useParams();
  const id = param.id;

  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryFn: () => getData(),
    queryKey: ["perBlogDetails"],
  });

  const getData = async () => {
    const { data } = await axiosSecure(`/allBlogs/${id}`);

    return data;
  };

  return (
    <section className="relative z-0">
      <div className="absolute w-full top-0 z-50    bg-transparent ">
        <NavBar></NavBar>
      </div>

      <div
        className="hero min-h-[570px]"
        style={{
          backgroundImage: `url(${data.img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-3xl md:text-6xl font-bold">
              {data.title}
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-medium">
              {data.shortDescription}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 w-[97%] mx-auto">
        <h1 className="text-xl font-medium">{data.longDescription}</h1>
      </div>
    </section>
  );
};

export default BlogDetails;
