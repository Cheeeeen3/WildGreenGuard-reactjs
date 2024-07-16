import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer id="footer" className="text-xs font-custom-font font-medium text-neutral-400 bottom-0">
        <div className="max-w-9xl mx-auto px-4 py-5 flex flex-row justify-end text-center sm:text-right sm:px-5 sm:gap-2">
          <p>Copyright &copy; <span id='year'>2024</span></p>
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
