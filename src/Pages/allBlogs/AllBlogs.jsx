import { useQuery } from "@tanstack/react-query";
import AllBLogBanner from "../../components/allBLogBanner/AllBLogBanner";
import AllOfTheBlogs from "../../components/allOfTheBlogs/AllOfTheBlogs";

import DropdownAndSearch from "../../components/dropdown&search/DropdownAndSearch";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const AllBlogs = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState(null);

  // fetch all the blogs
  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allBlogs"],
  });

  const getData = async () => {
    const { data } = await axiosSecure("/allBlogs");
    return data;
  };

  const handleDropDownCategory = (entry) => {
    console.log(entry);
    setSelectedCategory(entry);
  };

  const filteredData = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <section>
      <div className="relative z-0">
        <AllBLogBanner></AllBLogBanner>
      </div>
      {/* dropdown and search blog main div */}
      <div>
        <DropdownAndSearch
          handleDropDownCategory={handleDropDownCategory}
        ></DropdownAndSearch>
      </div>
      {/* all of the blogs */}
      <div className="mt-14 ">
        {filteredData.map((blog) => (
          <AllOfTheBlogs key={blog._id} blog={blog}></AllOfTheBlogs>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
