import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="mt-4 bottom-0 bg-orange-100 text-xl font-medium"
      >
        <div className="max-w-9xl mx-auto flex flex-row justify-end px-4 py-5 text-center sm:gap-2 sm:px-5 sm:text-right">
          <p>
            Copyright &copy; <span id="year">2024</span>
          </p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
