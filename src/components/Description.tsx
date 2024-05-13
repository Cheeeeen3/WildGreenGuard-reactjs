import React from "react";
import Image from "./Image.tsx";

interface Props {
  id: number;
  plant: string;
  imageUrl: string;
  scientificName: string;
  info: string;
  toggle: number;
}

const Description: React.FC<Props> = ({
  id,
  plant,
  imageUrl,
  scientificName,
  info,
  toggle,
}: Props) => {
  return (
    <li id={plant} className={toggle === id ? "desImg" : "hidden"}>
      <Image
        imageUrl={imageUrl}
        plant={plant}
        className="w-60 h-60 rounded-md ml-4 mx-3"
      />
      <article className="ml-4">
        <h3 className="font-semibold hover:text-orange-400 hover:opacity-80">
          {plant}
        </h3>
        <h6 className="italic mb-2">{scientificName}</h6>
        <p>{info}</p>
      </article>
    </li>
  );
};

export default Description;
