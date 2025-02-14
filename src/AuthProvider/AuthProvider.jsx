import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/firebase.init";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(null);
  const [refetch, setRefetch] = useState();
  const googleProvider = new GoogleAuthProvider();

  // google Login
  const loginInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //  Register with Email
  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login With Email and password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // log Out
  const logOut = () => {
    return signOut(auth);
  };

  // useEffect
  useEffect(() => {
    const connection = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser?.email) {
        const users = { email: currentUser?.email };
        axios
          .post(`${import.meta.env.VITE_BASE_URL}/jwt`, users, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_BASE_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          });
      }
      console.log("VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);
    });
    return () => {
      connection();
      // setUser(null);
    };
  }, [refetch]);

  // auth Info
  const authInfo = {
    user,
    setRefetch,
    loading,
    setLoading,
    email,
    setEmail,
    loginInWithGoogle,
    registerWithEmail,
    loginWithEmail,
    updateUserProfile,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
