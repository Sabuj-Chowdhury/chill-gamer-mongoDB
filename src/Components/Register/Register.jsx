import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { handleSignUp } = useContext(authContext);
  return <div></div>;
};

export default Register;
