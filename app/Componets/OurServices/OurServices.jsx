"use client";

import React, { useState } from "react";
import ServiceTabs from "./ServiceTabs";
import ServiceContent from "./ServiceContent";

const OurServices = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const services = [
    { id: "seo", name: "SEO" },
    { id: "ppc", name: "PPC" },
    { id: "content", name: "Content Marketing" },
    { id: "social", name: "Social Media" },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-5 sm:py-24 w-full bg-[#1D2731]">
      <div className="flex flex-col w-full container mx-auto">
        <h1 className="text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in-up">
          Our Clients
        </h1>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          <ServiceTabs
            services={services}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ServiceContent activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
  a;
};

export default OurServices;
