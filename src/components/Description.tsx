import React from "react";
import Image from "./Image.tsx";

interface props {
  plant: string;
  imageUrl: string;
  scientificName: string;
  info: string;
}

const Description: React.FC<props> = ({
  plant,
  imageUrl,
  scientificName,
  info,
}) => {
  return (
    <li id={plant} className="flex flex-col sm:flex-row border-4 border-cyan-700">
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
