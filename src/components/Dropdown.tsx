import React from "react";
import { GrLanguage } from "react-icons/gr";
import { US } from "country-flag-icons/react/3x2";

const LanguageDropdown: React.FC = () => {
  return (
    <details className="dropdown dropdown-end">
      <summary tabIndex={0} role="button" className="btn m-1">
        <GrLanguage className="h-6 w-6" />
      </summary>
      <div
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <div className="mt-2 flex cursor-pointer flex-row">
          <US className="size-8 mr-6" />
          <a>Item 1</a>
        </div>
      </div>
    </details>
  );
};

export default LanguageDropdown;
