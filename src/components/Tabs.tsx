import React from "react";
import { useTranslation } from "react-i18next";

interface props {
  display: number;
  handler: Function;
}

const Tabs: React.FC<props> = ({ display, handler }) => {
  const { t } = useTranslation();
  const tabNames = [t("insp"), t("nasp")];
  return (
    <>
      <div role="tablist" className="tabs tabs-bordered flex justify-center">
        <a
          role="tab"
          className={display === 1 ? "tab tab-active" : "tab"}
          onClick={() => handler(1)}
        >
          {tabNames[0]}
        </a>
        <a
          role="tab"
          className={display === 2 ? "tab tab-active" : "tab"}
          onClick={() => handler(2)}
        >
          {tabNames[1]}
        </a>
      </div>
    </>
  );
};

export default Tabs;
