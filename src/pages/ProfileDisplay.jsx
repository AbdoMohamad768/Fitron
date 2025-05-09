import { useDispatch, useSelector } from "react-redux";
import { UpdateSettings } from "../store/slices/settingsSlice";
import { useEffect, useState } from "react";
import SpinnerMini from "../components/SpinnerMini";

function ProfileDisplay() {
  const dispatch = useDispatch();
  const { settings, status } = useSelector((state) => state.settings);

  const [measurement, setMeasurement] = useState(
    settings.measurement_units || ""
  );
  const [timeZone, setTimeZone] = useState(settings.time_zone || "");
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (status === "succeeded") {
      setIsEdit(false);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      UpdateSettings({
        id: settings.id,
        timeZone,
        measurementUnits: measurement,
      })
    );
  };

  return (
    <div className="w-full flex justify-center flex-col items-start p-6 rounded-2xl bg-[#E8F0E8] dark:bg-dark-main-750 dark:text-white">
      {/* <div className="w-full mb-4 flex flex-col">
        <label className="font-semibold mb-2">Measurement Units</label>
        <select
          name="measurment"
          id="measurment"
          className="bg-white dark:bg-dark-grey-200 dark:text-grey-200 pt-2 pb-2 pl-3 focus:outline-none focus:ring-1 focus:ring-main-750"
          value={measurement}
          onChange={(e) => {
            setMeasurement(e.target.value), setIsEdit(true);
          }}
        >
          <option value="kg">kg</option>
          <option value="m">m</option>
          <option value="kcal">kcal</option>
          <option value="c°">c°</option>
        </select>
      </div> */}

      <div className="w-full flex flex-col mb-10">
        <label className="font-semibold mb-2">Time Zone</label>
        <select
          name="Zone"
          id="zone"
          className="bg-white dark:bg-dark-grey-200 dark:text-grey-200 pt-2 pb-2 pl-3 focus:outline-none focus:ring-1 focus:ring-main-750"
          value={status === "loading" ? <SpinnerMini /> : timeZone}
          onChange={(e) => {
            setTimeZone(e.target.value), setIsEdit(true);
          }}
        >
          <option value="Egypt">Egypt</option>
          <option value="KSA">KSA</option>
          <option value="UAE">UAE</option>
          <option value="Jordan">Jordan</option>
        </select>
      </div>
      {isEdit && (
        <button
          onClick={handleSubmit}
          className={`bg-main-700 pt-2 pb-2 pr-4 md:w-1/6 pl-4 sm:w-full rounded-2xl text-white hover:bg-green-600 transition duration-200 ${
            status === "updating"
              ? "opacity-50 cursor-not-allowed flex justify-center items-center"
              : "cursor-pointer"
          }`}
          type="submit"
        >
          {status === "updating" ? <SpinnerMini /> : "Save"}
        </button>
      )}
    </div>
  );
}

export default ProfileDisplay;
