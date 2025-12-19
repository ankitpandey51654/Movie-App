import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const MovieDetails = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  if (!movie) return null;
  const handleCLick = () => {
    navigate(-1);
  };

  return (
    <section
      className={`min-h-screen px-6 py-10 transition-colors duration-300
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🎬 Poster */}
        <div className="md:col-span-1">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400x600"
            }
            alt={movie.Title}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* 📄 Movie Info */}
        <div className="md:col-span-2 space-y-5">
          <h1 className="text-4xl font-bold">
            {movie.Title}
            <span className="text-lg font-normal ml-3 text-gray-400">
              ({movie.Year})
            </span>
          </h1>

          <p className="italic text-gray-400">{movie.Tagline}</p>

          {/* Ratings */}
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 rounded-full bg-yellow-500 text-black font-semibold">
              ⭐ IMDb {movie.imdbRating}
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold">
              ⏱ {movie.Runtime}
            </span>
            <span className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold">
              🎭 {movie.Genre}
            </span>
          </div>

          {/* Plot */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Plot</h2>
            <p className="leading-relaxed text-gray-500">{movie.Plot}</p>
          </div>

          {/* Extra Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <p>
              <span className="font-semibold">Director:</span> {movie.Director}
            </p>
            <p>
              <span className="font-semibold">Writer:</span> {movie.Writer}
            </p>
            <p>
              <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>
            <p>
              <span className="font-semibold">Language:</span> {movie.Language}
            </p>
          </div>
        </div>
        <button
          onClick={handleCLick}
          className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};
