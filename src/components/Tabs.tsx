import React from "react";

function Tabs() {
  return (
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <a
            className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            href="#"
          >
            Invasive Plants
          </a>
        </li>
        <li className="mr-1">
          <a
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            href="#"
          >
            Native Plants
          </a>
        </li>
      </ul>
  );
}

export default function BodyTabs() {
    <Tabs />
}
