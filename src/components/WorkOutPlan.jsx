import { useDispatch, useSelector } from "react-redux";
import ListWorkOutPlan from "./ListWorkOutPlan";
import { useEffect, useState } from "react";
import { fetchWorkouts } from "../store/slices/workoutSlice";
import ExerciseForm from "../pages/ExerciseForm";
import Modal from "./Modal";

const WorkoutPlan = () => {
  const data = useSelector((state) => state.workouts.workouts);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState(false);
  const [openOperation, setOpenOperation] = useState(null);
  const [search, setSearch] = useState("");
  const [activity, setActivity] = useState("");
  const [period, setPeriod] = useState("");

  const handleOpenOperation = (id) => {
    setOpenOperation(openOperation === id ? null : id);
  };

  useEffect(() => {
    dispatch(fetchWorkouts());
  }, [dispatch]);

  const now = new Date();
  const filteredWorkouts = data
    .filter((item) => item.by === user.id)
    .filter((item) =>
      search.length > 0
        ? item.name.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .filter((item) =>
      activity.length > 0
        ? item.activity.toLowerCase() === activity.toLowerCase()
        : true
    )
    .filter((item) => {
      if (!period) return true;

      const itemDate = new Date(item.start_date);

      if (period === "week") {
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        return itemDate >= startOfWeek;
      }

      if (period === "month") {
        return (
          itemDate.getFullYear() === now.getFullYear() &&
          itemDate.getMonth() === now.getMonth()
        );
      }

      if (period === "year") {
        return itemDate.getFullYear() === now.getFullYear();
      }

      return true;
    });

  return (
    <div className="relative">
      {openForm && (
        <Modal isOpen={openForm} onClose={() => setOpenForm(false)}>
          <ExerciseForm setOpenForm={setOpenForm} />
        </Modal>
      )}

      <div className="h-full min-w-160.5 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="relative flex gap-2">
            <span className="absolute text-grey-350 inset-y-0 left-0 flex items-center pl-3">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for exercise"
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-gray-700 focus:outline-none focus:ring-1 focus:ring-main-300 text-sm"
            />

            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="pl-2 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-300 text-gray-700 text-sm"
            >
              <option value="">Activity</option>
              <option value="running">Running</option>
              <option value="swimming">Swimming</option>
              <option value="cycling">Cycling</option>
              <option value="gym">Gym</option>
            </select>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="pl-2 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-1 focus:ring-main-300 text-gray-700 text-sm"
            >
              <option value="">Period</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This yeer</option>
            </select>
          </div>

          <div>
            <button
              onClick={() => setOpenForm((pre) => !pre)}
              className="bg-main-700 rounded-4xl pr-3 pl-3 cursor-pointer pt-2 pb-2 text-grey-50 text-sm"
            >
              + Add Exercise
            </button>
          </div>
        </div>

        <div className="mt-7 bg-blue-200 pt-1.5 pb-1.5 px-4 rounded-2xl">
          <ul className="flex text-gray-600 font-semibold text-sm gap-7">
            <li className="basis-2/6 text-center">Exercise Name</li>
            <li className="basis-1/6 text-center">Activity</li>
            <li className="basis-1/6 text-center">Duration</li>
            <li className="basis-1/6 text-center">Date</li>
            <li className="basis-1/6 text-center">Calories</li>
            <li className="basis-1/6 text-center">Operations</li>
          </ul>
        </div>

        <div>
          {filteredWorkouts
            .filter((item) => item.by === user.id)
            .map((item) => (
              <ListWorkOutPlan
                key={item.id}
                item={item}
                handleOpenOperation={handleOpenOperation}
                openOperation={openOperation}
              />
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
    </div>
  );
};

export default WorkoutPlan;
