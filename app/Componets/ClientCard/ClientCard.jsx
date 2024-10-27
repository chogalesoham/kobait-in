import React from "react";

const ClientCard = ({ cardBg, title, logo, rating }) => {
  return (
    <div
      className="icon min-w-[350px] w-full max-w-xs bg-cover bg-center rounded-lg shadow-lg h-80 opacity-0 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-end items-center text-white p-4 relative"
      style={{
        backgroundImage: `${cardBg}, url(${logo.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-animation="fadeInLeft"
    >
      <div className="flex items-start flex-col justify-between w-full">
        <img
          className="w-full h-[60%] object-contain rounded-lg mb-4"
          src={logo.src}
          alt="Client Logo"
        />
        <div className=" flex h-[40%] flex-col justify-start items-start">
          <div className="flex gap-4 items-start mb-4">
            <span className="text-lg font-bold text-start">{rating}</span>
            <span className="text-sm text-start">{title}</span>
          </div>
          <button className="text-lg bold text-orange-700">
            See Case Study
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
