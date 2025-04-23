import { useState } from "react";

export default function ExercisePage() {
  const [FormData, setData] = useState({
    Exercises: "",
    Hours: "",
    minutes: "",
    seconds: "",
    date: "",
    Activity: "",
    Calories: "",
  });
  const changeDate = (e) => {
    const { name, value } = e.target;
    setData((e) => ({ ...e, [name]: value }));
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form
        className="flex justify-center flex-col  w-full max-w-sm p-4 space-y-4 bg-white shadow-xl rounded-xl  mx-auto "
        onSubmit={(e) => {
          e.preventDefault("");
          console.log(FormData);
        }}
      >
        <div>
          <label htmlFor="Exercise" className="font-medium mb-1 block">
            Exercise Name{" "}
          </label>
          <input
            type="text"
            onChange={changeDate}
            value={FormData.Exercises}
            name="Exercises"
            id="Exercise"
            className="w-full p-2 border border-main-700 rounded-xl"
          />
        </div>
        <div className="flex gap-1">
          <div>
            <label htmlFor="Duration" className="block font-medium mb-1">
              Duration{" "}
            </label>
            <div className="flex gap-2 ">
              <input
                type="number"
                onChange={changeDate}
                value={FormData.Hours}
                name="Hours"
                placeholder="h"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
              />
              <input
                type="number"
                onChange={changeDate}
                value={FormData.minutes}
                name="minutes"
                placeholder="m"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
              />
              <input
                type="number"
                onChange={changeDate}
                value={FormData.seconds}
                name="seconds"
                placeholder="s"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Date" className="block font-medium mb-1  ">
              {" "}
              Date{" "}
            </label>
            <input
              type="date"
              onChange={changeDate}
              value={FormData.date}
              name="date"
              className="w-full p-2 border border-main-700 rounded-xl text-main-700"
            />
          </div>
        </div>
        <div>
          <label htmlFor="Activity" className="mb-1 font-medium">
            {" "}
            Activity{" "}
          </label>
          <select
            name="Activity"
            onChange={changeDate}
            value={FormData.Activity}
            className=" w-full border border-main-700 p-2  rounded-xl"
          >
            <option value="">{null}</option>
            <option value="Running">Running</option>
            <option value="Swimming">Swimming</option>
            <option value="Walking">Walking</option>
          </select>
        </div>
        <div className=" mt-10">
          <label htmlFor="Calories" className="font-medium block mb-1">
            {" "}
            Calories Burnd (kcal){" "}
          </label>
          <div className="flex gap-2 ">
            <input
              type="text"
              name="Calories"
              value={FormData.Calories}
              onChange={(e) =>
                setData({ ...FormData, Calories: e.target.value })
              }
              className="appearance-none w-1/2 pt-2 pb-2 pl-4 pr-4 border mr-5 border-main-700 rounded-xl text-main-700"
            />
            <button className="bg-main-700 pt-2 pb-2 pr-4 pl-4 rounded-2xl text-white">
              Calculate
            </button>
          </div>
        </div>
        <button
          className="bg-main-700 pt-2 pb-2 pr-4 w-1/3 pl-4 rounded-2xl text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
}
