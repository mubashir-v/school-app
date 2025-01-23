import React from "react";

function Testimonial() {
  return (
    <div className="flex h-full shrink-0 w-1/2 md:w-1/6 items-center justify-center border rounded-lg bg-white">
      <figure className="flex flex-col items-center justify-center p-8 text-center  border-gray-200 ">
        <blockquote className="max-w-2xl mx-auto  text-gray-500 lg:mb-8 dark:text-gray-400">
          
          <p className="text-xs">
            If you care for your time, I hands down would go with this."
          </p>
        </blockquote>
        <figcaption className="flex items-center justify-center ">
          <img
            className="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div className="text-sm text-gray-700">Bonnie Green</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 ">
              Developer 
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}

export default Testimonial;
