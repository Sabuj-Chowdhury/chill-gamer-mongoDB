import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import "../Navbar/Navbar.css";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");

    if (darkMode) {
      // Light mode
      document.body.classList.remove("bg-black", "text-white");
      document.body.classList.add("bg-white", "text-black");
    } else {
      // Dark mode
      document.body.classList.remove("bg-white", "text-black");
      document.body.classList.add("bg-black", "text-white");
    }
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
        </div>

        {/* Auth Buttons and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink to="/login" className="hover:underline">
            Login
          </NavLink>
          <NavLink to="/logout" className="hover:underline">
            Logout
          </NavLink>
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <MdDarkMode /> : <CiLight />}
          </button>
        </div>

        {/* Small Screen Menu Icons */}
        <div className="flex md:hidden items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <MdDarkMode /> : <CiLight />}
          </button>
          <button onClick={() => setOpen(!open)} className="text-4xl">
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black dark:bg-gray-800 z-10 shadow-lg">
          <div className="flex flex-col items-center py-5 space-y-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-review">Add Review</NavLink>
            <NavLink to="/all-reviews">All Reviews</NavLink>
            <NavLink to="/game-watchlist">Game WatchList</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
