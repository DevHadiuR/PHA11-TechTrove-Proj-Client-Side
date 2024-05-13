"use client";
import "./Navbar.css";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HiLogout } from "react-icons/hi";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";

const NavBar = () => {
  const { user, logoutUser } = useAuth();
  const { email, photoURL, displayName } = user || {};

  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Wanna Log Out ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SURE",
    }).then((result) => {
      if (result.isConfirmed) {
        logoutUser();
        Swal.fire({
          title: "Hmmmmmmmm!!",
          text: "Sir You Have Successfully Log Out!",
          icon: "success",
        });
      }
    });
  };

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
          {!user && (
            <span>
              <Link to="/login">
                <button href="/login" className="border-animate">
                  Log In
                </button>
              </Link>{" "}
              {""}/{" "}
              <Link to="/register">
                <button className="border-animate">Register</button>
              </Link>
            </span>
          )}
          {user && (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  className="avatar w-14 md:w-16 relative avatar-container transition-all rounded-full bg-white border"
                  img={photoURL}
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {email}
                </span>
              </Dropdown.Header>

              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>
                <HiLogout className="text-2xl mr-3" /> Sign out
              </Dropdown.Item>
            </Dropdown>
          )}
          <Navbar.Toggle className="text-white border-2 hover:bg-transparent ml-4" />
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
