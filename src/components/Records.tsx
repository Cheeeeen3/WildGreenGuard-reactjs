import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

interface Record {
  plantName: string;
  saveUrl: string;
  saveTime: Date;
}

const Records: React.FC = () => {
  const placeholder: Record = {
    plantName: "Flossflower",
    saveUrl: "https://storage.googleapis.com/green01/plant/Flossflower.jpg",
    saveTime: new Date(),
  };
  const [records, setRecords] = useState<Array<Record>>([placeholder]);

  // useEffect(() => {
  //   axios
  //     .get("/user/records/<plantName>")
  //     .then((response) => {
  //       setRecords(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className="flex min-h-full w-64 flex-col space-y-2 bg-violet-50 px-2 py-4 text-base-content md:w-72 lg:w-80">
      <span className="text-center text-xl font-semibold text-indigo-500">
        History
      </span>
      <button className="rounded-md bg-gray-200 hover:outline-blue-500 hover:ring-2 hover:ring-offset-1">
        <div className="flex items-center">
          <img
            src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
            alt="Flossflower"
            className="size-8 rounded-full"
          />
          <span className="px-4">Flossflower</span>
        </div>
        {/* <div className="absolute mt-1 w-48 rounded-md border border-gray-300 bg-white shadow-lg">
          <div className="flex cursor-pointer items-center px-2 py-2 hover:bg-indigo-100">
            <img
              src="https://storage.googleapis.com/green01/plant/Flossflower.jpg"
              alt="Flossflower"
              className="mr-2 h-8 w-8 rounded-full"
            />
            Flossflower
          </div>
        </div> */}
      </button>
      {/* <input type="text" className="rounded-md bg-gray-200 hover:ring-2 hover:outline-blue-500 hover:ring-offset-1" /> */}
      <div className="flex flex-col space-y-2">
        {records.length > 0 &&
          records.map((record) => (
            <figure className="flex flex-row space-x-1 rounded-md bg-slate-200 hover:scale-105 hover:bg-indigo-300" key={record.saveUrl}>
              <img
                src={record.saveUrl}
                alt={record.plantName}
                className="order-1 size-14 rounded-lg"
              />
              <figcaption className="order-2 flex flex-col space-y-1 px-6">
                <h4>{record.plantName}</h4>
                <i className="text-sm">
                  {format(record.saveTime, "yyyy-MM-dd")}
                </i>
              </figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
};

export default Records;
