import { useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const themeStyles = {
    dark: {
      background: "bg-[#0F172A]",
      card: "bg-[#1E293B]/80 border-[#334155] hover:bg-[#273449] hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] hover:border-[#475569] backdrop-blur-sm",
      headings: "text-[#F9FAFB]",
      text: "text-[#CBD5E1]",
    },
    light: {
      background: "bg-[#F9FAFB]",
      card: "bg-[#FFFFFF] border-gray-200 backdrop-blur-sm hover:bg-gray-50 hover:shadow-[0_0_12px_rgba(0,0,0,0.08)] hover:border-gray-300 ",
      headings: "text-[#111827]",
      text: "text-[#4B5563]",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <themeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <div
        className={`min-h-screen ${currentTheme.background} ${currentTheme.text} transition-colors duration-300 flex justify-center items-center`}
      >
        {children}
      </div>
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
