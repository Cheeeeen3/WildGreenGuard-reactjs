import React from "react";
import { useTranslation } from "react-i18next";

import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Team: React.FC = () => {
    const { t } = useTranslation();
  return (
    <>
    <div className="card card-side bg-base-100 shadow-md mt-8 mx-4 flex flex-col sm:flex-row">
      <figure className="flex-shrink-0">
        <img
          className="mask mask-squircle size-48 my-4 ml-8"
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Memoji_Zhang"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title whitespace-nowrap">{t("ZJM")}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
    <div className="card card-side bg-base-100 shadow-md mt-8 mx-4 flex flex-col sm:flex-row-reverse">
      <figure className="flex-shrink-0">
        <img
          className="mask mask-squircle size-48 my-4 mr-8"
          src="src\assets\Team_Photo\Memoji_Hsu Ting Chen.jpg"
          alt="Memoji_Hsu"
        />
      </figure>
      <div className="card-body grow">
        <h2 className="card-title whitespace-nowrap">{t("HTC")}</h2>
        <p className="text-balance">{t("HTCintro")}</p>
        <div className="card-actions flex flex-row justify-start">
            <a href="https://www.linkedin.com/in/ting-chen-hsu-b8761b155"><IoLogoLinkedin className="size-8"/></a>
            <a href="https://github.com/Cheeeeen3"><FaSquareGithub className="size-8"/></a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
