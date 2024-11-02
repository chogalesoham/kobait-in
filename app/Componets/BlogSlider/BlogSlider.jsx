"use client";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useState, useEffect } from "react";
import blog1 from "@/app/images/blog1.webp";
import blog2 from "@/app/images/blog2.webp";
import blog3 from "@/app/images/blog3.webp";
import blog4 from "@/app/images/blog4.webp";
import blog5 from "@/app/images/blog5.webp";

const BlogSlider = () => {
  const items = [
    {
      image: blog1,
      date: "September 16, 2024",
      author: "by Anjali Jaiswal",
      title:
        "What is Schema Markup? Strategies to Use it for Better SEO Performance",
      description:
        "72.6% of pages on the first page of Google use schema. Schema markup is a form of structured data that helps search engines better understand the content on your website....",
    },
    {
      image: blog2,
      date: "September 16, 2024",
      author: "by Anjali Jaiswal",
      title:
        "How to Attract Customers? Steps to Turn Visitors into Loyal Clients",
      description:
        "In the digital world of 2024, competition for customer acquisition is more intense than ever. Businesses are always on the lookout for new ways to stand out and stay relevant....",
    },
    {
      image: blog3,
      date: "September 16, 2024",
      author: "by Anjali Jaiswal",
      title: "10 Digital Marketing Tips to Supercharge Your Clothing Brand",
      description:
        "With so much competition in the market, clothing brands must leverage digital marketing to thrive in an increasingly competitive fashion industry. According to data, global e-commerce sales for fashion are...",
    },
    {
      image: blog4,
      date: "September 16, 2024",
      author: "by Anjali Jaiswal",
      title: "Mastering Digital Advertising: Tips for Maximum Impact",
      description:
        "Today, businesses can no longer rely solely on traditional marketing methods to reach their audience. With consumers spending more time online than ever before, brands are turning to digital ads...",
    },
    {
      image: blog5,
      date: "September 16, 2024",
      author: "by Anjali Jaiswal",
      title:
        "Everything You Need to Know about SEO Statistics: Ultimate Guide to Data and Facts",
      description:
        "Everything You Need to Know about SEO Statistics: Ultimate Guide to Data and Facts Search Engine Optimization (SEO) stands as a crucial element for any successful online presence. SEO involves...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setVisibleItems(3);
    } else if (window.innerWidth >= 768) {
      setVisibleItems(2);
    } else {
      setVisibleItems(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleItems < items.length ? prevIndex + 1 : 0
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - visibleItems : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mx-auto py-8 px-4 bg-[#1d2731] pb-12 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-center m-0 text-[#ff3333] py-4 pl-6">
            Our Blog
          </h2>
          <div className="flex items-center gap-4 pr-6">
            <button
              onClick={prev}
              className="h-12 w-12 md:h-14 md:w-14 text-xl md:text-2xl flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              <MdArrowBackIosNew />
            </button>
            <button
              onClick={next}
              className="h-12 w-12 md:h-14 md:w-14 text-xl md:text-2xl flex items-center justify-center bg-black text-white rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className=" bg-[#18212b] p-4 shadow-lg rounded-lg transform  hover:scale-105 transition-transform duration-300 text-white mt-4">
                  <img
                    src={item.image.src}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-t-lg"
                  />
                  <div className=" flex justify-between items-center my-4">
                    <p>{item.date}</p>
                    <p>{item.author}</p>
                  </div>
                  <hr />
                  <div className="p-4">
                    <h3 className="text-lg font-semibol">{item.title}</h3>
                    <p className="mt-2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
