import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ route }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, SetUser] = useState(null);

  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    signOut(auth);
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  // on Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  const authInfo = {
    handleSignUp,
    handleLogin,
    handleLogout,
    handleGoogleLogin,
  };
  return (
    <div>
      <authContext.Provider value={authInfo}>{route}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  route: PropTypes.object,
};
