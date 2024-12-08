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
      await handleLogin(email, password);

      const from = location.state?.from || "/";

      navigate(from, { replace: true });

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      let errorMessage = "Login failed. Please try again.";
      if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password. Please check your password.";
      } else if (error.code === "auth/user-not-found") {
        errorMessage = "No account found with this email. Please register.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email format. Please enter a valid email.";
      }

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    console.log("Location state before Google sign-in:", location.state);
    try {
      await handleGoogleLogin();

      const from = location.state?.from || "/";

      navigate(from, { replace: true });

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
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <div className="text-3xl font-extrabold text-blue-400">
            Chill Gamer
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
          Login to Your Account
        </h2>

        <form onSubmit={handleForm}>
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

          <div className="mb-4 flex items-center bg-gray-700 px-3 py-2 border border-gray-600 rounded-md relative">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full bg-transparent text-gray-100 focus:outline-none"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute right-2 text-gray-400 focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md flex items-center justify-center space-x-2 transition focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <FaGoogle className="text-lg" />
            <span>Sign in with Google</span>
          </button>
        </div>

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
