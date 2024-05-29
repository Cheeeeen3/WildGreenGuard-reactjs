import React from "react";
import LogoIcon from "./LogoIcon.tsx";

export interface LoginProps {
    isLogin:boolean
}
const LogoWithTile: React.FC<LoginProps> = ( { isLogin }) => {
    
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <LogoIcon width={96} height={96} />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {isLogin ? "Log in to your account" : "Sign up for your account"}
      </h2>
    </div>
  );
};

export default LogoWithTile;
