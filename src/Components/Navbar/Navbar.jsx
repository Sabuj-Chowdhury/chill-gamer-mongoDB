import { Link, NavLink, useNavigate } from "react-router-dom";

import { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { authContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

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

  const onLogout = async () => {
    await handleLogout();
    navigate("/");
  };

  return (
    <div
      className={`transition-colors duration-300 shadow-md ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-black"
      }`}
    >
      {/* Navbar Header */}
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <Link to="/">
            <p className={`font-bold text-3xl`}>Chill Gamer</p>
          </Link>
        </div>

        {/* Large Screen Links */}
        <div className="hidden md:flex items-center justify-center space-x-5 flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-reviews"
            className={({ isActive }) =>
              `transition-all px-3 py-2 rounded-md ${
                isActive
                  ? "bg-amber-500 text-black font-semibold"
                  : "hover:text-amber-400"
              }`
            }
          >
            All Reviews
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/my-reviews"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                My Reviews
              </NavLink>
              <NavLink
                to="/add-review"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                Add Review
              </NavLink>

              <NavLink
                to="/game-watchlist"
                className={({ isActive }) =>
                  `transition-all px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-amber-500 text-black font-semibold"
                      : "hover:text-amber-400"
                  }`
                }
              >
                Game WatchList
              </NavLink>
            </>
          )}
        </div>

        {/* Auth Buttons and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              <div className="relative group">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full cursor-pointer"
                  />
                ) : (
                  <FaUserCircle className="w-10 h-10 text-gray-500 cursor-pointer" />
                )}
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-black text-white py-1 px-2 rounded-lg shadow-lg">
                  {user.displayName || "Anonymous User"}
                </div>
              </div>
              <button
                onClick={onLogout}
                className="hover:underline text-red-500 ml-2"
              >
                Log Out
              </button>
            </div>
          ) : (
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
          className={`absolute top-16 right-0 w-full h-full bg-opacity-95 ${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-black"
          } shadow-lg rounded-lg z-10 transition-transform duration-300`}
        >
          <div className="flex flex-col items-center py-5">
            <NavLink
              to="/"
              onClick={() => setOpen(false)} // Close the menu on click
              className="w-full text-center py-2 hover:bg-amber-500"
            >
              Home
            </NavLink>
            <div className="border-t w-full border-gray-500"></div>
            <NavLink
              to="/all-reviews"
              onClick={() => setOpen(false)} // Close the menu on click
              className="w-full text-center py-2 hover:bg-amber-500"
            >
              All Reviews
            </NavLink>
            <div className="border-t w-full border-gray-500"></div>
            {user && (
              <>
                <NavLink
                  to="/my-reviews"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:bg-amber-500"
                >
                  My Reviews
                </NavLink>
                <div className="border-t w-full border-gray-500"></div>
                <NavLink
                  to="/add-review"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:bg-amber-500"
                >
                  Add Review
                </NavLink>
                <div className="border-t w-full border-gray-500"></div>
                <NavLink
                  to="/game-watchlist"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:bg-amber-500"
                >
                  Game WatchList
                </NavLink>
                <div className="border-t w-full border-gray-500"></div>
              </>
            )}
            {user ? (
              <button
                onClick={() => {
                  onLogout();
                  setOpen(false);
                }}
                className="w-full text-center py-2 text-red-500 hover:bg-red-600 hover:text-white"
              >
                Log Out
              </button>
            ) : (
              <>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:bg-amber-500"
                >
                  Login
                </NavLink>
                <div className="border-t w-full border-gray-500"></div>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="w-full text-center py-2 hover:bg-amber-500"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
