import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import {
  MdOutlineLogin,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import LngSwitch from "./LngSwitch.tsx";
import ThemeController from "./ThemeController.tsx";
import LogoIcon from "./LogoIcon.tsx";
import { LngDropDown } from "./LngSwitch.tsx";

const NavBar: React.FC = () => {
  const { t } = useTranslation();
  const [animation, setAnimation] = useState("animate-close-menu hidden");
  const [page, setPage] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    setPage(target.pathname);
  };

  const [theme, setTheme] = useState("emerald");
  const toggleTheme = (newTheme:string) => {
    // setTheme(theme === "forest" ? "emerald" : "forest");
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header>
      <div className="navbar mx-auto bg-emerald-950 relative z-20">
        <div className="navbar-start">
          <details className="dropdown">
            <summary className="btn btn-ghost m-1">
              <HiOutlineMenuAlt1 className="text-2xl text-gray-300" />
            </summary>
            <ul className="menu dropdown-content menu-sm relative z-30 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              <NavLinkPanel page={page} handlePageClick={handlePageClick} />
              <li>
                <details open>
                  <summary>{t("language")}</summary>
                  <LngDropDown
                    setAnimation={setAnimation}
                    setIsOpen={setIsOpen}
                    detailsRef={detailsRef}
                  />
                </details>
              </li>
              <li>
                <label className="flex cursor-pointer gap-2">
                  <MdOutlineLightMode className="size-8 fill-current py-0.5" />
                  <input
                    onClick={() => toggleTheme(theme === "forest" ? "emerald" : "forest")}
                    type="checkbox"
                    checked={theme === "forest"}
                    className="theme-controller toggle"
                  />
                  <MdOutlineDarkMode className="size-8 fill-current py-0.5" />
                </label>
              </li>
            </ul>
          </details>
          <Link to="/" onClick={handlePageClick}>
            <div className="btn btn-ghost flex flex-row flex-nowrap items-center">
              <LogoIcon width={34} height={34} />
              <strong className="inline-block py-1.5 align-middle text-gray-300">
                WildGreenGuard
              </strong>
            </div>
          </Link>
          <div className="hidden lg:flex lg:flex-auto">
            <ul className="menu menu-horizontal px-1">
              <NavLinkPanel page={page} handlePageClick={handlePageClick} />
            </ul>
          </div>
        </div>
        <div className="navbar-end z-0 mr-4 space-x-2">
          <div className="hidden min-[400px]:block">
            <LngSwitch />
            <ThemeController theme={theme} toggleTheme={toggleTheme}/>
          </div>
          {isLogin ? (
            <ProfileDropdown />
          ) : (
            <Link to="/Login">
              <MdOutlineLogin className="size-8 pb-1 text-gray-300" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

interface panelProps {
  page: string;
  handlePageClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLinkPanel: React.FC<panelProps> = ({ page, handlePageClick }) => {
  const navLinks = [
    { to: "/", navName: "data" },
    { to: "/info", navName: "team" },
    { to: "/chatroom", navName: "idplant" },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <PageLink
          key={link.navName}
          to={link.to}
          navName={link.navName}
          onClick={handlePageClick}
          aria-current={page === link.to ? "page" : ""}
        />
      ))}
    </>
  );
};

interface pageProps {
  [key: string]: any;
  to: string;
  navName: string;
}

const PageLink: React.FC<pageProps> = ({ to, navName, ...props }) => {
  const { t } = useTranslation();

  return (
    <li>
      <Link
        to={to}
        className="rounded-md px-2 py-2 font-custom-font text-base font-medium text-gray-300 hover:bg-emerald-900 hover:text-white aria-[current='page']:block aria-[current='page']:bg-emerald-800 aria-[current='page']:text-white aria-[current='page']:hover:bg-emerald-900"
        {...props}
      >
        {t(navName)}
      </Link>
    </li>
  );
};

const ProfileDropdown: React.FC = () => {
  return (
    <div className="dropdown dropdown-end dropdown-hover">
      <div className="avatar">
        <div className="size-8 rounded-full">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="user-icon"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a>User Name</a>
        </li>
        <li>
          <a>Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
