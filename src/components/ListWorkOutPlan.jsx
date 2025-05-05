const workoutTypeIcons = {
  running: <i className="fa-solid fa-person-running"></i>,
  cycling: <i className="fa-solid fa-person-biking"></i>,
  swimming: <i className="fa-solid fa-person-swimming"></i>,
  walking: <i className="fa-solid fa-person-walking"></i>,
  gym: <i className="fa-solid fa-dumbbell"></i>,
};

const ListWorkoutPlan = ({ item }) => {
  return (
    <ul className="flex items-center px-3 py-2 bg-white rounded-xl mt-2 text-sm text-gray-700 gap-3 ">
      <li className="flex items-center gap-2 basis-2/6">
        <span
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
            item.activity === "running"
              ? "bg-circle-icon-blue"
              : item.activity === "cycling"
              ? "bg-circle-icon-green"
              : item.activity === "swimming"
              ? "bg-circle-icon-yellow"
              : item.activity === "walking"
              ? "bg-circle-icon-orange"
              : item.activity === "gym"
              ? "bg-circle-icon-red textwh"
              : ""
          }`}
        >
          {workoutTypeIcons[item.activity]}
        </span>

        <span className="whitespace-nowrap">{item.name}</span>
      </li>
      <li className="basis-1/6 ">{item.activity}</li>
      <li className="basis-1/6 ">{item.duration}</li>
      <li className="basis-1/6">{item.start_date}</li>
      <li className="basis-1/6">{item.calories_burned}</li>
      <li className="basis-1/6">
        <span
          className={`px-1 py-1 rounded-full text-[10px] md:text-xs font-semibold md:px-2 md:py-1 ${
            item.status === "complete"
              ? "bg-green-100 text-green-700"
              : item.status === "not-started"
              ? "bg-yellow-100 text-yellow-700"
              : item.status === "skipped"
              ? "bg-red-100 text-red-700"
              : "bg-gray-100 text-gray-700 "
          }`}
        >
          {item.status}
        </span>
      </li>
    </ul>
  );
};

export default ListWorkoutPlan;
