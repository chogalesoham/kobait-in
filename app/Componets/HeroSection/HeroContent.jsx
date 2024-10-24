import React from "react";

const HeroContent = () => {
  return (
    <div className="max-w-2xl mx-auto lg:mx-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">
        Powerful SEO tools for your growing business
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">
        Boost your online visibility, attract more customers, and outrank your
        competitors with our comprehensive SEO platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
          Start free trial
        </button>
        <button className="bg-white text-pink-500 font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full border-2 border-pink-500 hover:bg-pink-50 transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base">
          Schedule a demo
        </button>
      </div>
      <p className="mt-4 text-xs sm:text-sm text-gray-500">
        No credit card required. Get started in minutes.
      </p>
    </div>
  );
};

export default HeroContent;
