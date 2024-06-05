import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import getPlantData from "./PlantData.tsx";

import Tabs from "./Tabs.tsx";
import Shortcut from "./Shortcut.tsx";
import Description from "./Description.tsx";

interface plantData {
    name: string,
    scientificName: string,
    imageUrl: string,
    isInvasive: boolean,
    info: string
}

export async function loader() {
  const PlantDatas = await getPlantData();
  return PlantDatas;
}

const Info: React.FC = () => {
  const [toggle, setToggle] = useState(1);
  const PlantData = useLoaderData() as plantData[];

  const InvasiveDatas = PlantData.filter(
    (data) => data.isInvasive === true
  );
  const NativeDatas = PlantData.filter(
    (data) => data.isInvasive === false
  );
  const shortcutStyle =
    "list-none mx-auto sm:p-5 my-12 flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-start gap-4";
  const desStyle = "w-4/5 flex flex-col gap-6 mx-auto";

  function handleToggle(id: number) {
    setToggle(id);
  }

  return (
    <>     
      <Tabs display={toggle} handler={handleToggle} />
      <section>
        <ul className={toggle === 1 ? shortcutStyle : "hidden"}>
          {InvasiveDatas.map((InvasiveData) => (
            <Shortcut
              plant={InvasiveData.name}
              imageUrl={InvasiveData.imageUrl}
              key={`${InvasiveData.name}-shortcut`}
            />
          ))}
        </ul>
        <ul className={toggle === 2 ? shortcutStyle : "hidden"}>
          {NativeDatas.map((NativeData) => (
            <Shortcut plant={NativeData.name} imageUrl={NativeData.imageUrl} key={`${NativeData.name}-shortcut`}/>
          ))}
        </ul>
      </section>
      <hr className="border-gray-200 mb-4"></hr>
      <section>
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
      </section>
    </>
  );
};

export default Info