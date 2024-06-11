import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SignUp from "./SignUp.tsx";
import Validation, { props as props } from "./Validation.tsx";
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
      <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <LogoWithTitle isLogin={true} />
      </section>
      <section className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
            userRef={emailRef}
          />
          <InputField
            label={"password"}
            id={"password"}
            name={"password"}
            type={"password"}
            error={errors.password!}
            userRef={passwordRef}
          />
          <div className="mt-4 flex flex-col gap-y-4">
            <Button type={"submit"} isLink={false}>
              {t("login")}
            </Button>
          </div>
        </form>
        <ThematicBreak isLogin={true} />
        <Button type={"button"} isLink={false}>
          <FaGoogle className="mr-2" />
          Google
        </Button>
        <ConfirmAccount isLogin={true} />
      </section>
    </>
  );
};

export default Login;
