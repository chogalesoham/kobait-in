import React from "react";
import { Line } from "react-chartjs-2";

const ServiceContent = ({ activeTab }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  };

  const getContent = () => {
    switch (activeTab) {
      case "seo":
        return (
          <div className="flex flex-col lg:flex-row py-6 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-4xl xl:text-6xl leading-snug text-white font-extrabold line-clamp-2 mb-6">
                Search Engine Optimization
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Are you flitting from one digital marketing agency to another in
                search of that tailor-made Search Engine Optimization (SEO) plan
                that delivers your business goals? Look no further. Your search
                for the best digital marketing agency ends here - with Kobait.
              </p>
              <p className="text-slate-400 mb-8 text-lg">
                At Kobait, we don’t just focus on keywords. We focus on the big
                picture: bettering your page authority on search engines. This
                means directing more of the right kind of traffic to your site.
                In a nutshell? Not just more visits but visits that convert.
                Here’s what we offer:
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-full sm:h-[400px] lg:h-[500px] bg-transparent rounded-lg p-5">
              <video
                src="/video/video3.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="w-full h-full rounded-lg object-contain"
              ></video>
            </div>
          </div>
        );
      case "ppc":
        return (
          <div className="flex flex-col lg:flex-row py-6 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-4xl xl:text-6xl leading-snug text-white font-extrabold line-clamp-2 mb-6">
                Pay-Per Click Advertising
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                Are you flitting from one digital marketing agency to another in
                search of that tailor-made Search Engine Optimization (SEO) plan
                that delivers your business goals? Look no further. Your search
                for the best digital marketing agency ends here - with Kobait.
              </p>
              <p className="text-slate-400 mb-8 text-lg">
                At Kobait, we don’t just focus on keywords. We focus on the big
                picture: bettering your page authority on search engines. This
                means directing more of the right kind of traffic to your site.
                In a nutshell? Not just more visits but visits that convert.
                Here’s what we offer:
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-full sm:h-[400px] lg:h-[500px] bg-transparent rounded-lg p-5">
              <video
                src="/video/video4.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="w-full h-full rounded-lg object-contain"
              ></video>
            </div>
          </div>
        );
      case "content":
        return (
          <div className="flex flex-col lg:flex-row py-6 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-4xl xl:text-6xl leading-snug text-white font-extrabold line-clamp-2 mb-6">
                Content Marketing
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                We excel in delivering top-notch digital marketing services that
                harness the potential of social media platforms. Our strategic
                approach ensures effective audience engagement, heightened brand
                awareness, and substantial expansion of your online presence.
                With a focus on achieving tangible results, our result-driven
                social media strategy is tailored to help you meet and surpass
                your business objectives.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-full sm:h-[400px] lg:h-[500px] bg-transparent rounded-lg p-5">
              <video
                src="/video/video2.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="w-full h-full rounded-lg"
              ></video>
            </div>
          </div>
        );
      case "social":
        return (
          <div className="flex flex-col lg:flex-row py-6 space-y-6 lg:space-y-0 lg:space-x-6">
            <div className="w-full lg:w-[50%]">
              <h3 className="text-4xl xl:text-6xl leading-snug text-white font-extrabold line-clamp-2 mb-6">
                Social Media Marketing
              </h3>
              <p className="text-slate-400 mb-8 text-lg">
                We excel in delivering top-notch digital marketing services that
                harness the potential of social media platforms. Our strategic
                approach ensures effective audience engagement, heightened brand
                awareness, and substantial expansion of your online presence.
                With a focus on achieving tangible results, our result-driven
                social media strategy is tailored to help you meet and surpass
                your business objectives.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-full sm:h-[400px] lg:h-[500px] bg-transparent rounded-lg p-5">
              <video
                src="/video/video1.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="w-full h-full rounded-lg"
              ></video>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lg:w-3/4 bg-[#1F2937] p-8 rounded-lg shadow-xl">
      {getContent()}
    </div>
  );
};

export default ServiceContent;
