import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { lineChartData } from "../data/dashLinerData";

import { icon } from "@fortawesome/fontawesome-svg-core";

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
const option={
    responsive: true,
    plugins: {
        legend: {
          position: 'bottom' ,
        },
    }
};
return <Line options={option} data={lineChartData}/>
};

export default DashLinear;
