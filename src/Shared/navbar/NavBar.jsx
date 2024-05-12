"use client";
import "./Navbar.css";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar fluid rounded className="bg-transparent text-white">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="/titleLogo.jpg"
              className="mr-3 w-12  md:w-14 "
              alt="Flowbite React Logo"
            />
          </Link>
        </Navbar.Brand>
        <div className="flex items-center md:order-2 ">
          <span>
            <Link to="/login">
              <button href="/login" className="border-animate">
                Login
              </button>
            </Link>{" "}
            {""}/{" "}
            <Link to="/register">
              <button className="border-animate">Register</button>
            </Link>
          </span>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                className=" relative avatar-container transition-all rounded-full bg-white "
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle className="text-white hover:bg-transparent ml-2" />
        </div>
        <Navbar.Collapse className="bg-[#2A7886]  rounded-2xl  p-3 md:bg-transparent md:p-0">
          <NavLink
            to="/"
            className=" transition-all  px-3 py-2  hover:bg-transparent border-animate "
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                backgroundColor: isActive ? "transparent" : "transparent",
                color: isActive ? "white" : "white",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/addBlog"
            className=" transition-all border-animate p-2 hover:bg-transparent "
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                backgroundColor: isActive ? "transparent" : "transparent",
                color: isActive ? "white" : "white",
              };
            }}
          >
            Add Blog
          </NavLink>
          <NavLink
            to="/allBlogs"
            className=" transition-all border-animate p-2 hover:bg-transparent "
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                backgroundColor: isActive ? "transparent" : "transparent",
                color: isActive ? "white" : "white",
              };
            }}
          >
            All Blogs
          </NavLink>
          <NavLink
            to="/featuredBlogs"
            className=" transition-all border-animate p-2 hover:bg-transparent "
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                backgroundColor: isActive ? "transparent" : "transparent",
                color: isActive ? "white" : "white",
              };
            }}
          >
            Featured Blogs
          </NavLink>
          <NavLink
            to="/wishlist"
            className=" transition-all border-animate p-2 hover:bg-transparent "
            style={({ isActive }) => {
              return {
                borderBottom: isActive ? "2px solid white" : "",
                backgroundColor: isActive ? "transparent" : "transparent",
                color: isActive ? "white" : "white",
              };
            }}
          >
            Wishlist
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
