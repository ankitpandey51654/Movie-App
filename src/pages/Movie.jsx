import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Card from "../components/UI/Card";

const Movie = () => {
  const movieData = useLoaderData();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`px-6 py-10 min-h-screen transition-colors duration-300
      ${isDark ? "bg-gray-900" : "bg-gray-100"}
      `}
    >
      <h1
        className={`text-3xl font-bold mb-8
        ${isDark ? "text-white" : "text-gray-800"}
        `}
      >
        🎬 Movies
      </h1>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movieData?.Search?.map((movie, index) => (
          <Card key={`${movie.imdbID}-${index}`} currentMovie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default Movie;
