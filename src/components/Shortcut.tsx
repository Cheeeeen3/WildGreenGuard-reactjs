import React from "react";
import Image from "./Image.tsx";

interface Props {
  id: number;
  plant: string;
  imageUrl: string;
}

const Shortcut: React.FC<Props> = ({ id, plant, imageUrl }) => {
  return (
    <li className="w-2/6 sm:w-3/6 flex flex-row bg-cyan-700 sm:flex-row items-start py-4 px-2">
      <a href={`#${plant}`} className="flex items-center">
        <Image
          imageUrl={imageUrl}
          plant={plant}
          className="w-10 h-10 rounded-full border-2 border-gray-400"
        />
        <p className="ml-4">{plant}</p>
      </a>
    </li>
  );
};

export default Shortcut;
