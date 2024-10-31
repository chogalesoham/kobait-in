"use client";

import React, { useEffect } from "react";
import "./OurClients.css";
import client1 from "@/app/images/client1.webp";
import client2 from "@/app/images/client2.webp";
import client3 from "@/app/images/client3.png";
import client4 from "@/app/images/client4.png";
import client5 from "@/app/images/client5.png";
import client6 from "@/app/images/client6.png";
import client7 from "@/app/images/client6.webp";
import client8 from "@/app/images/client7.png";
import client9 from "@/app/images/client8.png";

import ClientCard from "../ClientCard/ClientCard";

const OurClientsData = [
  {
    logo: client1,
    parent: "58%",
    title: "Increase in traffic through social media channels",
    bg: "linear-gradient(180deg, #8500c9 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client2,
    parent: "124",
    title: "million people reached across platforms",
    bg: "linear-gradient(180deg, #C80845 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client3,
    parent: "405%",
    title: "SEO Revenue Increase",
    bg: "linear-gradient(180deg, #0848BB -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client8,
    parent: "85%",
    title: "increase in organic traffic",
    bg: "linear-gradient(180deg, #8500c9 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client4,
    parent: "",
    title:
      "Our festive campaign for Fastrack Analog Watches had a reach of 181 Mn!",
    bg: "linear-gradient(180deg, #C20944 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client5,
    parent: "",
    title: "Trended at # 1 on Twitter for #mykindanaukri campaign",
    bg: "linear-gradient(180deg, #8500c9 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client6,
    parent: "58%",
    title: "Increase in traffic through social media channels",
    bg: "linear-gradient(180deg, #087480 -21.72%, #18212b 70%, #000000 100%)",
  },
  {
    logo: client7,
    parent: "190%",
    title: "Y/Y Increase in Non-branded keywords ranking in Top 3",
    bg: "linear-gradient(180deg, #650A9B -21.72%, #18212b 70%, #000000 100%)",
  },

  {
    logo: client9,
    parent: "69+M",
    title: "Impressions from paid media campaigns",
    bg: "linear-gradient(180deg, #67099E -21.72%, #18212b 70%, #000000 100%)",
  },
];

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
    <main className="h-auto overflow-auto snap-y">
      <section className="bg-[#1c0c5b] text-white p-8 snap-start flex items-center justify-center pb-24">
        <div className="w-full text-center mx-auto">
          <h1 className="text-6xl font-extrabold text-center my-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-in-up">
            Our Clients
          </h1>

          <div className="flex flex-wrap gap-12 justify-center mt-8 container mx-auto">
            {OurClientsData.map((card, idx) => (
              <ClientCard
                key={idx}
                cardBg={card.bg}
                title={card.title}
                logo={card.logo}
                rating={card.parent}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurClients;
