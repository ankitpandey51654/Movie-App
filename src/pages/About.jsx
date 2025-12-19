import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section
      className={`min-h-screen px-6 py-12
      ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center">About This Project</h1>

        {/* Description */}
        <p className="text-lg text-gray-400 text-center">
          This movie application is built to practice modern frontend
          development using React ecosystem and real-world APIs.
        </p>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why */}
          <div
            className={`p-6 rounded-2xl shadow
            ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <h2 className="text-2xl font-semibold mb-3">🎯 Why This App?</h2>
            <p className="text-gray-400">
              The goal of this project is to understand routing, API
              integration, loaders, actions, form handling, and theme management
              in a real-world React application.
            </p>
          </div>

          {/* Tech */}
          <div
            className={`p-6 rounded-2xl shadow
            ${isDark ? "bg-gray-800" : "bg-white"}`}
          >
            <h2 className="text-2xl font-semibold mb-3">🛠 Tech Stack</h2>
            <ul className="space-y-2 text-gray-400">
              <li>⚛️ React + React Router</li>
              <li>🎨 Tailwind CSS</li>
              <li>🌐 Movie API Integration</li>
              <li>🌓 Dark / Light Theme</li>
            </ul>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500">
          Built with ❤️ to level up frontend development skills.
        </p>
      </div>
    </section>
  );
};

export default About;
