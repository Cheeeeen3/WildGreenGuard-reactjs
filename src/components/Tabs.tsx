import React from "react";
import { useTranslation } from "react-i18next";

interface props {
  display: number;
  handler: Function;
}

const Tabs: React.FC<props> = ({ display, handler }) => {
  const { t } = useTranslation();

  const tabNames = [t("insp"), t("nasp")];

  const active =
    "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
  const inactive =
    "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <>
      <section className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div>
          <ul className="flex justify-center flex-wrap -mb-px">
            {tabNames.map((tabname) =>
              tabNames.indexOf(tabname) + 1 === display ? (
                <li
                  className="me-2"
                  onClick={() => handler(tabNames.indexOf(tabname) + 1)}
                >
                  <a href="#" className={active} aria-current="page">
                    {tabname}
                  </a>
                </li>
              ) : (
                <li
                  className="me-2"
                  onClick={() => handler(tabNames.indexOf(tabname) + 1)}
                >
                  <a href="#" className={inactive} aria-current="page">
                    {tabname}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tabs;
