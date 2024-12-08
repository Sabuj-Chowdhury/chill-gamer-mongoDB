import { useContext, useState } from "react";
import { authContext } from "../Provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle, FaUserAlt, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(authContext);

  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await handleLogin(email, password).then((res) => {
        navigate(location.state.from);
      });
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleLogin().then((res) => {
        navigate(location.state.form);
      });
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center transition duration-300 ease-in-out">
      {/* Login Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-sm">
        {/* Branding Header */}
        <div className="flex justify-center mb-4">
          <div className="text-3xl font-extrabold text-blue-400">
            Chill Gamer
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
          Login to Your Account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleForm}>
          {/* Email Input with User Icon */}
          <div className="mb-4 flex items-center bg-gray-700 px-3 py-2 border border-gray-600 rounded-md">
            <FaUserAlt className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              className="w-full bg-transparent text-gray-100 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input with Lock Icon & Eye Icon */}
          <div className="mb-4 flex items-center bg-gray-700 px-3 py-2 border border-gray-600 rounded-md relative">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full bg-transparent text-gray-100 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            {/* Eye Icon for toggling */}
            <button
              type="button"
              className="absolute right-2 text-gray-400 focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        {/* Google Sign-In with Icon */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center space-x-2 transition focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button>
        </div>

        {/* Register Redirect */}
        <p className="text-center mt-6 text-sm text-gray-400">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
