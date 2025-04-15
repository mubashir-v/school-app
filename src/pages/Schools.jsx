import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { PiListNumbersLight } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { MdFormatListBulleted } from "react-icons/md";
import { Link } from 'react-router-dom';
function Schools() {
  return (
       <div className="flex flex-col h-full w-full">
          <div className="flex items-center justify-center w-full border h-10">
            <p>Schools</p>
          </div>
    
          <div className="flex flex-wrap overflow-y-auto  w-full p-4">
            <Link to={'/schooldetails'} className="flex cursor-pointer w-2/12 max-h-64 p-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10">
                  <div className="flex items-center justify-center w-24 h-24 mb-3 mt-3 rounded-full border   ">
                    <p className="text-4xl text-gray-500"><LuSchool/></p>
                  </div>
                  <h5 className="mb-1 text-lg font-medium text-gray-900 ">
                    Base School
                  </h5>
                  <span className="text-xs text-gray-500 ">Vazhakkad</span>
                  <div className="flex flex-row w-full mt-4 md:mt-6">
                    <div className="flex w-1/2 items-center justify-center">
                      <MdFormatListBulleted />{" "}
                      <p className="text-xs text-gray-500">: 2 Sessions </p>
                    </div>
                    <div className="flex w-1/2 items-center justify-center ">
                      <PiStudentBold />{" "}
                      <p className="text-xs text-gray-500">: 10 Students </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    
            <Link to={'/schooldetails'} className="flex cursor-pointer w-2/12 max-h-64 p-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10">
                  <div className="flex items-center justify-center w-24 h-24 mb-3 mt-3 rounded-full border   ">
                    <p className="text-4xl text-gray-500"><LuSchool/></p>
                  </div>
                  <h5 className="mb-1 text-lg font-medium text-gray-900 ">
                    Base School
                  </h5>
                  <span className="text-xs text-gray-500 ">Vazhakkad</span>
                  <div className="flex flex-row w-full mt-4 md:mt-6">
                    <div className="flex w-1/2 items-center justify-center">
                      <MdFormatListBulleted />{" "}
                      <p className="text-xs text-gray-500">: 2 Sessions </p>
                    </div>
                    <div className="flex w-1/2 items-center justify-center ">
                      <PiStudentBold />{" "}
                      <p className="text-xs text-gray-500">: 10 Students </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    

            <Link to={'/schooldetails'} className="flex cursor-pointer w-2/12 max-h-64 p-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10">
                  <div className="flex items-center justify-center w-24 h-24 mb-3 mt-3 rounded-full border   ">
                    <p className="text-4xl text-gray-500"><LuSchool/></p>
                  </div>
                  <h5 className="mb-1 text-lg font-medium text-gray-900 ">
                    Base School
                  </h5>
                  <span className="text-xs text-gray-500 ">Vazhakkad</span>
                  <div className="flex flex-row w-full mt-4 md:mt-6">
                    <div className="flex w-1/2 items-center justify-center">
                      <MdFormatListBulleted />{" "}
                      <p className="text-xs text-gray-500">: 2 Sessions </p>
                    </div>
                    <div className="flex w-1/2 items-center justify-center ">
                      <PiStudentBold />{" "}
                      <p className="text-xs text-gray-500">: 10 Students </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    

            <Link to={'/schooldetails'} className="flex cursor-pointer w-2/12 max-h-64 p-2">
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
                <div className="flex flex-col items-center pb-10">
                  <div className="flex items-center justify-center w-24 h-24 mb-3 mt-3 rounded-full border   ">
                    <p className="text-4xl text-gray-500"><LuSchool/></p>
                  </div>
                  <h5 className="mb-1 text-lg font-medium text-gray-900 ">
                    Base School
                  </h5>
                  <span className="text-xs text-gray-500 ">Vazhakkad</span>
                  <div className="flex flex-row w-full mt-4 md:mt-6">
                    <div className="flex w-1/2 items-center justify-center">
                      <MdFormatListBulleted />{" "}
                      <p className="text-xs text-gray-500">: 2 Sessions </p>
                    </div>
                    <div className="flex w-1/2 items-center justify-center ">
                      <PiStudentBold />{" "}
                      <p className="text-xs text-gray-500">: 10 Students </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    
            
          </div>
        </div>
  )
}

export default Schools