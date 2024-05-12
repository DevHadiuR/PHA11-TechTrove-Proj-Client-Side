import { Outlet } from "react-router-dom";

import Footer from "../../Shared/Footer/Footer";
import NavBar from "../../Shared/navbar/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
