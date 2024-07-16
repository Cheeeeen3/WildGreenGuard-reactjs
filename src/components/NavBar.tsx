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
  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let menuBtn = document.getElementById("menu-btn");
    menuBtn?.setAttribute(
      "aria-expanded",
      (menuBtn.ariaExpanded !== "true").toString(),
    );
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start z-10">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <NavLinkPanel page={page} handlePageClick={handlePageClick} />
              <a className="btn btn-sm [@media(min-width:400px)]:hidden">Lang Switch</a>
            </ul>
          </div>
          <Link to="/" onClick={handlePageClick}>
            <div className="btn btn-ghost flex flex-row flex-nowrap items-center">
              <img
                src="https://taiwan.wwg.solutions/static/plants/images/earth_nature_futaba.png"
                alt="icon"
                width={34}
                height={34}
              />
              <strong className="inline-block py-1.5 align-middle text-success-content">
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
        <div className="navbar-end z-0 flex space-x-4">
          <a className="hidden [@media(min-width:400px)]:btn">Lang Switch</a>
          <ProfileDropdown />
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
