import React from "react";
import aboutImg from "@/app/images/about.webp";

const AboutHeroSection = () => {
  return (
    <div className="pt-20 bg-[#1D2731]">
      <div className="py-10 flex items-center justify-center flex-col bg-[#ff3333]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-white py-4">
            About Kobait
          </h1>
          <p className="text-lg md:text-2xl py-2 text-white text-center">
            Founded in 2009, Kobait operates from offices in India and USA and
            helps businesses accelerate growth without breaking the bank!
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 py-12 container mx-auto">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mb-4">
            Our unique global <br /> service
          </h2>
          <p className="text-white text-base md:text-lg my-6 text-justify">
            Infrastructure allows us to deliver exceptional quality of service
            that has helped us earn the trust of the world’s largest
            enterprises. With our collective experience complemented with our
            periodic skill upgrades, we are always at the helm of affairs,
            delivering unmatched value to our clients, irrespective of the
            industry sector.
          </p>
          <p className="text-white text-base md:text-lg my-6 text-justify">
            Infrastructure allows us to deliver exceptional quality of service
            that has helped us earn the trust of the world’s largest
            enterprises. With our collective experience complemented with our
            periodic skill upgrades, we are always at the helm of affairs,
            delivering unmatched value to our clients, irrespective of the
            industry sector.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src={aboutImg.src}
            alt="About Kobait"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
