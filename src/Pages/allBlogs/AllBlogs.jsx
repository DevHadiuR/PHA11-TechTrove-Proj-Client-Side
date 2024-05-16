import { useQuery } from "@tanstack/react-query";
import AllBLogBanner from "../../components/allBLogBanner/AllBLogBanner";
import AllOfTheBlogs from "../../components/allOfTheBlogs/AllOfTheBlogs";

import DropdownAndSearch from "../../components/dropdown&search/DropdownAndSearch";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";

const AllBlogs = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [search, setSearch] = useState("");

  // fetch blogs by category and search
  const { data: blogs = [] } = useQuery({
    queryFn: () => getData(),
    queryKey: ["allBlogs", selectedCategory, search],
  });

  const getData = async () => {
    const { data } = await axiosSecure(
      `/allBlogs?category=${selectedCategory}&search=${search}`
    );

    return data;
  };

  const handleDropDownCategory = (entry) => {
    setSelectedCategory(entry);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.searchTitle.value;
    setSearch(value);
  };

  return (
    <section>
      <div className="relative z-0">
        <AllBLogBanner></AllBLogBanner>
      </div>
      {/* dropdown and search blog main div */}
      <div>
        <DropdownAndSearch
          handleSearch={handleSearch}
          handleDropDownCategory={handleDropDownCategory}
        ></DropdownAndSearch>
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
