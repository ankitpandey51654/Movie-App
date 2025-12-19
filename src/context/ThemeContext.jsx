import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  // ✅ 1️⃣ INITIAL THEME FROM LOCALSTORAGE
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  // ✅ 2️⃣ TOGGLE THEME
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ✅ 3️⃣ SAVE TO LOCALSTORAGE + APPLY TO <html>
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // optional but recommended (Tailwind dark mode support)
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
