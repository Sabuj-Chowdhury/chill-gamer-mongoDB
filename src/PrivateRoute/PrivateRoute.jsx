import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  // Spinner component for loading
  const Spinner = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  };
  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
