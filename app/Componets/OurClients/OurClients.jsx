"use client";

import React, { useEffect } from "react";
import "./OurClients.css";

const OurClients = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          const animation = entry.target.dataset.animation;
          entry.target.classList.toggle("animated", entry.isIntersecting);
          entry.target.classList.toggle(animation, entry.isIntersecting);
        }),
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-animation]")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="grid h-auto overflow-auto scroll-snap-y">
      {Array.from({ length: 1 }, (_, i) => (
        <section
          key={i}
          className={`bg-[#1c0c5b] text-white p-8 min-h-screen snap-start flex items-center justify-center`}
        >
          <div className=" w-full mx-auto flex flex-col items-center text-center container mx-auto">
            <h1 className="text-6xl font-extrabold text-center my-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in-up">
              Our Clients
            </h1>

            <div className="animation-group flex flex-wrap gap=[50px] justify-center mt-8">
              {[
                "image1.jpg",
                "image2.jpg",
                "image3.jpg",
                "image4.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
                "image3.jpg",
              ].map((image, idx) => (
                <div
                  key={idx}
                  className="icon bg-cover bg-center rounded-lg shadow-lg w-70 h-80 opacity-0 transform transition-transform duration-300 hover:scale-105 flex flex-col justify-end items-center text-white p-4 relative"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                  data-animation="fadeInLeft"
                >
                  <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
                  <span className="text-lg font-bold mt-2 z-10">
                    Card Title
                  </span>
                  <button className="card-button z-10 mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default OurClients;
