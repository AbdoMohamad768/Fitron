import React from "react";

const ListWorkOutPlan = ({ item }) => {
  return (
    <ul className="flex items-center px-3 py-2 bg-white rounded-xl text-[10px] mt-2 sm:text-sm text-gray-700 2xl:gap-50 lg:gap-18 md:gap-7 gap-3 ">
      <li className="flex items-center gap-2 basis-2/6">
        <img className="w-6 h-6" src={item.icon} alt="" />
        <span className="whitespace-nowrap">{item.exercise_name}</span>
      </li>
      <li className="basis-1/6 ">{item.activity}</li>
      <li className="basis-1/6 ">{item.duration}</li>
      <li className="basis-1/6">{item.date}</li>
      <li className="basis-1/6">{item.calories}</li>
      <li className="basis-1/6">
        <span
          className={`px-1 py-1 rounded-full text-[10px] md:text-xs font-semibold md:px-2 md:py-1 ${
            item.status === "Completed"
              ? "bg-green-100 text-green-700"
              : item.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : item.status === "Skipped"
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

export default ListWorkOutPlan;
