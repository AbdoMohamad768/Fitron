import ListWorkOutPlan from "./ListWorkoutPlan";

const data = [
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Squats",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Squats.svg",
  },
  {
    exercise_name: "Bench Press",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "In Progress",
    icon: "/public/Icins-WorkOut-plan/Branch Press.svg",
  },
  {
    exercise_name: "Shoulder Press",
    activity: "Cycle",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Skipped",
    icon: "/public/Icins-WorkOut-plan/Shoulder Press.svg",
  },
  {
    exercise_name: "Pull-Ups",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Pull-Ups.svg",
  },
  {
    exercise_name: "Deadlifts",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Deadlifts.svg",
  },
  {
    exercise_name: "Plank",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Plank.svg",
  },
  {
    exercise_name: "Running",
    activity: "Run",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "In Progress",
    icon: "/public/Icins-WorkOut-plan/Runing.svg",
  },
  {
    exercise_name: "Lunges",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Not Started",
    icon: "/public/Icins-WorkOut-plan/Lunges.svg",
  },
  {
    exercise_name: "Bicep Curls",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Bicep Curls.svg",
  },
  {
    exercise_name: "Cycling",
    activity: "Cycle",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Skipped",
    icon: "/public/Icins-WorkOut-plan/Cycling.svg",
  },
  {
    exercise_name: "Mountain Climbers",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Completed",
    icon: "/public/Icins-WorkOut-plan/Mountain-Clinbers.svg",
  },
  {
    exercise_name: "Yoga (Stretching)",
    activity: "Gym",
    duration: "60 seconds",
    date: "02-5-2025",
    calories: "180 cal",
    status: "Not Started",
    icon: "/public/Icins-WorkOut-plan/Yoga.svg",
  },
];

const WorkoutPlan = () => {
  return (
    <div className="h-full min-w-160.5 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="relative flex gap-2">
          <span className="absolute text-grey-350 inset-y-0 left-0 flex items-center pl-3">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <input
            type="text"
            placeholder="Search for exercise"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-1 focus:ring-main-300 text-sm"
          />

          <select className="pl-2 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-300 text-gray-700 text-sm">
            <option value="">Status</option>
            <option value="">Active</option>
            <option value="">InActive</option>
          </select>

          <select className="pl-2 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-300 text-gray-700 text-sm">
            <option value="">This Week</option>
            <option value="">This Month</option>
            <option value="">This yeer</option>
          </select>
        </div>

        <div>
          <button className="bg-main-700 rounded-4xl pr-3 pl-3 cursor-pointer pt-2 pb-2 text-grey-50 text-sm">
            + Add Exercise
          </button>
        </div>
      </div>

      <div className="mt-7 bg-blue-200 pt-1.5 pb-1.5 px-4 rounded-2xl">
        <ul className="flex text-gray-600 font-semibold text-sm gap-7">
          <li className="basis-2/6">Exercise Name</li>
          <li className="basis-1/6">Activity</li>
          <li className="basis-1/6">Duration</li>
          <li className="basis-1/6">Date</li>
          <li className="basis-1/6">Calories</li>
          <li className="basis-1/6">Status</li>
        </ul>
      </div>

      <div>
        {data.map((item, index) => (
          <ListWorkOutPlan key={index} item={item} />
        ))}
      </div>

      <div className="mt-4 ml-1 grow flex items-end justify-between">
        <div>
          <span className="text-grey-350 pr-1.5 text-sm">Showing</span>
          <select className="pl-2 py-2 rounded-full bg-gray-100 text-gray-700 text-sm">
            {Array.from({ length: data.length }, (_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <span className="text-grey-350 ml-3 text-sm">out of 28</span>
        </div>

        <div className="flex gap-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="15" fill="#EFEFF0" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.0852 19.8977C17.3049 19.6781 17.3049 19.3219 17.0852 19.1023L12.983 15L17.0852 10.8977C17.3049 10.6781 17.3049 10.3219 17.0852 10.1023C16.8656 9.88258 16.5094 9.88258 16.2898 10.1023L11.7898 14.6023C11.5701 14.8219 11.5701 15.1781 11.7898 15.3977L16.2898 19.8977C16.5094 20.1174 16.8656 20.1174 17.0852 19.8977Z"
              fill="#BCBEC3"
            />
          </svg>

          <span className="w-8 h-8 flex items-center justify-center bg-circle-icon-yellow rounded-full text-sm font-medium text-gray-700 ">
            1
          </span>
          <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700">
            2
          </span>
          <span className="w-8 h-8 flex items-center justify-center bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700">
            3
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30" height="30" rx="15" fill="#EFEFF0" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.9148 19.8977C12.6951 19.6781 12.6951 19.3219 12.9148 19.1023L17.017 15L12.9148 10.8977C12.6951 10.6781 12.6951 10.3219 12.9148 10.1023C13.1344 9.88258 13.4906 9.88258 13.7102 10.1023L18.2102 14.6023C18.4299 14.8219 18.4299 15.1781 18.2102 15.3977L13.7102 19.8977C13.4906 20.1174 13.1344 20.1174 12.9148 19.8977Z"
              fill="#212738"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlan;
