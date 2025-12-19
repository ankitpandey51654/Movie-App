import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-5xl text-center space-y-8">
        {/* Hero */}
        <h1 className="text-4xl md:text-6xl font-extrabold">
          🎬 Discover Movies <br />
          <span className="text-red-600">Like Never Before</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Explore Bollywood & Hollywood movies with detailed information,
          ratings, and beautiful UI — built using React, Tailwind CSS, and
          modern APIs.
        </p>

        {/* CTA */}
        <div className="flex justify-center gap-4">
          <NavLink
            to="/movie"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Browse Movies
          </NavLink>

          <NavLink
            to="/contact"
            className={`px-6 py-3 rounded-xl font-semibold transition border
            ${
              isDark
                ? "border-gray-600 hover:bg-gray-800"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "🔥 Trending Movies",
              desc: "Discover popular & latest movies",
            },
            { title: "🎭 Full Details", desc: "Plot, ratings, cast & more" },
            {
              title: "🌙 Dark Mode",
              desc: "Smooth light & dark theme support",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl shadow
              ${isDark ? "bg-gray-800" : "bg-white"}`}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
