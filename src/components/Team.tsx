import React from "react";
import { useTranslation } from "react-i18next";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Team: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="card card-side mx-4 mt-8 flex flex-col bg-base-100 shadow-md sm:flex-row">
        <figure className="flex-shrink-0">
          <img
            className="mask mask-squircle my-4 ml-8 size-48"
            src="src\assets\Team_Photo/Memoji_Zhang Jia Ming.png"
            alt="Memoji_Zhang"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title whitespace-nowrap">{t("ZJM")}</h2>
          <p className="text-balance">{t("ZJMintro")}</p>
          <div className="card-actions justify-start">
            <a href="">
              <IoLogoLinkedin className="size-8" />
            </a>
            <a href="">
              <FaSquareGithub className="size-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="card card-side mx-4 mt-8 flex flex-col bg-base-100 shadow-md sm:flex-row-reverse">
        <figure className="flex-shrink-0">
          <img
            className="mask mask-squircle my-4 mr-8 size-48"
            src="src\assets\Team_Photo\Memoji_Hsu Ting Chen.jpg"
            alt="Memoji_Hsu"
          />
        </figure>
        <div className="card-body grow">
          <h2 className="card-title whitespace-nowrap">{t("HTC")}</h2>
          <p className="text-balance">{t("HTCintro")}</p>
          <div className="card-actions flex flex-row justify-start">
            <a href="https://www.linkedin.com/in/ting-chen-hsu-b8761b155">
              <IoLogoLinkedin className="size-8" />
            </a>
            <a href="https://github.com/Cheeeeen3">
              <FaSquareGithub className="size-8" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
