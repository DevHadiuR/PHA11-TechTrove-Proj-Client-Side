import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Router/Router";
import { HelmetProvider } from "react-helmet-async";
import BlogProvider from "./provider/blogProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </HelmetProvider>
  </React.StrictMode>
);
