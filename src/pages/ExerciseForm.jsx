import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWorkout, updateWorkout } from "../store/slices/workoutSlice";

export default function ExerciseForm({ setOpenForm, isUpdate }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const workouts = useSelector((state) => state.workouts);

  const workout = workouts.workout;

  const [exerciseName, setExerciseName] = useState(workout?.name ?? "");
  const [hours, setHours] = useState(Math.floor(workout?.duration / 60) ?? 0);
  const [minutes, setMinutes] = useState((workout?.duration ?? 0) % 60);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState(workout?.start_date ?? "");
  const [activity, setActivity] = useState(workout?.activity ?? "");
  const [calories, setCalories] = useState(workout?.calories_burned);
  const [distance, setDistance] = useState(workout?.distance ?? "");
  const [pace, setPace] = useState(workout?.pace ?? "");

  // Calorie calculation rates (calories per hour) for different activities
  const CALORIE_RATES = useMemo(
    () => ({
      running: 600,
      swimming: 500,
      walking: 300,
      gym: 400,
    }),
    []
  );

  // Calculate calories based on activity and duration
  const calculateCalories = useCallback(() => {
    if (!activity || (!hours && !minutes && !seconds)) {
      setCalories("");
      return;
    }

    const calculateTotalHours = () => {
      const totalSeconds =
        (parseInt(hours) || 0) * 3600 +
        (parseInt(minutes) || 0) * 60 +
        (parseInt(seconds) || 0);
      return totalSeconds / 3600;
    };

    const totalHours = calculateTotalHours();
    const rate = CALORIE_RATES[activity] || 0;
    const calculatedCalories = Math.round(totalHours * rate);
    setCalories(calculatedCalories.toString());
  }, [CALORIE_RATES, activity, hours, minutes, seconds]);

  // Update input handlers
  const handleExerciseChange = (e) => setExerciseName(e.target.value);
  const handleHoursChange = (e) => {
    setHours(e.target.value);
    calculateCalories();
  };
  const handleMinutesChange = (e) => {
    setMinutes(e.target.value);
    calculateCalories();
  };
  const handleSecondsChange = (e) => {
    setSeconds(e.target.value);
    calculateCalories();
  };
  const handleDateChange = (e) => setDate(e.target.value);
  const handleActivityChange = (e) => {
    setActivity(e.target.value);
    calculateCalories();
  };
  const handleCaloriesChange = (e) => setCalories(e.target.value);
  const handleDistanceChange = (e) => setDistance(e.target.value);
  const handlePaceChange = (e) => setPace(e.target.value);

  // Calculate calories whenever activity or duration changes
  useEffect(() => {
    calculateCalories();
  }, [calculateCalories]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (isUpdate) {
        dispatch(
          updateWorkout({
            activity,
            calories_burned: calories,
            duration: Math.round(
              (parseInt(hours) || 0) * 60 +
                (parseInt(minutes) || 0) +
                (parseInt(seconds) || 0) / 60
            ),
            name: exerciseName,
            start_date: date,
            status: "Active",
            distance,
            pace,
            id: workout.id,
          })
        );
      } else {
        dispatch(
          addWorkout({
            name: exerciseName,
            duration: Math.round(
              (parseInt(hours) || 0) * 60 +
                (parseInt(minutes) || 0) +
                (parseInt(seconds) || 0) / 60
            ),
            activity,
            start_date: date,
            calories_burned: calories,
            pace,
            distance,
            status: "Active",
            by: user.id,
          })
        );
      }
    } catch (error) {
      console.error("Failed to add workout:", error);
    }

    setOpenForm(false);
  };

  return (
    <div className="bg-white shadow-xl rounded-xl relative mx-auto">
      <button
        onClick={() => setOpenForm(false)}
        className="absolute top-4 right-4 cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 transition duration-300"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <form
        className="flex justify-center flex-col w-sm p-4 space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="mt-10">
          <label htmlFor="Exercises" className="font-medium mb-1 block">
            Exercise Name
          </label>
          <input
            type="text"
            onChange={handleExerciseChange}
            value={exerciseName}
            id="Exercises"
            className="w-full p-2 border border-main-700 rounded-xl"
            required
          />
        </div>

        <div className="flex gap-1">
          <div>
            <label className="block font-medium mb-1">Duration</label>
            <div className="flex gap-2 ">
              <input
                type="number"
                onChange={handleHoursChange}
                value={hours}
                id="Hours"
                placeholder="h"
                min="0"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
                required
              />
              <input
                type="number"
                onChange={handleMinutesChange}
                value={minutes}
                id="minutes"
                placeholder="m"
                min="0"
                max="59"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
                required
              />
              <input
                type="number"
                onChange={handleSecondsChange}
                value={seconds}
                id="seconds"
                placeholder="s"
                min="0"
                max="59"
                className="w-1/4 p-2 border border-main-700 rounded-xl"
              />
            </div>
          </div>
          <div>
            <label htmlFor="Date" className="block font-medium mb-1">
              Date
            </label>
            <input
              type="date"
              onChange={handleDateChange}
              value={date}
              id="date"
              className="w-full p-2 border border-main-700 rounded-xl text-main-700"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="Activity" className="mb-1 font-medium">
            Activity
          </label>
          <select
            id="Activity"
            onChange={handleActivityChange}
            value={activity}
            className="w-full border border-main-700 p-2 rounded-xl"
            required
          >
            <option value="">-- Choose Activity --</option>
            <option value="running">Running</option>
            <option value="swimming">Swimming</option>
            <option value="cycling">Cycling</option>
            <option value="gym">Gym</option>
          </select>
        </div>

        {(activity === "running" ||
          activity === "cycling" ||
          activity === "swimming") && (
          <div className="space-y-4">
            <div>
              <label htmlFor="Distance" className="font-medium block mb-1">
                Distance (km)
              </label>
              <input
                type="number"
                id="Distance"
                value={distance}
                onChange={handleDistanceChange}
                className="w-full p-2 border border-main-700 rounded-xl"
                min="0"
                step="0.01"
                required
              />
            </div>

            {(activity === "running" || activity === "cycling") && (
              <div>
                <label htmlFor="Pace" className="font-medium block mb-1">
                  Pace (min/km)
                </label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    onChange={handlePaceChange}
                    value={pace}
                    id="pace"
                    className="w-1/2 p-2 border border-main-700 rounded-xl"
                    required
                  />
                </div>
              </div>
            )}
          </div>
        )}

        <div>
          <label htmlFor="Calories" className="font-medium block mb-1">
            Calories Burned (kcal)
          </label>
          <div className="flex gap-2">
            <input
              type="number"
              id="Calories"
              value={calories}
              onChange={handleCaloriesChange}
              className="appearance-none w-1/2 pt-2 pb-2 pl-4 pr-4 border mr-5 border-main-700 rounded-xl text-main-700"
              min="0"
              required
              readOnly
            />
          </div>
        </div>

        <button
          className="bg-main-700 pt-2 pb-2 pr-4 w-1/3 pl-4 rounded-2xl text-white hover:bg-main-800 transition-colors cursor-pointer"
          type="submit"
        >
          {isUpdate ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
}
