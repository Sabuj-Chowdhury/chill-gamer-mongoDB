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

  // google
  const handleGoogleLogin = async () => {
    try {
      // Sign in with popup
      const result = await signInWithPopup(auth, googleProvider);
      // You can access user information if needed
      const user = result.user;
      console.log("User logged in with Google:", user);
      return user; // Return user info or simply resolve
    } catch (error) {
      console.error("Google login error:", error);
      throw error; // Rethrow the error for the calling function to handle
    }
  };

  // on Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
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
