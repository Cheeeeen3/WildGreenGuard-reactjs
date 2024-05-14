import React from "react";

interface Props {
  imageUrl: string;
  plant: string;
  className: string;
}

const Image: React.FC<Props> = ({ imageUrl, plant, className }: Props) => {
  return (
    <img
      src={imageUrl}
      alt={plant}
      className={className}
    />
  );
};

export default Image;
