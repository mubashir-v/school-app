import React from "react";

import { PiStudentBold } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
function SessionDetails() {
  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex items-center justify-center w-full border h-10">
        <p>Session  Details</p>
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-9/12 p-8">
          <ul className="w-full divide-y divide-gray-200 bg-white p-4">
            <li className="pb-3 sm:pb-4">
              <div className="flex items-center justify-center w-full">
            
                  <p className="text-sm font-medium text-gray-900 truncate">
                  Attended Students
                  </p>
              
                
              </div>
            </li>
            <li className="py-3 sm:py-4 px-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="shrink-0">
                  <div
                    className="flex items-center justify-center w-10 h-10 border rounded-full"
                   
                  ><p className="text-gray-500 text-lg">BG</p></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center font-semibold text-xl text-green-700">
                <TiTick  />
                </div>
              </div>
            </li>
          

            <li className="py-3 sm:py-4 px-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="shrink-0">
                  <div
                    className="flex items-center justify-center w-10 h-10 border rounded-full"
                   
                  ><p className="text-gray-500 text-lg">BG</p></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center font-semibold text-xl text-green-700">
                <TiTick  />
                </div>
              </div>
            </li>

            <li className="py-3 sm:py-4 px-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="shrink-0">
                  <div
                    className="flex items-center justify-center w-10 h-10 border rounded-full"
                   
                  ><p className="text-gray-500 text-lg">BG</p></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center font-semibold text-xl text-green-700">
                <TiTick  />
                </div>
              </div>
            </li>


            <li className="py-3 sm:py-4 px-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="shrink-0">
                  <div
                    className="flex items-center justify-center w-10 h-10 border rounded-full"
                   
                  ><p className="text-gray-500 text-lg">BG</p></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center font-semibold text-xl text-green-700">
                <TiTick  />
                </div>
              </div>
            </li>


            <li className="py-3 sm:py-4 px-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="shrink-0">
                  <div
                    className="flex items-center justify-center w-10 h-10 border rounded-full"
                   
                  ><p className="text-gray-500 text-lg">BG</p></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Bonnie Green
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    email@flowbite.com
                  </p>
                </div>
                <div className="inline-flex items-center font-semibold text-xl text-green-700">
                <TiTick  />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Side panel */}

        <div className="flex flex-col min-h-screen flex-1 p-4">
          <div className="w-full h-full rounded-lg border bg-white">
            <div className="flex w-full  p-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10">
                  <div className="flex items-center justify-center w-24 h-24 mb-3 mt-3 rounded-full border   ">
                    <p className="text-4xl text-gray-500">
                      <IoBookOutline />
                    </p>
                  </div>
                  <h5 className="mb-1 text-lg font-medium text-gray-900 ">
                    Mathematics
                  </h5>
                  <span className="text-xs text-gray-500 ">Topic : Number System</span>
                  <div className="flex flex-col gap-4 w-full mt-4 md:mt-6 p-2">
                    <div className="flex w-full items-center gap-2 justify-center border-b p-2 ">
                      <PiStudentBold />{" "}
                      <p className="text-xs text-gray-500">
                        {" "}
                        Total Students: 500
                      </p>
                    </div>

                    <div className="flex w-full items-center gap-2 justify-center border-b p-2">
                      <IoMdTimer />{" "}
                      <p className="text-xs text-gray-500">
                        : 5hr
                      </p>
                    </div>

                    <div className="flex w-full items-center gap-2 justify-center border-b p-2">
                      <FaChalkboardTeacher />{" "}
                      <p className="text-xs text-gray-500">
                        Teacher : Diya Shihab
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SessionDetails;
