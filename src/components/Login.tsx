import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SignUp from "./SignUp.tsx";
import Validation, { props as props } from "./Validation.ts";
import LogoWithTitle from "./LogoWithTitle.tsx";
import InputField from "./InputField.tsx";
import ThematicBreak from "./ThematicBreak.tsx";
import Button from "./Button.tsx";
import ConfirmAccount from "./ConfirmAccount.tsx";
import getUserInfo from "./UserInfo.tsx";
import { useAppDispatch } from "./hook.tsx";
import { loginUser } from "./userSlice.tsx";

const Login: React.FC = () => {
  const { t } = useTranslation();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors]: [props, Function] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(values.email, values.password);
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    setErrors(Validation({ email, password }));
    handleLogin();
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // const loader = async () => {
  //   const user = await getUserInfo();
  //   if (!user) {
  //     return redirect("/SignUp");
  //   }
  //   return null;
  // };

  const handleLogin = async () => {
    const userInfo = await getUserInfo();
    if (userInfo) {
      const userPayload = { user: userInfo.user, email: userInfo.email };
      dispatch(loginUser(userPayload));
      navigate("/");
    }
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  // useEffect(() => {
  //   console.log(errors);
  //   if (Object.keys(errors).length === 0 && isSubmit) {
  //     console.log(values);
  //   }
  // }, [errors]);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
        <section className="flex items-center justify-center">
          <LogoWithTitle isLogin={true} />
        </section>
        <section className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <InputField
              label={"email"}
              id={"email"}
              name={"email"}
              type={"text"}
              error={errors.email!}
              ref={emailRef}
            />
            <InputField
              label={"password"}
              id={"password"}
              name={"password"}
              type={"password"}
              error={errors.password!}
              ref={passwordRef}
            />
            <div className="mt-8 flex flex-col gap-y-4">
              <Button type={"submit"} isLink={false}>
                {t("login")}
              </Button>
            </div>
          </form>
          <div className="mt-4 gap-y-4">
            <ThematicBreak isLogin={true} />
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <Button type={"button"} isLink={false}>
              <FaGoogle className="mr-2" />
              Google
            </Button>
          </div>
          <ConfirmAccount isLogin={true} />
        </section>
      </div>
    </>
  );
};

export default Login;
