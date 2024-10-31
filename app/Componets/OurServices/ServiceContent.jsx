import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ServiceContent = ({ activeTab }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Organic Traffic",
        data: [10, 30, 60, 80, 90, 100],
        borderColor: "#D91656",
        backgroundColor: "rgba(217, 22, 86, 0.5)",
        tension: 0.4,
      },
      {
        label: "Conversions",
        data: [5, 15, 35, 50, 70, 85],
        borderColor: "#FEF9F2",
        backgroundColor: "rgba(254, 249, 242, 0.5)",
        tension: 0.4,
      },
      {
        label: "ROI",
        data: [2, 10, 25, 45, 65, 90],
        borderColor: "#1F2937",
        backgroundColor: "rgba(31, 41, 55, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#FFFFFF",
        },
      },
      title: {
        display: true,
        text: "SEO Performance Growth",
        color: "#FFFFFF",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
  };

  const getContent = () => {
    switch (activeTab) {
      case "seo":
        return (
          <>
            <h3 className="text-2xl font-bold text-[#D91656] mb-6">
              Search Engine Optimization
            </h3>
            <p className="text-slate-400 mb-8">
              Our SEO services help improve your website's visibility, driving
              more traffic and conversions.
            </p>
            <div className="w-full h-48 sm:h-96 bg-[#1F2937] p-4 rounded-lg shadow-lg">
              <Line data={chartData} options={chartOptions} />
            </div>
          </>
        );
      case "ppc":
        return (
          <h3 className="text-2xl font-bold text-[#D91656] mb-6">
            Pay-Per-Click Advertising
          </h3>
        );
      case "content":
        return (
          <>
            <h3 className="text-2xl font-bold text-[#D91656] mb-6">
              Content Marketing
            </h3>
            <div className="w-full h-48 sm:h-96 bg-[#1F2937] p-4 rounded-lg shadow-lg">
              <Line data={chartData} options={chartOptions} />
            </div>
          </>
        );
      case "social":
        return (
          <h3 className="text-2xl font-bold text-[#D91656] mb-6">
            Social Media Marketing
          </h3>
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
