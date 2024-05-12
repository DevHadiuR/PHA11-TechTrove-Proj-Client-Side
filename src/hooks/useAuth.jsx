import { useContext } from "react";
import { ProjectContext } from "../provider/blogProvider";

const useAuth = () => {
  const userAuth = useContext(ProjectContext);
  return userAuth;
};

export default useAuth;
