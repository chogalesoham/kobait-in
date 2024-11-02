import React from "react";
import { LuMail } from "react-icons/lu";

const GetInTouch = () => {
  return (
    <div className="w-full bg-[#ff3333] py-10 lg:py-20 px-4 lg:px-10">
      <div className="container mx-auto max-w-[1034px]">
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
          <h2 className="text-3xl lg:text-[50px] text-white font-bold leading-tight mb-4 lg:mb-0">
            Get <br className="hidden lg:block" /> in Touch
          </h2>
          <p className="text-lg lg:text-xl text-white max-w-md mb-4 lg:mb-0">
            Contact Kobait for a 360-degree <br className="hidden lg:block" />{" "}
            marketing plan
          </p>
        </div>

        <hr className="my-5 border-white opacity-50" />

        <form className="mt-8 flex flex-col md:flex-row items-center justify-around gap-4 lg:gap-6">
          <input
            className="flex-1 md:flex-initial w-full md:w-1/3 lg:w-auto px-4 py-3 rounded-xl font-medium border border-transparent focus:border-white focus:outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="flex-1 md:flex-initial w-full md:w-1/3 lg:w-auto px-4 py-3 rounded-xl font-medium border border-transparent focus:border-white focus:outline-none"
            type="text"
            placeholder="Your Business Email"
          />
          <input
            className="flex-1 md:flex-initial w-full md:w-1/3 lg:w-auto px-4 py-3 rounded-xl font-medium border border-transparent focus:border-white focus:outline-none"
            type="text"
            placeholder="Your Phone"
          />
          <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold cursor-pointer">
            GET STARTED
            <LuMail />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
