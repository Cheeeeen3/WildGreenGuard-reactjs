import React from "react";
import { useState } from "react";
import Tabs from "./Tabs.tsx";
import Shortcut from "./Shortcut.tsx";
import Description from "./Description.tsx";

const Info: React.FC<{ id: number }> = ({ id }) => {
  const [toggle, setToggle] = useState(1);
  const shortcutStyle =
    "list-none mx-auto my-12 flex flex-col justify-items-center sm:flex-row sm:justify-items-center gap-4";
  const desStyle = "w-4/5 flex flex-col gap-6 mx-auto";

  function handleToggle(id: number) {
    setToggle(id);
  }

  return (
    <>
      <Tabs display={toggle} handler={handleToggle} />
      <section>
        <ul className={toggle === 1 ? shortcutStyle : "hidden"}>
          <Shortcut
            id={1}
            plant={"Flossflower"}
            imageUrl={
              "https://storage.googleapis.com/green01/plant/Flossflower.jpg"
            }
          />
          <Shortcut
            id={3}
            plant={"Pilose Beggarticks"}
            imageUrl={
              "https://storage.googleapis.com/green01/plant/Pilose%20Beggarticks.jpg"
            }
          />
        </ul>
        <ul className={toggle === 2 ? shortcutStyle : "hidden"}>
          <Shortcut
            id={2}
            plant={"Spiny Pigweed"}
            imageUrl={
              "https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
            }
          />
          <li>part2</li>
        </ul>
      </section>
      <hr className="border-gray-200 mb-4"></hr>
      <section>
        <ul className={toggle === 1 ? desStyle : "hidden"}>
          <Description
            id={1}
            plant={"Flossflower"}
            imageUrl={
              "https://storage.googleapis.com/green01/plant/Flossflower.jpg"
            }
            scientificName={"Ageratum houstonianum"}
            info={
              "It is an annual plant with a height ranging from 30 to 100 cm. The leaves are ovate to triangular-ovate, with a length of 2 to 7 cm, having a blunt apex and a shallow heart-shaped base. The edges of the leaves are serrated. It is distributed in regions with an elevation of up to 1,300 m."
            }
          />
        </ul>
        <ul className={toggle === 2 ? desStyle : "hidden"}>
          <Description
            id={2}
            plant={"Spiny Pigweed"}
            imageUrl={
              "https://storage.googleapis.com/green01/plant/Spiny%20Pigweed.jpg"
            }
            scientificName={"Amaranthus_spinosus"}
            info={
              "The plant reaches a height of approximately 30 to 100 cm. The flower color is green. It is distributed throughout Taiwan, particularly commonly found around cultivated fields."
            }
          />
        </ul>
      </section>
    </>
  );
};

export default Info;
