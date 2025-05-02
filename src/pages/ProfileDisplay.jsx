import { useDispatch, useSelector } from "react-redux";
import {
  fetchSettings
} from "../store/slices/settingsSlice";
import { useEffect, useState } from "react";


function ProfileDisplay() {
  const dispatch = useDispatch();
  
  const { settings, status } = useSelector((state) => state.settings);
  const [measurement,setMeasurement] = useState("");
  const [timeZone,setTimeZone] =useState("");


  useEffect(() => {
      dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    if (status === "succeeded" && settings) {
      setMeasurement(settings.measurement_units?.weight || "kg");  
      setTimeZone(settings.time_zone || "Egypt");  
    }
  }, [status, settings]);

  return (
    <div className="w-full flex justify-center flex-col items-start p-6 rounded-2xl bg-[#E8F0E8]">
      <div className="w-full mb-4 flex flex-col">
        <label className="font-semibold mb-2">Measurement Units</label>
        <select
          name="measurment"
          id="measurment"
          className="bg-white pt-2 pb-2 pl-3"
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
        >
          <option value="kg">kg</option>
          <option value="m">m</option>
          <option value="kcal">kcal</option>
          <option value="c°">c°</option>
        </select>
      </div>

      <div className="w-full flex flex-col mb-10">
        <label className="font-semibold mb-2">Time Zone</label>
        <select
          name="Zone"
          id="zone"
          className="bg-white pt-2 pb-2 pl-3"
          value={timeZone}
          onChange={(e) => setTimeZone(e.target.value)}
        >
          <option value="Egypt">Egypt</option>
          <option value="KSA">KSA</option>
          <option value="UAE">UAE</option>
          <option value="Jordan">Jordan</option>
        </select>
      </div>

      <button
        className="bg-main-700 pt-2 pb-2 pr-4 md:w-1/6 pl-4 sm:w-full rounded-2xl text-white cursor-pointer hover:bg-[#73bc31] transition duration-200"
        type="submit" 
      >
        Save
      </button>
    </div>
  );
}

export default ProfileDisplay;
