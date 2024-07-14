import React from "react";
import Image from "./Image.tsx";
import { useTranslation } from "react-i18next";

interface Props {
  plant: string;
  imageUrl: string;
}

const Shortcut: React.FC<Props> = ({ plant, imageUrl }) => {
  const { t } = useTranslation();

  return (
    <li className="group mx-auto w-full py-2 hover:text-emerald-600">
      <a href={`#${plant}`} className="flex items-center px-12 sm:px-28">
        <Image
          imageUrl={imageUrl}
          plant={plant}
          className="size-12 rounded-full border-2 border-gray-400 group-hover:border-emerald-600"
        />
        <p className="ml-4 whitespace-nowrap text-base">{t(plant)}</p>
      </a>
    </li>
  );
};

export default Shortcut;
