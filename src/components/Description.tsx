import React from "react";
import { useTranslation } from "react-i18next";

interface props {
  plant: string;
  imageUrl: string;
  scientificName: string;
  info: string;
}

const Description: React.FC<props> = ({ plant, imageUrl, scientificName }) => {
  const { t } = useTranslation();
  return (
    <div
      className="card mb-6 flex flex-col items-center bg-base-100 shadow-xl sm:flex-row"
      id={plant}
    >
      <figure className="w-full flex-shrink-0 sm:w-64">
        <img
          src={imageUrl}
          alt={plant}
          className="mt-8 size-64 rounded-md object-cover sm:mt-0 sm:h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title whitespace-nowrap">{t(plant)}</h2>
        <h6 className="mb-2 whitespace-nowrap italic">{scientificName}</h6>
        <p>{t(`${plant}des`)}</p>
      </div>
    </div>
  );
};

export default Description;
