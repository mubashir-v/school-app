import React from "react";
import { CiTimer } from "react-icons/ci";
import { PiStudentBold } from "react-icons/pi";
function Progress() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full items-center justify-center border p-2 rounded-lg bg-white">
      <div className="flex h-full w-full md:w-1/2 p-2">
        <div className="flex flex-col items-center w-full justify-center rounded-lg border p-2">
          <div className="flex w-full h-1/3  rounded items-center justify-center">
            <CiTimer className="text-2xl" />
          </div>
          <div className="flex felx-1">
            <p className="text-gray-500 font-medium">150+ Hrs</p>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full md:w-1/2 p-2">
        <div className="flex flex-col items-center w-full justify-center rounded-lg border p-2">
          <div className="flex w-full h-1/3  rounded items-center justify-center">
            <PiStudentBold className="text-2xl" />
          </div>
          <div className="flex felx-1">
            <p className="text-gray-500 font-medium">150+ Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
