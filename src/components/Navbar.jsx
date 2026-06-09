import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-scroll";
import pic from "../assets/JISHAN SHEKH (3).jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={pic}
                alt="Profile"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-red-500 object-cover"
              />

              <div>
                <h1 className="text-lg md:text-2xl font-bold dark:text-white">
                  Jishan{" "}
                  <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Shekh
                  </span>
                </h1>

                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                  MERN Stack Developer
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8 font-semibold">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      spy={true}
                      activeClass="text-red-500"
                      className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-red-500 transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl dark:text-white"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            {/* Mobile Buttons */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl dark:text-white"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl dark:text-white"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 ${
            menuOpen ? "right-0" : "-right-full"
          } w-[75%] h-screen bg-white dark:bg-gray-900 transition-all duration-500 md:hidden`}
        >
          <div className="flex justify-end p-6">
            <FaTimes
              className="text-2xl cursor-pointer dark:text-white"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <ul className="flex flex-col items-center gap-8 mt-10 text-lg font-semibold">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-red-500"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;