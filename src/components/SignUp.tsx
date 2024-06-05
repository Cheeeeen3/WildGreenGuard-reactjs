import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import Validation, { props as props } from "./Validation.tsx";
import LogoWithTitle from "./LogoWithTitle.tsx";
import InputField from "./InputField.tsx";
import ThematicBreak from "./ThematicBreak.tsx";
import Button from "./Button.tsx";
import ConfirmAccount from "./ConfirmAccount.tsx"

const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors]: [props, Function] = useState({});


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values.email, values.password);
    setErrors(Validation(values));
    // setIsSubmit(true)
  };

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);

  return (
    <>
      {isSubmit ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <>
          <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <LogoWithTitle isLogin={false} />
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
                value={values.email}
                error={errors.email!}
                userRef={userRef}
                handleChange={handleChange}
              />
              <InputField
                label={"password"}
                id={"password"}
                name={"password"}
                type={"password"}
                value={values.password}
                error={errors.password!}
                userRef={userRef}
                handleChange={handleChange}
              />
              {/* <captcha><button></button></captcha> */}
              <div className="mt-4 flex flex-col gap-y-4">
                <Button type={"submit"} isLink={false}>
                  Sign up
                </Button>
              </div>
            </form>
            <ThematicBreak isLogin={false} />
            <Button type={"button"} isLink={false}>
              <FaGoogle className="mr-2" />
              Google
            </Button>
            <ConfirmAccount isLogin={false}/>
          </section>
        </>
      )}
    </>
  );
};

export default SignUp;
