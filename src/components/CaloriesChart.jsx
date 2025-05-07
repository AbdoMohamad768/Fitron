import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import chartData from "../data/caloriesData";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CaloriesChart = () => {
  const [timeRange, setTimeRange] = useState("Weekly");

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#eee",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "#333",
        bodyColor: "#666",
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 14,
          weight: "bold",
        },
        padding: 10,
        borderColor: "#eee",
        borderWidth: 1,
        caretSize: 6,
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        callbacks: {
          title: (items) => `Day ${items[0].label}`,
          label: (item) => `Calories: ${item.raw}`,
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-dark-main-800 dark:text-dark-black-900 rounded-xl p-4 shadow-sm animate-fade-in-4">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-bold text-lg">Calories Chart</h2>
          <p className="text-gray-500 dark:text-dark-black-900 text-sm">
            This Chart it&apos;s About Burn Calories into the Week And Month And
            Year.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 bg-fitness-green rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-dark-black-900">
              Calories
            </span>
          </div>
          <div className="relative">
            <select
              className="bg-gray-100 dark:text-black rounded-md px-3 py-1 pr-8 appearance-none text-sm"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                width="12"
                height="6"
                viewBox="0 0 12 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L6 5L11 1"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-64 w-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CaloriesChart;
