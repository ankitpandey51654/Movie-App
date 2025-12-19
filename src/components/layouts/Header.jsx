import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Header.jpg";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    `block py-2 transition ${
      isActive
        ? "text-orange-500 font-semibold"
        : theme === "dark"
        ? "text-gray-300 hover:text-orange-500"
        : "text-gray-700 hover:text-orange-500"
    }`;

  return (
    <header
      className={`border-b shadow-sm ${
        theme === "dark"
          ? "bg-black text-white border-gray-700"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10" />
            <span className="text-xl font-semibold">MyWebsite</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/movie" className={linkClass}>
              Movie
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="px-3 py-2 border rounded-md text-sm"
            >
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button className="px-4 py-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              Login
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              SignUp
            </button>
          </div>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${
            open
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }`}
        >
          <nav className="flex flex-col gap-2 py-4 border-t border-gray-200 dark:border-gray-700">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/movie"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Movie
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={linkClass}
            >
              Contact
            </NavLink>

            <button
              onClick={toggleTheme}
              className="mt-4 border py-2 rounded-md"
            >
              Toggle Theme
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
