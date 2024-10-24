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
    <section className="flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 py-5 sm:py-24 w-full bg-slate-100">
      <div className="flex flex-col max-w-full w-full lg:w-[1200px]">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D91656] mb-12 text-center">
          Our Services
        </h2>
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
