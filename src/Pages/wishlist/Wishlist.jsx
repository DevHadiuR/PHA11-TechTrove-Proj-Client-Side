import { Helmet } from "react-helmet-async";
import Wishlistbanner from "../../components/wishlistBanner/Wishlistbanner";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const Wishlist = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;

  const getWishlist = async (email) => {
    if (email) {
      const { data } = await axiosSecure(
        `/allWishlist?wishlistAddedUserEmail=${email}`
      );

      return data;
    }
    return [];
  };

  const { data: blogs = [], refetch } = useQuery({
    queryFn: () => getWishlist(email),
    queryKey: ["allWishlist", email],
    enabled: !!email,
  });

  //   remove blog part with tanstack query

  const handleRemoveWishlist = (removingId, wishlistAddedUserEmail) => {
    if (wishlistAddedUserEmail !== email) {
      toast.error("Cannot Delete Others wish!");
      return;
    }
    console.log(removingId, wishlistAddedUserEmail);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/allWishlist?removingId=${removingId}`)
          .then((data) => {
            const value = data.data;

            if (value.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your Comment has been deleted.",
                icon: "success",
              });
            }
            console.log(value);
          });
      }
    });
  };

  return (
    <section>
      <Helmet>
        <title>My Wishlist Page | TechTrove</title>
      </Helmet>
      <div>
        <Wishlistbanner></Wishlistbanner>
      </div>

      <div className="mt-14">
        {blogs.map((blog) => (
          <div key={blog._id} className="mt-8">
            <div className="container grid grid-cols-12 mx-auto bg-[#F1F3F4] rounded-xl">
              <div
                className="bg-no-repeat bg-gray-400 md:bg-transparent  bg-cover  col-span-full md:col-span-5 row-span-full"
                style={{
                  backgroundImage: `url(${blog.img})`,
                  backgroundPosition: "center center",
                  backgroundBlendMode: "multiply",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="flex flex-col p-6 col-span-full row-span-full md:col-span-7 lg:p-10 ml-0 md:ml-8">
                <div className="flex justify-start">
                  <span
                    className={`px-3 py-2 mb-5 rounded-full
                     ${
                       blog.category === "Latest Trends" &&
                       "text-blue-600 bg-blue-100/90"
                     } ${
                      blog.category === "AI and Machine Learning" &&
                      "text-green-600 bg-green-100/90"
                    } ${
                      blog.category === "Cybersecurity" &&
                      "text-red-600 bg-red-100/90"
                    } ${
                      blog.category === "Gaming" &&
                      "text-yellow-600 bg-yellow-100/90"
                    } ${
                      blog.category === "Software and Apps" &&
                      "text-purple-600 bg-purple-100/90"
                    } `}
                  >
                    {blog.category}
                  </span>
                </div>
                <h1 className="text-3xl text-white opacity-90 md:text-black md:opacity-100 font-semibold ">
                  {blog.title}
                </h1>
                <p className="flex-1 pt-2 text-white opacity-90 md:text-black md:opacity-100">
                  {blog.shortDescription}
                </p>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-400 text-white  md:text-black "
                >
                  <Link to="/blogDetails">
                    <span className="text-white opacity-90 md:text-black md:opacity-100">
                      Read more
                    </span>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <div className="flex items-center gap-5 pt-2">
                  <Link to={`/wishlistBlogDetails/${blog._id}`}>
                    <Button outline gradientDuoTone="purpleToBlue">
                      Details
                    </Button>
                  </Link>

                  <Button
                    onClick={() =>
                      handleRemoveWishlist(
                        blog._id,
                        blog.wishlistAddedUserEmail
                      )
                    }
                    gradientDuoTone="purpleToPink"
                  >
                    Remove Wish
                  </Button>
                </div>
              </div>
              z
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
