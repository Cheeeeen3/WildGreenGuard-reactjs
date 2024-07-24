import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import getPlantData from "./PlantData.tsx";

import Tabs from "./Tabs.tsx";
import Shortcut from "./Shortcut.tsx";
import Description from "./Description.tsx";

export interface plantData {
  name: string;
  scientificName: string;
  imageUrl: string;
  isInvasive: boolean;
  info: string;
}

export async function loader() {
  const PlantDatas = await getPlantData();
  return PlantDatas;
}

const Info: React.FC = () => {
  const PlantData = useLoaderData() as plantData[];
  const [toggle, setToggle] = useState(1);

  const InvasiveDatas = PlantData.filter((data) => data.isInvasive === true);
  const NativeDatas = PlantData.filter((data) => data.isInvasive === false);
  const shortcutStyle =
    "w-5/6 mx-auto my-4 gap-4 sm:grid sm:grid-cols-3 list-none";
  const desStyle = "w-4/5 mx-auto";

  function handleToggle(id: number) {
    setToggle(id);
  }

  return (
    <>
      <div className="relative z-10 mx-4 mt-4 sm:mx-12">
        <Tabs display={toggle} handler={handleToggle} />
        <ul className={toggle === 1 ? shortcutStyle : "hidden"}>
          {InvasiveDatas.map((InvasiveData) => (
            <Shortcut
              plant={InvasiveData.name}
              imageUrl={InvasiveData.imageUrl}
              key={`${InvasiveData.name}-shortcut`}
            />
          ))}
        </ul>
        <hr className={toggle === 1 ? "mb-8 border-gray-200" : "hidden"}></hr>
        <ul className={toggle === 1 ? desStyle : "hidden"}>
          {InvasiveDatas.map((InvasiveData) => (
            <Description
              plant={InvasiveData.name}
              imageUrl={InvasiveData.imageUrl}
              scientificName={InvasiveData.scientificName}
              info={InvasiveData.info}
              key={`${InvasiveData.name}-descroption`}
            />
          ))}
        </ul>
        <ul className={toggle === 2 ? shortcutStyle : "hidden"}>
          {NativeDatas.map((NativeData) => (
            <Shortcut
              plant={NativeData.name}
              imageUrl={NativeData.imageUrl}
              key={`${NativeData.name}-shortcut`}
            />
          ))}
        </ul>
        <hr className={toggle === 2 ? "mb-8 border-gray-200" : "hidden"}></hr>
        <ul className={toggle === 2 ? desStyle : "hidden"}>
          {NativeDatas.map((NativeData) => (
            <Description
              plant={NativeData.name}
              imageUrl={NativeData.imageUrl}
              scientificName={NativeData.scientificName}
              info={NativeData.info}
              key={`${NativeData.name}-descroption`}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Info;
