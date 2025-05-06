import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ProfileInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("");

  const { user, status } = useSelector((state) => state.user);
  const { settings, status: stat } = useSelector((state) => state.settings);
  useEffect(() => {
    if ((status === "success" || status === "signed-up") && user) {
      setBirthday(user.birthday);
      setFirstName(user.first_name);
      setGender(user.gender);
      setHeight(user.height);
      setLastName(user.last_name);
      setWeight(user.weight);
      setEmail(user.email);
    }
  }, [status, user]);

  useEffect(() => {
    if (stat === "succeeded" && settings) {
      setRegion(settings.time_zone);
    }
  }, [settings, stat]);

  return (
    <div className="flex flex-col items-center">
      {/* Profile Info Section */}
      <div className="bg-[#E8F0E8] w-full flex flex-col sm:flex-row items-center mt-3 mb-5 gap-6 sm:gap-10 px-6 sm:px-10 py-4 rounded-3xl shadow-md">
        {/* Profile Image */}
        <img
          src="/default-user.jpg"
          alt="Profile"
          className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[218px] lg:h-[218px] rounded-full object-cover"
        />
        <div className="flex flex-col justify-center items-center sm:items-start">
          <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-main-700 mb-2 sm:mb-3 leading-tight">
            {firstName} {lastName}
          </h2>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] text-main-700 mb-2 sm:mb-3 leading-tight">
            {email}
          </p>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] text-main-700 leading-tight">
            0123456789
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-5">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 bg-[#E8F0E8] mb-5 gap-2 px-4 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-md text-left">
          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              FIRST NAME:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {firstName || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              LAST NAME:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {lastName || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              BIRTHDAY:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {birthday || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              REGION:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {region || `_`}
            </span>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-1 bg-[#E8F0E8] mb-5 gap-2 px-4 sm:px-8 py-4 sm:py-5 rounded-3xl shadow-md text-left">
          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              GENDER:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {gender || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              WEIGHT:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {weight || `_`}
            </span>
          </div>

          <div className="flex items-center py-[8px] sm:py-[12px] border-b border-[#E0F2E9]">
            <span className="text-[12px] sm:text-[14px] font-bold text-black uppercase w-32 sm:w-40">
              HEIGHT:
            </span>
            <span className="text-[13px] sm:text-[15px] text-main-700 font-semibold uppercase flex-1 text-right sm:text-left">
              {height || `_`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
