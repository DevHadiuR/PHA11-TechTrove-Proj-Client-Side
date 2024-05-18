import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { HashLoader } from "react-spinners";
import PropTypes from "prop-types";
const PrivateRouter = ({ children }) => {
  const location = useLocation();

  const { user, loader } = useAuth();
  if (loader) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        {" "}
        <span className="">
          <HashLoader color="#000" size={110} speedMultiplier={3} />
        </span>
        <h1 className=" mt-8 text-4xl font-semibold">🤪 Tic tic tic... 😜</h1>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
PrivateRouter.propTypes = {
  children: PropTypes.node,
};
