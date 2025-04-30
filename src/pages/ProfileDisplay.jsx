import { useState } from "react";

function ProfileDisplay() {
  // Make the display section in the profile page and make responsive to min-width 320px
  // You can go to the page in this rout "/app/profile/display"
  const [measurmentData, setData] = useState({
    measurment: "",
    Zone: "",
  });
  const changeDate = (e) => {
    const { name, value } = e.target;
    setData((e) => ({ ...e, [name]: value }));
  };
  return (
    <div className="w-full flex justify-center flex-col items-start p-6 rounded-2xl bg-[#E8F0E8]">
      <div className="w-full mb-4 flex flex-col">
        <label className="font-semibold mb-2">Measurement Units</label>
        <select
          name="measurment"
          id="measurment"
          className="bg-white pt-2 pb-2 pl-3"
          onChange={changeDate}
          value={measurmentData.measurment}
        >
          <option value="">Metric (kg/m/kcal/c°)</option>
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
          onChange={changeDate}
          value={measurmentData.Zone}
        >
          <option value="Egypt">Egypt</option>
          <option value="KSA">KSA</option>
          <option value="UAE">UAE</option>
          <option value="Jordon">Jordon</option>
        </select>
      </div>

      <button
        className="bg-main-700 pt-2 pb-2 pr-4  md:w-1/6 pl-4  sm:w-full rounded-2xl text-white"
        type="submit"
      >
        Save
      </button>
    </div>
  );
}

export default ProfileDisplay;
