import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Validation, { props as props } from "./Validation.ts";
import LogoWithTitle from "./LogoWithTitle.tsx";
import InputField from "./InputField.tsx";
import ThematicBreak from "./ThematicBreak.tsx";
import Button from "./Button.tsx";
import ConfirmAccount from "./ConfirmAccount.tsx";
import Captcha from "./Captcha.tsx";

const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const [errors, setErrors]: [props, Function] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(values.email, values.password);
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    setErrors(Validation({ email, password }));
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8">
        <section className="flex items-center justify-center">
          <LogoWithTitle isLogin={false} />
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
            <Captcha />
            <div className="mt-8 flex flex-col gap-y-4">
              <Button type={"submit"} isLink={false}>
                {t("signup")}
              </Button>
            </div>
          </form>
          <div className="mt-4 gap-y-4">
            <ThematicBreak isLogin={false} />
          </div>
          <div className="mt-4 flex flex-col gap-y-4">
            <Button type={"button"} isLink={false}>
              <FaGoogle className="mr-2" />
              Google
            </Button>
          </div>
          <ConfirmAccount isLogin={false} />
        </section>
      </div>
    </>
  );
};

export default SignUp;
