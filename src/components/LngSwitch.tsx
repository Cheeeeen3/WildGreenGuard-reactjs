import React, { useState } from "react";
import i18next from "i18next";

import { languages } from "../i18n.tsx";
import { GrLanguage } from "react-icons/gr";


const LngSwitch: React.FC = () => {
  const [animation, setAnimation] = useState("animate-close-menu hidden");

  const handleClick = () => {
    let newAnimation =
      animation === "animate-open-menu"
        ? "animate-close-menu hidden"
        : "animate-open-menu";
    setAnimation(newAnimation);
  };

  const handleLanguageClick = (
    e: React.MouseEvent<HTMLLIElement>,
    lang: string
  ) => {
    e.preventDefault();
    let LngBtn = document.getElementById("lng-btn");
    LngBtn?.setAttribute(
      "aria-expanded",
      (LngBtn.ariaExpanded !== "true").toString()
    );

    let LngSwitch = document.documentElement;
    LngSwitch?.setAttribute("lang", lang);
    i18next.changeLanguage(lang);
    // console.log(lang, i18next.resolvedLanguage, i18next.language);
    setAnimation("animate-close-menu hidden");
  };

  return (
    <div className="relative ml-3">
      <div onClick={handleClick}>
        <button
          type="button"
          id="lng-btn"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 aria-expanded={`${animation === 'animate-open-menu'? 'true':'false'}`} aria-haspopup='true'"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <GrLanguage className="w-6 h-6" />
        </button>
      </div>

      <ul
        className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${animation}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
      >
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
        {languages.map((language) => (
          <li key={language.code} onClick={(e) => handleLanguageClick(e, language.code)} className="cursor-pointer flex flex-row mt-2">
            {language.country_code}
            <a
              href="#"
              className="block px-4 py-2 ml-2 text-sm text-gray-700"
              role="menuitem"
              tabIndex={-1}
              id={language.code}
            >
              {language.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LngSwitch;
