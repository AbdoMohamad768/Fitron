import { useDispatch, useSelector } from "react-redux";
import {
  deleteWorkout,
  duplicateWorkout,
  getWorkoutByActivity,
} from "../store/slices/workoutSlice";
import { useState } from "react";
import Modal from "./Modal";
import ExerciseForm from "../pages/ExerciseForm";
const workoutTypeIcons = {
  running: <i className="fa-solid fa-person-running"></i>,
  cycling: <i className="fa-solid fa-person-biking"></i>,
  swimming: <i className="fa-solid fa-person-swimming"></i>,
  walking: <i className="fa-solid fa-person-walking"></i>,
  gym: <i className="fa-solid fa-dumbbell"></i>,
};

const ListWorkoutPlan = ({ item, handleOpenOperation, openOperation }) => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.workouts.status);

  const [openModal, setOpenModal] = useState(false);

  function handleDelete() {
    console.log(item.id);
    dispatch(deleteWorkout({ id: item.id, activity: item.activity }));

    handleOpenOperation(item.id);
  }

  function handleDuplicate() {
    dispatch(duplicateWorkout({ workout: item }));

    handleOpenOperation(item.id);
  }

  function handleUpdate() {
    // dispatch(updateWorkout({ workout: item }));
    dispatch(getWorkoutByActivity({ id: item.id, activity: item.activity }));
    setOpenModal(true);

    handleOpenOperation(item.id);
  }

  return (
    <>
      {openModal && status === "got" && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <ExerciseForm
            setOpenForm={setOpenModal}
            isUpdate={true}
            // handleSubmit={() => dispatch(updateWorkout({ workout: item }))}
          />
        </Modal>
      )}

      <ul className="flex items-center px-3 py-2 bg-white dark:bg-dark-main-750 dark:text-white rounded-xl mt-2 text-sm text-gray-700 gap-3 ">
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
        <li className="basis-1/6 text-center">{item.activity}</li>
        <li className="basis-1/6 text-center">{item.duration}</li>
        <li className="basis-1/6 text-center">{item.start_date}</li>
        <li className="basis-1/6 text-center">{item.calories_burned}</li>
        <li className="basis-1/6 relative">
          <button
            onClick={() => handleOpenOperation(item.id)}
            className="w-7 h-7 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          {openOperation === item.id && (
            <>
              <div
                onClick={() => handleOpenOperation(item.id)}
                className="fixed top-0 left-0 z-45 h-screen w-screen bg-[#eeeeee00] blur-2xl"
              ></div>
              <div className="absolute z-50 top-0 left-8 bg-white shadow-md rounded-md">
                <button
                  onClick={handleDelete}
                  className="w-full flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 cursor-pointer"
                >
                  <i className="fa-solid fa-trash"></i>
                  Delete
                </button>
                <button
                  onClick={handleDuplicate}
                  className="w-full flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 cursor-pointer"
                >
                  <i className="fa-solid fa-copy"></i>
                  Duplicate
                </button>
                <button
                  onClick={handleUpdate}
                  className="w-full flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 py-2 px-4 rounded-md transition duration-300 cursor-pointer"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                  Update
                </button>
              </div>
            </>
          )}
        </li>
      </ul>
    </>
  );
};

export default ListWorkoutPlan;
