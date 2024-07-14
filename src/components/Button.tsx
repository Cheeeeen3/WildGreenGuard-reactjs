import React from "react";

interface buttonProps {
  type: "submit" | "button";
  isLink: boolean;
  children: React.ReactNode;
}

const Button: React.FC<buttonProps> = ({ type, isLink, children }) => {
  const basicStyle =
    "flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const primaryButtonStyle = `w-11/12 mx-auto sm:w-full ${basicStyle}`;
  const googleButtonStyle =
    "flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-md items-center hover:border-2 hover:border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  const linkButtonStyle = `w-auto  ${basicStyle}`;

  return (
    <button
      type={type}
      className={
        type === "button"
          ? googleButtonStyle
          : isLink
            ? linkButtonStyle
            : primaryButtonStyle
      }
    >
      {children}
    </button>
  );
};

export default Button;
