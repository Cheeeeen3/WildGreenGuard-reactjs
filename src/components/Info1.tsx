import React from "react";
import { useState } from "react";

const Info1: React.FC = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id: number) {
    setToggle(id);
  }

  return (
    <>
      <section>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex justify-center flex-wrap -mb-px">
            <li className="me-2" onClick={() => updateToggle(1)}>
              <a
                href="#"
                className={toggle === 1 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
                aria-current="page"
              >
                Invasive Plants
              </a>
            </li>
            <li className="me-2" onClick={() => updateToggle(2)}>
              <a
                href="#"
                className={toggle === 2 ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
              >
                Native Plants
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div>
          <ul className="list-none mx-auto my-12 flex flex-col justify-items-center sm:flex-row sm:justify-items-center gap-4">
            <li className={toggle === 1 ? "flex-shortcutImg" : "hidden"}>
              <a href="#Flossflower" className="flex items-center">
                <img
                  src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
                  alt="Flossflower"
                  className="w-10 h-10 rounded-full border-2 border-gray-400"
                />
                <p className="ml-4">Flossflower</p>
              </a>
            </li>
            <li className={toggle === 2 ? "flex-shortcutImg" : "hidden"}>
              <a href="#Spiny Pigweed" className="flex items-center">
                <img
                  src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
                  alt="Spiny Pigweed"
                  className="w-10 h-10 rounded-full border-2 border-gray-400"
                />
                <p className="ml-4">Spiny Pigweed</p>
              </a>
            </li>
            <li className={toggle === 1 ? "flex-shortcutImg" : "hidden"}>
              <a href="#Pilose Beggarticks" className="flex items-center">
                <img
                  src="https://storage.googleapis.com/green01/plant/Pilose%20Beggarticks.jpg"
                  alt="Pilose Beggarticks"
                  className="w-10 h-10 rounded-full border-2 border-gray-400"
                />
                <p className="ml-4">Pilose Beggarticks</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr className="border-gray-200 mb-4"></hr>
      <section>
        <ul className="w-4/5 flex flex-col gap-6 mx-auto">
          <li
            id="Flossflower"
            className={toggle === 1 ? "flex-desImg" : "hidden"}
          >
            <img
              src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
              alt="Flossflower"
              className="w-60 h-60 rounded-md ml-4 mx-3"
            />
            <article className="ml-4">
              <h3 className="font-semibold hover:text-orange-400 hover:opacity-80">
                Flossflower
              </h3>
              <h6 className="italic mb-2">Invasive Species</h6>
              <p>
                It is an annual plant with a height ranging from 30 to 100 cm.
                The leaves are ovate to triangular-ovate, with a length of 2 to
                7 cm, having a blunt apex and a shallow heart-shaped base. The
                edges of the leaves are serrated. It is distributed in regions
                with an elevation of up to 1,300 m.
              </p>
            </article>
          </li>
          <li
            id="Spiny Pigweed"
            className={toggle === 2 ? "flex-desImg" : "hidden"}
          >
            <img
              src="https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
              alt="Spiny Pigweed"
              className="w-60 h-60 rounded-md ml-4 mx-3"
            />
            <article className="ml-4">
              <h3 className="font-semibold hover:text-orange-400 hover:opacity-80">
                Spiny Pigweed
              </h3>
              <h6 className="italic mb-2">Native Species</h6>
              <p>
                The plant reaches a height of approximately 30 to 100 cm. The
                flower color is green. It is distributed throughout Taiwan,
                particularly commonly found around cultivated fields.
              </p>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Info1;
