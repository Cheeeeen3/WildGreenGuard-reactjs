import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeController: React.FC = () => {
  const [theme, setTheme] = useState("emerald");
  const toggleTheme = () => {
    setTheme(theme === "forest" ? "emerald" : "forest");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label
      className="swap swap-rotate"
      data-toggle-theme="emerald"
      data-act-class="ACTIVECLASS"
    >
      {/* this hidden checkbox controls the state */}
      <input
        onClick={toggleTheme}
        type="checkbox"
        className="theme-controller"
      />

      {/* sun icon */}
      <MdOutlineLightMode className="swap-off size-8 fill-current text-gray-300" />

      {/* moon icon */}
      <MdOutlineDarkMode className="swap-on size-8 fill-current text-gray-300" />
    </label>
  );
};

export default ThemeController;
