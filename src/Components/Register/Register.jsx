import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const { handleSignUp, handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUpperCase) {
      return "Password must include at least one uppercase letter.";
    }

    if (!hasLowerCase) {
      return "Password must include at least one lowercase letter.";
    }

    if (!isLongEnough) {
      return "Password must be at least 6 characters long.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    const password = e.target.password.value;

    const passwordError = isValidPassword(password);

    if (passwordError) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: passwordError,
      });
      return;
    }

    try {
      await handleSignUp(email, password);
      Swal.fire({
        icon: "success",
        title: "Account Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      // Logout the user and redirect to login
      await handleLogout();
      navigate("/login");
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
      {/* Register Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
          Create an Account
        </h2>

        {/* Register Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Photo URL Input */}
          <div className="mb-4">
            <input
              type="url"
              name="photoURL"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Enter your photo URL"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 bg-gray-700 text-gray-100 rounded-lg focus:outline-none"
              placeholder="Create a password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-center mt-4 text-sm text-gray-400">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-blue-400 hover:underline cursor-pointer"
          >
            Login here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
