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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWorkouts } from "../store/slices/workoutSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DashLinear = () => {
  const data = useSelector((state) => {
    return state.workouts.workouts || [];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Running",
        data: data
          .filter((item) => {
            return item.activity === "running";
          })
          .map((item) => item.calories_burned),
        borderColor: "#1ea7c5",
        pointBorderColor: "#1ea7c5",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointStyle: "circle",
        pointBackgroundColor: "#1ea7c5",
        hoverOffest: 4,
      },
      {
        label: "Cycling",
        data: data
          .filter((item) => {
            return item.activity === "cycling";
          })
          .map((item) => item.calories_burned),
        borderColor: "#ff9432",
        pointBorderColor: "#ff9432",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointStyle: "circle",
        pointBackgroundColor: "#ff9432",
        hoverOffest: 4,
      },
      {
        label: "swimming",
        data: data
          .filter((item) => {
            return item.activity === "swimming";
          })
          .map((item) => item.calories_burned),
        borderColor: "#c046d3",
        pointBorderColor: "#c046d3",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointStyle: "circle",
        pointBackgroundColor: "#c046d3",
        hoverOffest: 8,
      },
    ],
  };

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return <Line options={option} data={lineChartData} />;
};

export default DashLinear;
