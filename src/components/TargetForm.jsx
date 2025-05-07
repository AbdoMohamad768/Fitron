import React, { useRef, useState } from "react";

const TargetForm = ({ setOpenForm }) => {
  const targetNumber = useRef();
  const [duration, setDuration] = useState("");
  const [num, setNum] = useState();
  const [sumbit, setSumbit] = useState(false);
  const handle = (e) => {
    sumbit ? setOpenForm(false) : e.preventDefault();
  };
  const handlerSumbit = () => {
    setSumbit(!sumbit);
  };
  const handleExerciseChange = () => {
    return targetNumber.current;
  };
  const handleActivityChange = (e) => {
    return e.target.value === "Week"
      ? setDuration((prev) => (prev = "Week"))
      : e.target.value === "Month"
      ? setDuration((prev) => (prev = "Month"))
      : setDuration((prev) => (prev = "Year"));
  };
  return (
    <div className="bg-white dark:bg-dark-main-750 dark:text-white shadow-xl rounded-xl relative mx-auto">
      <button
        onClick={() => setOpenForm(false)}
        className="absolute top-4 right-4 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-300"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <form
        className="flex justify-center flex-col w-sm p-4 space-y-4"
        onSubmit={handle}
      >
        <div className="mt-10">
          <label htmlFor="Exercises" className="font-medium mb-1 block">
            Target
          </label>
          <input
            type="number"
            ref={targetNumber}
            onChange={handleExerciseChange}
            value={num}
            onBlur={()=>{setNum(num)}}
            id="Exercises"
            className="w-full p-2 border border-main-700 rounded-xl"
            required
          />
        </div>

        <div>
          <label htmlFor="Activity" className="mb-1 font-medium">
            Durtion
          </label>
          <select
            id="Durtion"
            onChange={handleActivityChange}
            value={duration}
            className="w-full border border-main-700  p-2 rounded-xl"
            required
          >
            <option className="dark:text-white" value="">
              -- Choose Activity --
            </option>
            <option className="dark:text-black" value="Week">
              Week
            </option>
            <option className="dark:text-black" value="Month">
              Month
            </option>
            <option className="dark:text-black" value="Year">
              Year
            </option>
          </select>
        </div>

        <button
          className="bg-main-700 pt-2 pb-2 pr-4 w-1/3 pl-4 rounded-2xl text-white hover:bg-main-800 transition-colors cursor-pointer"
          type="submit" onClick={handlerSumbit}
        >
          sumbit
        </button>
      </form>
    </div>
  );
};

export default TargetForm;
