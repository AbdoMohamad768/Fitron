import { useEffect, useRef, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchWorkouts } from "../store/slices/workoutSlice.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const days = [
  { day: '01' },
  { day: '02' },
  { day: '03' },
  { day: '04' },
  { day: '05' },
  { day: '06'},
  { day: '07' },
  { day: '08' },
  { day: '09' },
  { day: '10' },
  { day: '11' },
  { day: '12' },
  { day: '13' },
  { day: '14' },
  { day: '15'},
  { day: '16' },
  { day: '17' },
  { day: '18' },
  { day: '19' },
  { day: '20' }
];

const daysWeek=[
  { day: '01' },
  { day: '02' },
  { day: '03' },
  { day: '04' },
  { day: '05' },
  { day: '06'},
  { day: '07' }
]

const CaloriesChart = () => {
  const [timeRange, setTimeRange] = useState("weekly");
  const data = useSelector((state)=>{return state.workouts.workouts});
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(fetchWorkouts())
  },[dispatch]);

const chartData={
  labels: days.map(item => item.day),
  datasets: [
    {
      label: 'monthly Calories',
      data: data.map(item =>item.calories_burned),
      backgroundColor: "#c046d3",
      borderRadius: 4,
      barThickness: 12,
      offset: 4
    },
  ],
}
const chart={
  labels: daysWeek.map(item => item.day),
  datasets: [
    {
      label: 'weekly Calories',
      data: data.map(item =>item.calories_burned),
      backgroundColor: "#c046d3",
      borderRadius: 4,
      barThickness: 12,
      offset: 4
    },
  ],
}

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
            This Chart it&apos;s About Burn Calories into the Week And Month.
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
              <option value="weekly">weekly</option>
              <option value="Monthly">Monthly</option>
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
        {timeRange==="weekly" ? (<Bar data={chart} options={options} />) : ( <Bar data={chartData} options={options} />)}
      </div>
    </div>
  );
};

export default CaloriesChart;
