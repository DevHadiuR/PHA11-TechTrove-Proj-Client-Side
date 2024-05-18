import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// import auth from "../../firebase/firebase.config";
import auth from "../firebase/Firebase.config";

const googProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
const twitProvider = new TwitterAuthProvider();

export const ProjectContext = createContext(null);

const ReactProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const logoutUser = () => {
    setLoader(true);
    signOut(auth);
  };

  const googleProvider = () => {
    return signInWithPopup(auth, googProvider);
  };

  const gitHubProvider = () => {
    return signInWithPopup(auth, gitProvider);
  };
  const twitterProvider = () => {
    return signInWithPopup(auth, twitProvider);
  };

  const projectInfo = {
    createUser,
    loginUser,
    user,
    logoutUser,
    googleProvider,
    gitHubProvider,
    twitterProvider,
    loader,
    setUser,
  };

  return (
    <ProjectContext.Provider value={projectInfo}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ReactProvider;

ReactProvider.propTypes = {
  children: PropTypes.node,
};
