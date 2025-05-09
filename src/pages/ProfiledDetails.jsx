import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import default_user from "../../public/default-user.jpg";
import SpinnerMini from "../components/SpinnerMini";
import { updateUser } from "../store/slices/authSlice";

function ProfiledDetails() {
  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.first_name || "");
  const [lastName, setLastName] = useState(user.last_name || "");
  const [birthday, setBirthday] = useState(user.birthday || "");
  const [weight, setWeight] = useState(user.weight || "");
  const [height, setHeight] = useState(user.height || "");
  const [gender, setGender] = useState(user.gender || "");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (status === "updated") {
      setIsEdit(false);
    }
  }, [status, user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUser({
        id: user.id,
        firstName,
        lastName,
        birthday,
        weight,
        height,
        gender,
      })
    );
  };

  return (
    <div className="bg-[#E8F0E8] dark:bg-dark-main-750 dark:text-white w-full justify-center h-full flex flex-col 3xl:flex-row items-center mt-3 mb-5 gap-6 sm:gap-10 px-6 sm:px-10 py-4 rounded-3xl shadow-md">
      <div className="flex flex-col justify-center items-center sm:pt-5 gap-3">
        <div className="aspect-square w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] shrink-0">
          <img
            src={default_user}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* <label htmlFor="image-upload" className="flex gap-1 cursor-pointer">
          <h3 className="font-semibold text-black-icon-500 dark:text-white">
            Upload
          </h3>
          <img src="/public/Upload.svg" alt="" className="w-7" />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          className="hidden"
        /> */}
      </div>

      <form className="w-full 3xl:flex-1" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <div className=" mb-1">
            <label className="font-semibold text-base sm:text-lg md:text-xl">
              Full Name
            </label>
          </div>
          <div className="flex gap-4 justify-center">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value), setIsEdit(true);
              }}
              placeholder="First name"
              className="bg-white-900 w-1/2 rounded-md p-2 dark:bg-dark-grey-200 dark:text-grey-200 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value), setIsEdit(true);
              }}
              placeholder="Last name"
              className="bg-white-900 w-1/2 rounded-md p-2 dark:bg-dark-grey-200 dark:text-grey-200 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 mb-5">
          <label className="font-semibold text-base sm:text-lg md:text-xl">
            Birthdate
          </label>
          <input
            type="date"
            required
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value), setIsEdit(true);
            }}
            className="bg-white-900 p-2 rounded-md dark:bg-dark-grey-200 dark:text-grey-200 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
          />
        </div>

        <div className="flex gap-4 justify-center mb-5">
          <div className="flex flex-col w-1/2">
            <label className="font-semibold text-base sm:text-lg md:text-xl mb-1">
              Weight(Kg)
            </label>
            <input
              type="text"
              required
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value), setIsEdit(true);
              }}
              placeholder="70"
              className="bg-white-900 p-2 rounded-md dark:bg-dark-grey-200 dark:text-grey-200 focus:outline-none focus:ring-1 focus:ring-main-750 "
            />
          </div>

          <div className="flex flex-col justify-center w-1/2 ">
            <label className="font-semibold text-base sm:text-lg md:text-xl mb-1 ">
              Height(m)
            </label>
            <input
              type="text"
              required
              value={height}
              onChange={(e) => {
                setHeight(e.target.value), setIsEdit(true);
              }}
              placeholder="1.75"
              className="bg-white-900 p-2 rounded-md dark:bg-dark-grey-200 dark:text-grey-200 focus:outline-none focus:ring-1 focus:ring-main-750"
            />
          </div>
        </div>

        <div className="mb-5">
          <h2 className="font-semibold text-base sm:text-lg md:text-xl">
            Gender
          </h2>
          <select
            required
            value={gender}
            onChange={(e) => {
              setGender(e.target.value), setIsEdit(true);
            }}
            className="w-1/1 p-2 bg-white-900 rounded-md dark:bg-dark-grey-200 dark:text-grey-200 text-black-text-400 focus:outline-none focus:ring-1 focus:ring-main-750"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {isEdit && (
          <button
            className={`bg-main-700 pt-2 pb-2 pr-4  md:w-1/6 pl-4  sm:w-full rounded-2xl text-white hover:bg-green-600  trasition duration-200 ${
              status === "updating"
                ? " cursor-not-allowed flex items-center justify-center"
                : "cursor-pointer"
            }`}
            type="submit"
          >
            {status === "updating" ? <SpinnerMini /> : "Save"}
          </button>
        )}
      </form>
    </div>
  );
}

export default ProfiledDetails;
