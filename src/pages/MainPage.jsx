import React from "react";
import LinkTiles from "../components/mainPage/LinkTiles";
import AuthCard from "../components/mainPage/AuthCard";
import Progress from "../components/mainPage/Progress";
import GiveBack from "../components/mainPage/GiveBack";
import Testimonial from "../components/mainPage/Testimonial";
import PartnerWithUs from "../components/mainPage/PartnerWithUs";
import Sponsor from "../components/mainPage/Sponsor";
import Testimonials from "../components/mainPage/Testimonial";

function MainPage() {
  return (
    <div className="flex flex-col  w-full p-4">
      <div className="flex flex-col md:flex-row w-full h-1/2 overflow-scroll">
        <div className="flex md:h-full p-1 w-full md:w-1/3">
          <AuthCard />
        </div>
        <div className="flex md:h-full w-full md:w-2/3 p-1">
          <LinkTiles />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-row w-full">
        <div className="flex h-64 w-1/2 md:w-1/4 p-2 "><Progress/></div>
        <div className="flex h-64 w-1/2 md:w-1/4 p-2 "><GiveBack/></div>
        <div className="flex h-64 w-1/2 md:w-1/4 p-2 items-center"><PartnerWithUs/></div>
        <div className="flex h-64 w-1/2 md:w-1/4 p-2 items-center"><Sponsor/></div>
      </div>

      <div className="flex h-64 w-full">

        <Testimonials/>
      </div>
      
    </div>
  );
}

export default MainPage;
