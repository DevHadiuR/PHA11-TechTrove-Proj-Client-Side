import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root/Root";
import Home from "../../Pages/Home/Home";
import AddBlog from "../../Pages/addBlog/AddBlog";
import Login from "../../Pages/login/Login";
import Error from "../../components/error/Error";
import Register from "../../Pages/register/Register";
import BlogDetails from "../../Pages/blogDetails/BlogDetails";
import UpdateBlog from "../../Pages/update/UpdateBlog";
import AllBlogs from "../../Pages/allBlogs/AllBlogs";
import Featured from "../../Pages/featured/Featured";
import Wishlist from "../../Pages/wishlist/Wishlist";
import WishlistBlogDetails from "../../Pages/wishlistBlogDetails/WishlistBlogDetails";
import PrivateRouter from "../privateRouter/PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBlog",
        element: (
          <PrivateRouter>
            <AddBlog></AddBlog>
          </PrivateRouter>
        ),
      },
      {
        path: "/allBlogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/featured",
        element: <Featured></Featured>,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRouter>
            <Wishlist></Wishlist>
          </PrivateRouter>
        ),
      },
      {
        path: "/wishlistBlogDetails/:id",
        element: (
          <PrivateRouter>
            <WishlistBlogDetails></WishlistBlogDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogDetails/:id",
        element: (
          <PrivateRouter>
            <BlogDetails></BlogDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateBlog/:id",
        element: (
          <PrivateRouter>
            {" "}
            <UpdateBlog></UpdateBlog>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBlogs/${params.id}`),
      },
    ],
  },
]);
