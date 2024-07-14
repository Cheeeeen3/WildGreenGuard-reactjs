import React, { useState, useEffect } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useTranslation } from "react-i18next";

const Captcha: React.FC = () => {
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgcolor] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleClick = () => {
    const captchaInput = document.getElementById(
      "captcha-value",
    ) as HTMLInputElement | null;
    const value = captchaInput?.value;

    if (validateCaptcha(value) !== true) {
      setMsgcolor("text-red-500");
      setMsg("wrong captcha");
      loadCaptchaEnginge(6);
      (captchaInput as HTMLInputElement).value = "";
    } else {
      setMsgcolor("text-lime-700");
      setMsg("correct captcha");
    }
  };

  return (
    <>
      <div className="ml-20 w-64 sm:ml-8 sm:w-80">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <LoadCanvasTemplate
              reloadText="🔄️"
              reloadColor="emerald"
              className="bg-red-500"
            />
            <div className="flex flex-col space-y-2">
              <input
                type="text"
                id="captcha-value"
                name="captcha-value"
                className="w-40 px-2 rounded-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                required
              />
              <button
                type="button"
                className="hover:ring-Sky-500 w-40 rounded-md bg-sky-500 text-base font-medium text-white hover:ring-1 hover:ring-offset-1"
                onClick={handleClick}
              >
                { t("verify") }
              </button>
            </div>
          </div>
        <div className="mt-2 flex justify-start sm:justify-end">
          <p className={`text-left italic ${msgColor}`}>{ t(msg) }</p>
        </div>
      </div>
    </>
  );
};

export default Captcha;

// const random = (length = 8) => {
//     // Declare all characters
//     let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//     // Pick characers randomly
//     let str = '';
//     for (let i = 0; i < length; i++) {
//         str += chars.charAt(Math.floor(Math.random() * chars.length));
//     }

//     return str;

// };
