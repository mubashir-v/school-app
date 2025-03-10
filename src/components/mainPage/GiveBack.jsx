import React from "react";
import { VscFeedback } from "react-icons/vsc";
function GiveBack() {
  return (
    <div className="flex h-full w-full items-center justify-center border rounded-lg bg-white">
      <div className="flex h-full w-full p-2">
        <div className="flex flex-col items-center w-full  rounded-lg border p-2 overflow-scroll scrollbar-hidden">
          <div className="flex w-full justify-center rounded items-center p-3">
            <VscFeedback className="text-5xl" />
          </div>
          <div className="flex  rounded shadow-lg flex-col felx-1 items-center justify-start w-full p-4">
            <p className="text-gray-500 text-sm  font-medium mb-2">
              Our mission{" "}
            </p>
            <p className="text-gray-500 text-xs">
              Lorum Ipsum Lorum Ipsum .Lorum Ipsum Lorum Ipsum Lorum Ipsum Lorum
              Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum Ipsum Lorum Ipsum Lorum Ipsum Lorum Ipsum .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiveBack;
