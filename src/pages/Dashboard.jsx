import DashLinear from "../components/dashLinear";
import PersonalCard from "../components/personalCard";
import {
  faDumbbell,
  faFireFlameCurved,
  faMoon,
  faClock,
  faPersonRunning,
  faPersonBiking,
  faPersonPraying,
} from "@fortawesome/free-solid-svg-icons";
import Progress from "../components/Progress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EachProgress from "../components/eachProgress";
import {
  IconMID,
  RunningIcon,
  YogaIcon,
} from "../components/ActivityIcons.jsx";
import CaloriesChart from "../components/CaloriesChart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchWorkouts } from "../store/slices/workoutSlice.js";
function Dashboard() {
  const [percentageRunning, setPercentRunning] = useState(0);
  const [percentageCycling, setPercentCycling] = useState(0);
  const [percentageSwimming, setPercentSwimming] = useState(0);
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [monthlyProgress, setMonthlyProgress] = useState(0);

  const data = useSelector((state) => {
    return state.workouts.workouts || [];
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      const WEEKLY_CALORIE_GOAL = 10000;
      const MONTHLY_CALORIE_GOAL = 12000;
      const now = new Date();
      const startOfWeek = new Date(now);
      const dayOfWeek = now.getDay();
      const mondayOffset = (dayOfWeek + 6) % 7;
      startOfWeek.setDate(now.getDate() - mondayOffset);
      startOfWeek.setHours(0, 0, 0, 0);
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const totals = {
        running: 0,
        cycling: 0,
        swimming: 0,
        weeklyCalories: 0,
        monthlyCalories: 0,
      };

      data.forEach((ele) => {
        const workoutDate = new Date(ele.start_date);
        if (workoutDate >= startOfWeek) {
          totals.weeklyCalories += ele.calories_burned || 0;
        }
        if (workoutDate >= startOfMonth) {
          totals.monthlyCalories += ele.calories_burned || 0;
        }
        if (ele.activity === "running") totals.running += ele.calories_burned;
        if (ele.activity === "cycling") totals.cycling += ele.calories_burned;
        if (ele.activity === "swimming") totals.swimming += ele.calories_burned;
      });

      const totalCalories = totals.running + totals.cycling + totals.swimming;

      setPercentRunning(Math.round((totals.running / totalCalories) * 100));
      setPercentCycling(Math.round((totals.cycling / totalCalories) * 100));
      setPercentSwimming(Math.round((totals.swimming / totalCalories) * 100));
      const monthlyProgress = Math.min(
        (totals.monthlyCalories / MONTHLY_CALORIE_GOAL) * 100,
        100
      );
      setMonthlyProgress(Math.round(monthlyProgress));
      const progress = Math.min(
        (totals.weeklyCalories / WEEKLY_CALORIE_GOAL) * 100,
        100
      );
      setWeeklyProgress(Math.round(progress));
    }
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-1 dark:text-dark-black-900 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 cursor-pointer">
        <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <PersonalCard
            name={`${weeklyProgress}%`}
            icon={faDumbbell}
            para="Weekly Progress"
            style="#ff285c"
          />
        </div>
        <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <PersonalCard
            name={`${
              percentageRunning + percentageCycling + percentageSwimming
            }%`}
            icon={faFireFlameCurved}
            para="Cardio Burn"
            style="#1ea7c5"
          />
        </div>
        <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <PersonalCard
            name="8 Hours"
            icon={faMoon}
            para="Total Duration Burning"
            style="#ff9432"
          />
        </div>
        <div className=" p-[15px] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
          <PersonalCard
            name="7 Days"
            icon={faClock}
            para="Continues Days"
            style="#c046d3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 cursor-pointer">
        <div className="h-[100%] pt-[40px] w-full">
          <div className="pb-[20px] flex justify-between">
            <div className="">
              <p className="text-[22] dark:text-dark-black-900">
                Workout Static
              </p>
            </div>
            <div className=" flex align-center gap-10 md:gap-5 ">
              <div className="flex gap-[5px] text-blue">
                <div>
                  <FontAwesomeIcon icon={faPersonRunning} />
                </div>
                <div className="text-[13px]">
                  <p>{percentageRunning}%</p>
                  <p>Running</p>
                </div>
              </div>
              <div className="flex gap-[5px] text-orange">
                <div>
                  <FontAwesomeIcon icon={faPersonBiking} />
                </div>
                <div className="text-[13px]">
                  <p>{percentageCycling}%</p>
                  <p>cycling</p>
                </div>
              </div>
              <div className="flex gap-[5px] text-yoga">
                <div>
                  <FontAwesomeIcon icon={faPersonPraying} />
                </div>
                <div className="text-[13px]">
                  <p>{percentageSwimming}%</p>
                  <p>Swimming</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            <DashLinear />
          </div>
        </div>
        <div className="h-full">
          <Progress progress={monthlyProgress} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pt-[60px] cursor-pointer">
        <EachProgress
          icon={<RunningIcon />}
          title="Running"
          percentage={percentageRunning}
          color="#FF9D4D"
          subtitle="45km/100km"
          animationClass="animate-slide-up-1"
        />
        <EachProgress
          icon={<IconMID />}
          title="Cycling"
          percentage={percentageCycling}
          color="#22B8CF"
          subtitle="65km/20km"
          animationClass="animate-slide-up-2"
        />
        <EachProgress
          icon={<YogaIcon />}
          title="Swimming"
          percentage={percentageSwimming}
          color="#B27CFF"
          subtitle="56min/1hr"
          animationClass="animate-slide-up-3"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 cursor-pointer">
        <CaloriesChart />
      </div>
    </>
  );
}

export default Dashboard;
