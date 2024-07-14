import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("");

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

// {/* <nav className="bg-gray-800">
//   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//     <div className="relative flex h-16 items-center justify-between">
//       <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//         {/* <!-- Mobile menu button--> */}
//         <button
//           type="button"
//           id="menu-btn"
//           className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//           onClick={handleMenuClick}
//           aria-controls="mobile-menu"
//           aria-expanded="false"
//         >
//           <span className="absolute -inset-0.5"></span>
//           <span className="sr-only">Open main menu</span>
//           {/* Icon when menu is closed. Menu open: "hidden", Menu closed: "block" */}
//           {!isOpen && (
//             <svg
//               className="block h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//               />
//             </svg>
//           )}
//           {/* <!--Icon when menu is open. Menu open: "block", Menu closed: "hidden"--> */}
//           {isOpen && (
//             <svg
//               className="block h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               aria-hidden="true"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//       <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//         <Link to="/" onClick={handlePageClick}>
//           <div className="flex flex-shrink-0 items-center">
//             {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" /> */}

//             <img
//               className="icon"
//               src="https://taiwan.wwg.solutions/static/plants/images/earth_nature_futaba.png"
//               alt="icon"
//               width="34"
//               height="34"
//             />
//             <strong className="inline-block py-1.5 align-middle text-gray-300">
//               WildGreenGuard
//             </strong>
//           </div>
//         </Link>
//         <div className="hidden sm:ml-6 sm:block">
//           <div className="ml-4 flex space-x-4">
//             {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//             <NavLinkPanel page={page} handlePageClick={handlePageClick} />
//           </div>
//         </div>
//       </div>
//       <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//         <button
//           type="button"
//           className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//         >
//           {/* Need from TJ: double click toggle the white ring */}
//           <span className="absolute -inset-1.5"></span>
//           <span className="sr-only">View notifications</span>
//           <svg
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
//             />
//           </svg>
//         </button>

//         {/* <!-- Profile dropdown --> */}
//         <ProfileDropdown />
//       </div>
//     </div>
//   </div>

//   {/* <!-- Mobile menu, show/hide based on menu state. --> */}
//   {isOpen && (
//     <div className="sm:hidden" id="mobile-menu">
//       <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
//         {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
//         <NavLinkPanel page={page} handlePageClick={handlePageClick} />
//       </div>
//     </div>
//   )}
// </nav>; */}

interface panelProps {
  page: string;
  handlePageClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLinkPanel: React.FC<panelProps> = ({ page, handlePageClick }) => {
  const navLinks = [
    { to: "/", navName: "Info" },
    { to: "/info", navName: "Team" },
    { to: "/Chatroom", navName: "Chatroom" },
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
  return (
    <Link
      to={to}
      className="mx-2 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white aria-[current='page']:block aria-[current='page']:bg-gray-900 aria-[current='page']:text-white aria-[current='page']:hover:bg-gray-900"
      {...props}
    >
      {navName}
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
