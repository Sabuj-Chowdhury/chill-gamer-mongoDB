import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import "../Navbar/Navbar.css";
import { useState, useContext, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { authContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");

    if (darkMode) {
      document.body.classList.remove("bg-black", "text-white");
      document.body.classList.add("bg-white", "text-black");
    } else {
      document.body.classList.remove("bg-white", "text-black");
      document.body.classList.add("bg-black", "text-white");
    }
  };

  // Handle redirection after logout
  const onLogout = async () => {
    await handleLogout();
    navigate("/"); // Redirect to home page after logging out
  };

  return (
    <div
      className={`transition-colors duration-300 shadow-md ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-black text-emerald-400"
      }`}
    >
      {/* Navbar Header */}
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <img src={logo} className="h-16 w-20" alt="logo" />
        </div>

        {/* Large Screen Links */}
        <div className="hidden md:flex items-center justify-center space-x-5 flex-1">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/add-review" className="hover:underline">
            Add Review
          </NavLink>
          <NavLink to="/all-reviews" className="hover:underline">
            All Reviews
          </NavLink>
          <NavLink to="/game-watchlist" className="hover:underline">
            Game WatchList
          </NavLink>
          {user && (
            <NavLink to="/my-reviews" className="hover:underline">
              My Reviews
            </NavLink>
          )}
        </div>

        {/* Auth Buttons and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            // If user is logged in
            <div className="flex items-center space-x-2">
              {/* Centered User Avatar */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-black text-white py-1 px-2 rounded-lg shadow-lg">
                  {user.displayName}
                </div>
              </div>
              {/* Log Out Button */}
              <button
                onClick={onLogout}
                className="hover:underline text-red-500 ml-2"
              >
                Log Out
              </button>
            </div>
          ) : (
            // If not logged in
            <>
              <NavLink to="/login" className="hover:underline">
                Login
              </NavLink>
              <NavLink to="/register" className="hover:underline">
                Register
              </NavLink>
            </>
          )}
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>

        {/* Small Screen Menu Icons */}
        <div className="flex md:hidden items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-4xl">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {open && (
        <div
          className="absolute top-16 right-5 w-64 bg-black dark:bg-gray-800 z-10 shadow-lg rounded-lg transition-transform duration-300"
          style={{
            transform: open ? "translateY(0)" : "translateY(-200%)",
          }}
        >
          <div className="flex flex-col items-center py-5 space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-review">Add Review</NavLink>
            <NavLink to="/all-reviews">All Reviews</NavLink>
            <NavLink to="/game-watchlist">Game WatchList</NavLink>
            {user && <NavLink to="/my-reviews">My Reviews</NavLink>}

            {user ? (
              <button
                onClick={onLogout}
                className="hover:underline text-red-500"
              >
                Log Out
              </button>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
