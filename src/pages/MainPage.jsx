import React from "react";
import LinkTiles from "../components/mainPage/LinkTiles";
import AuthCard from "../components/mainPage/AuthCard";

function MainPage() {
  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex flex-col md:flex-row w-full h-1/2">
        <div className="flex md:h-full p-1 w-full md:w-1/3">
          <AuthCard />
        </div>
        <div className="flex md:h-full w-full md:w-2/3 p-1">
          <LinkTiles />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
