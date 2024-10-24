import React from "react";

const ServiceTabs = ({ services, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap lg:flex-col gap-4 mb-8 lg:mb-0 lg:w-1/4">
      {services.map((service) => (
        <button
          key={service.id}
          className={`px-6 py-3 text-sm sm:text-base font-medium rounded-lg transition-all transform hover:scale-105 ${
            activeTab === service.id
              ? "bg-[#D91656] text-[#FFFFFF] shadow-lg"
              : "bg-[#FEF9F2] text-[#1F2937] hover:bg-[#D91656] hover:text-[#FFFFFF]"
          }`}
          onClick={() => setActiveTab(service.id)}
        >
          {service.name}
        </button>
      ))}
    </div>
  );
};

export default ServiceTabs;
