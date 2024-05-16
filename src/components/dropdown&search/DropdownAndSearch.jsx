("use client");
import { Dropdown } from "flowbite-react";

const DropdownAndSearch = () => {
  return (
    <div className="mt-24 flex flex-col-reverse md:flex-row justify-between items-start md:items-center w-[90%] mx-auto ">
      <div className="mt-3 md:mt-0  w-full md:w-auto flex md:block justify-end md:justify-start">
        <Dropdown
          gradientDuoTone="purpleToBlue"
          label="Category"
          dismissOnClick={false}
          size="md"
          className="rounded-xl bg-[#512B58] p-2"
        >
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            All
          </Dropdown.Item>
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            Latest Trends
          </Dropdown.Item>
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            AI and Machine Learning
          </Dropdown.Item>
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            Cybersecurity
          </Dropdown.Item>
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            Gaming
          </Dropdown.Item>
          <Dropdown.Item className="text-md text-white hover:text-black rounded-xl">
            Software and Apps
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="text-2xl font-bold">Search Blog</span>
        <label className="input input-primary input-bordered flex items-center gap-2">
          <input
            type="text"
            className="border-none input input-bordered "
            placeholder="Search Blogs By Blog Title"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 opacity-70 cursor-pointer hover:text-primary hover:scale-125 transition-all"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default DropdownAndSearch;
