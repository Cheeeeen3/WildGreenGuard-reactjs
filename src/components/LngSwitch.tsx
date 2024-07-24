import React, { useState, useRef } from "react";
import i18next from "i18next";

import { languages } from "../i18n.tsx";
import { GrLanguage } from "react-icons/gr";

const LngSwitch: React.FC = () => {
  const [animation, setAnimation] = useState("animate-close-menu hidden");
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setAnimation(isOpen ? "animate-close-menu hidden" : "animate-open-menu");
  };

  return (
    <details ref={detailsRef} className="dropdown dropdown-end">
      <summary className="btn btn-ghost" onClick={handleClick}>
        <GrLanguage size={28} className="pb-0.5 text-gray-300" />
      </summary>
      <div
        className={`menu dropdown-content relative z-20 w-52 rounded-box bg-base-100 p-2 shadow ${animation}`}
      >
        <LngDropDown
          setAnimation={setAnimation}
          setIsOpen={setIsOpen}
          detailsRef={detailsRef}
        />
      </div>
    </details>
  );
};

export default LngSwitch;

interface lngProps {
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  detailsRef: React.RefObject<HTMLDetailsElement>;
}

export const LngDropDown: React.FC<lngProps> = ({
  setAnimation,
  setIsOpen,
  detailsRef,
}) => {
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
    setIsOpen(false);
    if (detailsRef.current) {
      detailsRef.current.open = false;
    }
  };
  return (
    <div>
      {languages.map((language) => (
        <div
          key={language.code}
          onClick={(e) => handleLanguageClick(e, language.code)}
          className="mt-2 flex cursor-pointer flex-row rounded-md px-2 py-2 hover:bg-emerald-900 hover:text-white aria-[current='language']:block aria-[current='language']:bg-emerald-800 aria-[current='language']:text-white aria-[current='language']:hover:bg-emerald-900"
        >
          {language.country_code}
          <a
            href="#"
            className="ml-2 block px-4 py-1 text-base"
            role="menuitem"
            tabIndex={-1}
            id={language.code}
          >
            {language.name}
          </a>
        </div>
      ))}
    </div>
  );
};
