import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mx-auto flex flex-col place-items-center gap-4 px-16 py-16 sm:flex-row">
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
        <div>
          <img
            className="h-200 w-200 flex flex-col rounded-2xl object-contain"
            src="https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
            alt="Orange-cat-yawn"
          />
        </div>
      </div>
      <div className="my-3 block px-16 text-center font-custom-font text-xl sm:text-2xl">
        {t("webintro")}
      </div>
    </>
  );
};

export default Home;
