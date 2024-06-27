import React from "react";
import { LoginProps } from "./LogoWithTitle.tsx";
import { useTranslation } from "react-i18next";

const ThematicBreak: React.FC<LoginProps> = ({ isLogin }) => {
  const { t } = useTranslation();
  return (
    <div className="divider text-gray-400 dark:divider-success dark:text-emerald-500">
      {isLogin ? t("logingoogle") : t("signupgoogle")}
    </div>
  );
};

export default ThematicBreak;
