import PropTypes from "prop-types";
import { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ route }) => {
  const authInfo = {};
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
