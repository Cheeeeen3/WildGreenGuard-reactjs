import React from "react";

interface props {
  width: number;
  height: number;
}

const LogoIcon: React.FC<props> = ({ width, height }) => {
  return (
    <img
      className="mx-auto h-24 w-24"
      src="/src/assets/HomePage_WGG/earth_nature_futaba.png"
      alt="Logo"
      width={width}
      height={height}
    />
  );
};

export default LogoIcon;
