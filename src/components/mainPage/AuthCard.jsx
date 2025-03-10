import React from "react";
import { IoIosLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
function AuthCard() {
  return (
    <div className="flex flex-row h-full w-full border rounded-lg bg-white shadow-md ">
      <Link
        to={"/login"}
        className="flex w-1/2 py-6 hover:bg-blue-400 hover:shadow-lg rounded-lg"
      >
        <div className="flex flex-col gap-2 border-r w-full">
          <div className="flex h-2/3 px-10 md:p-10">
            <div className="flex items-center justify-center h-full w-full  border-2 rounded-md py-2">
              <IoIosLogIn className="text-3xl" />
            </div>
          </div>
          <div className="flex h-1/3">
            <div className="flex h-full w-full items-center justify-center">
              <p className="text-gray-600 md:text-lg text-xs">
                <span className="text-gray-500 font-bold"> Login</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Link to={"/register"} className="flex w-1/2 py-6 hover:bg-blue-400 hover:shadow-lg rounded-lg">
        <div className="flex flex-col gap-2 w-full">
          <div className="flex h-2/3 px-10 md:p-10">
            <div className="flex items-center justify-center h-full w-full  border-2 rounded-md py-2">
              <FaUserPlus className="text-3xl" />
            </div>
          </div>
          <div className="flex h-1/3">
            <div className="flex h-full w-full items-center p-2 justify-center">
              <p className="text-gray-600 md:text-sm text-center text-xs">
                New School / Volunteer  ?{" "}
                <span className="text-gray-500 font-bold"> Register</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AuthCard;
