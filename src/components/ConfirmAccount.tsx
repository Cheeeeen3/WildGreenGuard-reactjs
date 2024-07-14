import React from "react";
import Button from "./Button.tsx";
import { Link } from "react-router-dom";
import { LoginProps } from "./LogoWithTitle.tsx";

const ConfirmAccount: React.FC<LoginProps> = ({ isLogin }) => {
  return (
    <section className="mt-6 flex items-center justify-center space-x-4">
      <span className="text-sm leading-9 tracking-tight">
        {isLogin ? "Need an account?" : "Already have an account?"}
      </span>
      <Button type={"submit"} isLink={true}>
        <Link to={isLogin ? "/SignUp" : "/Login"}>
          {isLogin ? "SignUp" : "Login"}
        </Link>
      </Button>
    </section>
  );
};

export default ConfirmAccount;
