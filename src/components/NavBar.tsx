import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

// import logo from "../assets/HomePage_WGG/earth_nature_futaba.png";
// import LngSwitch from "./LngSwitch.tsx";
// import ThemeController from "./ThemeController.tsx";

const NavBar: React.FC = () => {
  // const { t } = useTranslation();
  // const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("");
  // const [isLogin, setIsLogin] = useState(false);

  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    setPage(target.pathname);
  };
  // const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   let menuBtn = document.getElementById("menu-btn");
  //   menuBtn?.setAttribute(
  //     "aria-expanded",
  //     (menuBtn.ariaExpanded !== "true").toString(),
  //   );
  //   setIsOpen(!isOpen);
  // };

  return (
    <header>
      <nav className="bg-emerald-950">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="menu-btn"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-emerald-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={handleMenuClick}
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
                {!isOpen && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
                {/* <!--Icon when menu is open. Menu open: "block", Menu closed: "hidden"--> */}
                {isOpen && (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link to="/" onClick={handlePageClick}>
                <div className="flex flex-shrink-0 items-center">
                  {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}

                  <img
                    className="icon"
                    src={logo}
                    alt="icon"
                    width="34"
                    height="34"
                  />
                  <strong className="inline-block py-1.5 align-middle text-gray-300">
                    WildGreenGuard
                  </strong>
                </div>
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="ml-4 flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <NavLinkPanel page={page} handlePageClick={handlePageClick} />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <LngSwitch />
              <ThemeController />  
              {/* <!-- Profile dropdown --> */}
              {isLogin ? <ProfileDropdown /> : <button className="btn"><Link to="/Login">{t("login")}</Link></button>}
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
              <NavLinkPanel page={page} handlePageClick={handlePageClick} />
            </div>
          </div>
        )}
      </nav>
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
    <Link
      to={to}
      className="rounded-md px-3 py-2 font-custom-font text-sm font-medium text-gray-300 hover:bg-emerald-900 hover:text-white aria-[current='page']:block aria-[current='page']:bg-emerald-800 aria-[current='page']:text-white aria-[current='page']:hover:bg-emerald-900"
      {...props}
    >
      {t(navName)}
    </Link>
  );
};

const ProfileDropdown: React.FC = () => {
  const [animation, setAnimation] = useState("animate-close-menu hidden");

  const handleClick = () => {
    let newAnimation =
      animation === "animate-open-menu"
        ? "animate-close-menu hidden"
        : "animate-open-menu";
    setAnimation(newAnimation);
  };

  return (
    <div className="relative ml-3">
      <div onClick={handleClick}>
        <button
          type="button"
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded={`${animation === "animate-open-menu" ? "true" : "false"}`}
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>

      <div
        className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${animation}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabIndex={-1}
      >
        {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-0"
        >
          Your Profile
        </a>
        <hr />
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-1"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          tabIndex={-1}
          id="user-menu-item-2"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default NavBar;
