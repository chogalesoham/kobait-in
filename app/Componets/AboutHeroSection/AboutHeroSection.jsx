import React from "react";
import aboutImg from "@/app/images/about.webp";

const AboutHeroSection = () => {
  return (
    <div className=" pt-20 bg-[#1D2731]">
      <div className=" py-5 flex items-center justify-center flex-col  bg-gradient-to-r from-[#FAA900] via-[#ED1313] to-[#D54AFF]">
        <div className=" container mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center m-0 text-white py-4 pl-6">
            About Kobait
          </h1>
          <p className=" text-2xl py-2 text-white text-center">
            Founded in 2009, Kobait operates from offices in India and USA and
            helps businesses accelerate growth without breaking the bank!
          </p>
        </div>
      </div>

      <div className=" flex items-center justify-center px-16 py-12 container mx-auto">
        <div className=" w-[50%]">
          <h2 className=" text-6xl text-white font-bold  ">
            Our unique global <br /> service
          </h2>
          <p className=" text-white text-lg my-6 text-justify mr-10">
            Infrastructure allows us to deliver exceptional quality of service
            that has helped us earn the trust of the world’s largest
            enterprises. With our collective experience complemented with our
            periodic skill upgrades, we are always at the helm of affairs,
            delivering unmatched value to our clients, irrespective of the
            industry sector.
          </p>
          <p className=" text-white text-lg my-6 text-justify mr-10">
            Infrastructure allows us to deliver exceptional quality of service
            that has helped us earn the trust of the world’s largest
            enterprises. With our collective experience complemented with our
            periodic skill upgrades, we are always at the helm of affairs,
            delivering unmatched value to our clients, irrespective of the
            industry sector.
          </p>
        </div>
        <div className=" w-[50%]">
          <img
            className=" h-fit object-cover rounded-xl"
            src={aboutImg.src}
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
