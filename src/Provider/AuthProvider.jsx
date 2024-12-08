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
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

const AuthProvider = ({ route }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleLogout = () => {
    signOut(auth);
  };
  const manageProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  // on Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

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
    manageProfile,
    user,
    setUser,
    loading,
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
