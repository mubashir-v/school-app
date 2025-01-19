import React from "react";
import { MdVolunteerActivism } from "react-icons/md";
import { Gi3dStairs } from "react-icons/gi";
import { LiaSchoolSolid } from "react-icons/lia";
import { CiLink } from "react-icons/ci";
function LinkTiles() {
  return (
    <div className="flex flex-col bg-white shadow-md border rounded-lg w-full h-full p-2 overflow-scroll items-center">
      <div className="flex border-b h-16 w-full items-center justify-center">
        <p className="text-sm text-gray-400">Quick Access</p>
      </div>
      <nav className="flex w-full md:flex-wrap flex-col p-4">
        <div
          role="button"
          className="text-slate-800 flex w-full md:w-1/2 items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center rounded-full border p-4">
            <Gi3dStairs className="text-3xl" />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">Mission</h6>
            <p className="text-slate-500 text-sm">Explore Our Mission</p>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800 flex w-full md:w-1/2 items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center rounded-full border p-4">
            <MdVolunteerActivism className="text-3xl" />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">Volunteer</h6>
            <p className="text-slate-500 text-sm">
              Join the Volunteer Comunity
            </p>
          </div>
        </div>
        <div
          role="button"
          className="text-slate-800 flex w-full md:w-1/2 items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center rounded-full border p-4">
            <LiaSchoolSolid className="text-3xl" />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">School</h6>
            <p className="text-slate-500 text-sm">Enroll Schoool</p>
          </div>
        </div>

        <div
          role="button"
          className="text-slate-800 flex w-full md:w-1/2 items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
        >
          <div className="mr-4 grid place-items-center rounded-full border p-4">
            <CiLink className="text-3xl" />
          </div>
          <div>
            <h6 className="text-slate-800 font-medium">Other Link</h6>
            <p className="text-slate-500 text-sm">Other Link Desc</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LinkTiles;
