import React, { useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface ThemeProps {
  theme: string;
  toggleTheme: (newTheme: string) => void;
}

const ThemeController: React.FC<ThemeProps> = ({ theme, toggleTheme }) => {
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
        type="checkbox"
        checked={theme === "forest"}
        onChange={() => {
          toggleTheme(theme === "forest" ? "emerald" : "forest");
        }}
        className="theme-controller"
      />

      {/* sun icon */}
      <MdOutlineLightMode className="swap-off size-8 fill-current py-0.5 text-gray-300" />

      {/* moon icon */}
      <MdOutlineDarkMode className="swap-on size-8 fill-current py-0.5 text-gray-300" />
    </label>
  );
};

export default ThemeController;
