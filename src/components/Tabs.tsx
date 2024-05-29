import React from "react";
import Tab from './Tab.tsx'

const tabNames = ['Invasive Plants', 'Native Plants']

const active =
  "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const inactive =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

interface props {
  display: number,
  handler: Function
}

const Tabs: React.FC<props> = ({ display, handler }) => {


  return (
    <>
      <section className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div>
          <ul className="flex justify-center flex-wrap -mb-px">
            {tabNames.map(tabname => 
              tabNames.indexOf(tabname) + 1 === display ?
              <Tab tabName={tabname} style={ active } handler={ ()=>handler(tabNames.indexOf(tabname) + 1) } key={tabname}/> :
              <Tab tabName={tabname} style={ inactive } handler={ ()=>handler(tabNames.indexOf(tabname) + 1) } key={tabname}/>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Tabs;
