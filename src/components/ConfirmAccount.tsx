import React from "react";
import Button from "./Button.tsx";
import { Link } from "react-router-dom";
import { LoginProps } from "./LogoWithTitle.tsx";
import { useTranslation } from "react-i18next";

const ConfirmAccount: React.FC<LoginProps> = ({ isLogin }) => {
  const { t } = useTranslation();
  return (
    <section className="mt-6 flex items-center justify-center space-x-4">
      <span className="text-sm leading-9 tracking-tight dark:text-gray-300">
        {isLogin ? t("needaccount") : t("haveaccount")}
      </span>
      <Button type={"submit"} isLink={true}>
        <Link to={isLogin ? "/SignUp" : "/Login"}>
          {isLogin ? t("signup") : t("login")}
        </Link>
      </Button>
    </section>
  );
};

export default ConfirmAccount;
