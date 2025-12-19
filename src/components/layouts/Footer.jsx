import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t shadow-sm ${
        isDark
          ? "bg-black text-gray-300 border-gray-700"
          : "bg-gray-100 text-gray-700 border-gray-200"
      }`}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            🎬 MovieVerse
          </h2>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Discover movies, TV shows, and trending content all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Movies", "TV Shows", "Trending"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            {["Action", "Drama", "Comedy", "Horror"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-black"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Follow Us
          </h3>
          <div className="flex space-x-4 text-xl">
            {["🐦", "📘", "📸", "▶️"].map((icon, i) => (
              <span
                key={i}
                className={`cursor-pointer transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-black"
                }`}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`py-4 text-center text-sm border-t ${
          isDark
            ? "border-gray-700 text-gray-400"
            : "border-gray-200 text-gray-500"
        }`}
      >
        © {new Date().getFullYear()} MovieVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
