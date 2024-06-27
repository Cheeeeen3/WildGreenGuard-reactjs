import React, { useState, useRef } from "react";
import i18next from "i18next";

import { languages } from "../i18n.tsx";
import { GrLanguage } from "react-icons/gr";

const LngSwitch: React.FC = () => {
  const [animation, setAnimation] = useState("animate-close-menu hidden");
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClick = () => {
    let newAnimation =
      animation === "animate-open-menu"
        ? "animate-close-menu hidden"
        : "animate-open-menu";
    setAnimation(newAnimation);
  };

  const handleLanguageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    lang: string,
  ) => {
    e.preventDefault();
    let LngBtn = document.getElementById("lng-btn");
    LngBtn?.setAttribute(
      "aria-expanded",
      (LngBtn.ariaExpanded !== "true").toString(),
    );

    let LngSwitch = document.documentElement;
    LngSwitch?.setAttribute("lang", lang);
    i18next.changeLanguage(lang);
    // console.log(lang, i18next.resolvedLanguage, i18next.language);
    setAnimation("animate-close-menu hidden");
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };

  return (
    <details ref={detailsRef} className="dropdown dropdown-end">
      <summary
        className="btn w-14 border-emerald-950 bg-emerald-950 hover:bg-emerald-900"
        onClick={handleClick}
      >
        <GrLanguage size={42} className="text-gray-300" />
      </summary>
      <div
        className={`menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow ${animation}`}
      >
        {languages.map((language) => (
          <div
            key={language.code}
            onClick={(e) => handleLanguageClick(e, language.code)}
            className="mt-2 flex cursor-pointer flex-row"
          >
            {language.country_code}
            <a
              href="#"
              className="ml-2 block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              role="menuitem"
              tabIndex={-1}
              id={language.code}
            >
              {language.name}
            </a>
          </div>
        ))}
      </div>
    </details>
  );
};

export default LngSwitch;
