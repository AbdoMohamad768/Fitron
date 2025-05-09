import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSettings } from "../store/slices/settingsSlice";
import SpinnerMini from "../components/SpinnerMini";

function ProfileInfo() {
  const { user, status } = useSelector((state) => state.user);
  const { settings, status: stat } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  useEffect(() => {
    if (stat === "idle" || stat === null) {
      dispatch(fetchSettings());
    }
  }, [dispatch, stat]);

  return (
    <div className="flex flex-col items-center">
      {/* Profile Info Section */}
      <div className="bg-[#E8F0E8] dark:bg-dark-main-750 text-main-700 dark:text-white w-full flex flex-col sm:flex-row items-center mt-3 mb-5 gap-6 sm:gap-10 px-6 sm:px-10 py-4 rounded-3xl shadow-md">
        {/* Profile Image */}
        <img
          src="/default-user.jpg"
          alt="Profile"
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[218px] lg:h-[218px] rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-2 sm:mb-3 leading-tight">
            {status === "loading" ? (
              <SpinnerMini />
            ) : (
              user.first_name + " " + user.last_name
            )}
          </h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] mb-2 sm:mb-3 leading-tight">
            {status === "loading" ? <SpinnerMini /> : user.email}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 bg-[#E8F0E8] dark:bg-dark-main-750 text-main-700 dark:text-white mb-5 gap-2 px-4 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-md text-left">
          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              FIRST NAME:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.first_name || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              LAST NAME:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.last_name || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              BIRTHDAY:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.birthday || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              REGION:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {stat === "loading" ? <SpinnerMini /> : settings.time_zone || `_`}
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-1 bg-[#E8F0E8] dark:bg-dark-main-750 text-main-700 dark:text-white mb-5 gap-2 px-4 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-md text-left">
          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              GENDER:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.gender || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              WEIGHT:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.weight || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black dark:text-main-700 uppercase w-32 sm:w-40">
              HEIGHT:
            </span>
            <span className="text-[13px] sm:text-[15px] font-semibold uppercase flex-1 text-right sm:text-left">
              {status === "loading" ? <SpinnerMini /> : user.height || `_`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
