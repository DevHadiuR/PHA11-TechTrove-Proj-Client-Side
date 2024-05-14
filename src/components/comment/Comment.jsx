import { Button } from "flowbite-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Comment = ({ blogId, bloggerEmail }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { displayName, photoURL, email } = user || {};

  //   using tanstack for post data
  const { mutate } = useMutation({
    mutationFn: (postData) => {
      axiosSecure
        .post("/allComments", postData)
        .then((value) => {
          const data = value.data;
          console.log(data);
          return data;
        })
        .catch((err) => console.log(err));
    },
    onSuccess: () => {
      toast.success("Successfully Commented");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (bloggerEmail === email) {
    //   toast.error("Can not comment on own blog!");

    //   return;
    // }

    const userComment = e.target.comment.value;
    const postData = {
      userComment,
      displayName,
      photoURL,
      blogId,
    };
    mutate(postData);
    e.target.reset();
  };

  return (
    <div className="mt-40 container mx-auto">
      {/* comment section */}
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className=" px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Comments (20)
            </h2>
          </div>

          <div className="avatar mb-4">
            <div className="w-14 rounded-full">
              <img src={photoURL} referrerPolicy="no-referrer" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
              {email === bloggerEmail && (
                <input
                  type="text"
                  placeholder="Can not comment on own blog"
                  className="input input-bordered w-full max-w-sm text-xl "
                  disabled
                />
              )}

              {email !== bloggerEmail && (
                <textarea
                  id="comment"
                  rows="6"
                  name="comment"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              )}
            </div>
            {bloggerEmail !== email && (
              <div className="flex justify-end my-6">
                <Button type="submit" gradientDuoTone="purpleToBlue" pill>
                  Comment
                </Button>
              </div>
            )}
          </form>

          <article className="p-6 mb-3 text-base bg-white border-t border-gray-300 dark:border-gray-700 dark:bg-gray-900">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  <img
                    referrerPolicy="no-referrer"
                    className="mr-2 w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Bonnie Green"
                  />
                  Bonnie Green
                </p>
              </div>
              <div>
                <button>
                  <RiDeleteBin6Line className="text-xl" />
                </button>
              </div>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
              The article covers the essentials, challenges, myths and stages
              the UX designer should consider while creating the design
              strategy.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Comment;
