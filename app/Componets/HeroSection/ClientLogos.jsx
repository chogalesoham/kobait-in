"use client";

import React, { useEffect, useRef } from "react";
import "./clientLogos.css";

const clientLogos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7cefe310efd379952d72e229c7414ba9f1f95dad835f1b625d805d5bef2d1424?placeholderIfAbsent=true&apiKey=66a2fbcb5a344abd9e4df20a6ddca62d",
    width: "w-[127px]",
    aspectRatio: "aspect-[2.28]",
    imageWidth: "w-[107px]",
  },
];

const ClientLogos = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 40; // Adjusted for slower speed

      scrollContainer.style.setProperty("--scroll-width", `${scrollWidth}px`);
      scrollContainer.style.setProperty(
        "--animation-duration",
        `${animationDuration}s`
      );
    }
  }, []);

  return (
    <div className="overflow-hidden w-full h-22">
      <div ref={scrollRef} className="logos-slide">
        {clientLogos.concat(clientLogos).map((logo, index) => (
          <div key={index} className="logo-item">
            <img
              loading="lazy"
              src={logo.src}
              className={`logo-image ${logo.aspectRatio}`}
              alt={`Client logo ${(index % clientLogos.length) + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ClientLogos;
