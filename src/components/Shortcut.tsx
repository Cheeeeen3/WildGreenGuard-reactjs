import React from "react";
import Image from "./Image.tsx";

interface Props {
  plant: string;
  imageUrl: string;
}

const Shortcut: React.FC<Props> = ({ plant, imageUrl }) => {
  return (
    <li
      className="w-1/4 mx-10 bg-cyan-700 items-start py-4 px-2"
      key={`${plant}-shortcut`}
    >
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
