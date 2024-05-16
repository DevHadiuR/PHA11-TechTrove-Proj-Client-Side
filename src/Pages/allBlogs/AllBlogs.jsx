import { useQuery } from "@tanstack/react-query";
import AllBLogBanner from "../../components/allBLogBanner/AllBLogBanner";
import AllOfTheBlogs from "../../components/allOfTheBlogs/AllOfTheBlogs";

import DropdownAndSearch from "../../components/dropdown&search/DropdownAndSearch";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllBlogs = () => {
  const axiosSecure = useAxiosSecure();

  // fetch all the blogs
  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allBlogs"],
  });

  const getData = async () => {
    const { data } = await axiosSecure("/allBlogs");
    return data;
  };
  return (
    <section>
      <div className="relative z-0">
        <AllBLogBanner></AllBLogBanner>
      </div>
      {/* dropdown and search blog main div */}
      <div>
        <DropdownAndSearch></DropdownAndSearch>
      </div>
      {/* all of the blogs */}
      <div className="mt-14 ">
        {blogs.map((blog) => (
          <AllOfTheBlogs key={blog._id} blog={blog}></AllOfTheBlogs>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
