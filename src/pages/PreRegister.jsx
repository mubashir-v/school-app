import React from "react";
import { LuSchool } from "react-icons/lu";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";
function PreRegister() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-300">
      <div className="flex gap-1 h-48 w-96 border rounded bg-white shadow-md">
        <Link className="flex w-full gap-2 h-full items-center hover:bg-blue-400 justify-center flex-col">
          <div className="flex h-24 w-24 border rounded items-center justify-center">
            <LuSchool className="text-5xl" />
          </div>
          <div className="text-sm text-gray-500">School Register</div>
        </Link>
        <Link className="flex w-full gap-2 h-full items-center hover:bg-blue-400  justify-center flex-col">
          <div className="flex h-24 w-24 border rounded items-center justify-center">
            <IoMdSchool className="text-5xl" />
          </div>
          <div className="text-sm text-gray-500">Student Register</div>
        </Link>
      </div>
    </div>
  );
}

export default PreRegister;
