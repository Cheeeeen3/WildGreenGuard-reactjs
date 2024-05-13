import React from "react";
import Image from "./Image.tsx";

interface Props {
  id: number;
  plant: string;
  imageUrl: string;
  toggle: number;
}

const Shortcut: React.FC<Props> = ({ id, plant, imageUrl, toggle }: Props) => {
  return (
    <li className={toggle === id ? "shortcutImg" : "hidden"}>
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
