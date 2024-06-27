import React from "react";
import LogoIcon from "./LogoIcon.tsx";
import { useTranslation } from "react-i18next";

export interface LoginProps {
    isLogin:boolean
}
const LogoWithTile: React.FC<LoginProps> = ( { isLogin }) => {
  const { t } = useTranslation();  
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mr-2 sm:mr-0">
      <LogoIcon width={96} height={96} />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
        {isLogin ? t("logintitle") : t("signuptitle")}
      </h2>
    </div>
  );
};

export default LogoWithTile;
