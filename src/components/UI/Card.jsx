import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NavLink } from "react-router-dom";

const Card = ({ currentMovie }) => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  if (!currentMovie) return null;

  const { Poster, Title, Year, imdbID } = currentMovie;

  return (
    <li className="group">
      <div
        className={`relative rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:scale-105
        ${isDark ? "bg-gray-800 shadow-black/40" : "bg-white shadow-gray-300"}
        `}
      >
        {/* Poster */}
        <img
          src={
            Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"
          }
          alt={Title}
          className="h-80 w-full object-cover"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 transition
          ${isDark ? "bg-black/80" : "bg-black/70"}
          opacity-0 group-hover:opacity-100`}
        >
          <h2 className="text-white text-lg font-semibold line-clamp-2">
            {Title}
          </h2>

          <p className="text-sm text-gray-300">{Year}</p>

          <NavLink
            to={`/movie/${imdbID}`}
            className={`mt-3 rounded-md py-2 px-4 text-sm font-medium transition
            ${
              isDark
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            View Details
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default Card;
