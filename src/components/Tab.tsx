import React from "react";

interface props {
  tabName: string,
  style: string,
  handler: Function
}

const Tab: React.FC<props> = ({ tabName, style, handler }) => {
  
  return (
    <>
      <li className="me-2" onClick={ ()=>handler() }>
        <a
          href="#"
          className= { style }
          aria-current="page"
        >
          { tabName }
        </a>
      </li>
    </>
  );
};

export default Tab;
