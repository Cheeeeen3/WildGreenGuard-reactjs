import React from "react";

interface buttonProps {
  type: "submit" | "button";
  isLink: boolean;
  children: React.ReactNode;
}

const Button: React.FC<buttonProps> = ({ type, isLink, children }) => {
  const primaryButtonStyle =
    "btn w-11/12 btn-active bg-emerald-800 border-emerald-800 text-white hover:bg-emerald-600 max-w-xs ml-2 sm:ml-10";
  const googleButtonStyle = "btn w-11/12 btn-active bg-white max-w-xs ml-2 sm:ml-10";
  const linkButtonStyle =
    "btn btn-active btn-link text-emerald-800 hover:text-emerald-600 dark:text-emerald-500 dark:hover:text-emerald-300";

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
