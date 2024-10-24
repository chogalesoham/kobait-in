"use Client";
import React from "react";
import HeroContent from "./HeroContent";
import ClientLogos from "./ClientLogos";
import Navigation from "./Navigation";

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      <Navigation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 lg:py-16">
          {/* Left side: Hero content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <HeroContent />
          </div>

          {/* Right side: Image or Form */}
          <div className="w-full lg:w-1/2 flex justify-center hidden lg:flex">
            <img
              src="https://knowledge.hubspot.com/hs-fs/hubfs/crm-free-hero-asset-spring-24@2x.webp?width=1120&height=918&name=crm-free-hero-asset-spring-24@2x.webp"
              alt="Hero Image"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Client logos section */}
      <div className="bg-[#640D5F] py-8 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-slate-200 font-semibold mb-6 text-lg sm:text-xl">
            Trusted by over 50 companies ...
          </h3>
          <ClientLogos />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
