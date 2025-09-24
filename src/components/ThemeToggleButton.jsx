import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import themeContext from "../context/themeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <button
      onClick={toggleTheme}
      className="
        relative w-14 h-8 flex items-center 
        bg-gray-300 dark:bg-gray-700
        rounded-full p-1 transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-indigo-400
      "
    >
      {/* Circle slider */}
      <span
        className={`
          w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-md transform transition-transform duration-300
          ${theme === "dark" ? "translate-x-6" : "translate-x-0"}
        `}
      >
        {theme === "dark" ? (
          <FiMoon className="text-gray-700 text-lg" />
        ) : (
          <FiSun className="text-yellow-500 text-lg" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggleButton;
