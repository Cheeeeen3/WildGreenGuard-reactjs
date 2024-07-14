import React, { useRef, useState } from "react";
import { GoHistory } from "react-icons/go";

import Records from "./Records.tsx";
import Chatbox from "./Chatbox.tsx";

const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState("");
  const [sidebar, setSideBar] = useState("OFF");

  const historyRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSideBar(sidebar === "ON" ? "OFF" : "ON");
    historyRef.current?.classList.toggle("hidden");
  };

  return (
    <div className="mx-auto flex flex-col px-4 py-4">
      <span className="mx-4 text-left text-2xl font-bold text-indigo-600">
        Chat
      </span>
      <hr className="my-4" />
      <div className="relative flex flex-row gap-4 sm:divide-x">
        <div className="drawer lg:drawer-open">
          <input id="drawer" type="checkbox" className="drawer-toggle" />
          <label
            htmlFor="drawer"
            className="btn btn-ghost drawer-button rounded-box hover:bg-indigo-200 lg:hidden"
          >
            <GoHistory className="text-xl font-black text-neutral" />
          </label>
          <div className="drawer-content flex flex-col">
            {/* chatbox component */}
            <Chatbox />
          </div>
          <div className="drawer-side absolute inset-y-0 left-0 z-10">
            <label
              htmlFor="drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            {/* records component */}
            <Records />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
