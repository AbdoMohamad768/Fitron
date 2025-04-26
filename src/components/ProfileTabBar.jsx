import { NavLink } from "react-router-dom";

function ProfileTabBar() {
    return (
        <div className="flex justify-around items-center rounded-2xl font-semibold w-full bg-[#E8F0E8] p-3 pb-3 mb-5 mt-3">
            <NavLink to="/app/profile/info" className="text-sm uppercase cursor-pointer text-[18px]">
                {({ isActive }) => (
                    <div className={`${isActive ? "text-main-700 border-b-2 border-[#7AC142]" : "text-[#666]"}`}>
                        INFO
                    </div>
                )}
            </NavLink>

            <NavLink to="/app/profile/display" className="text-sm uppercase cursor-pointer text-[18px]">
                {({ isActive }) => (
                    <div className={`${isActive ? "text-main-700 border-b-2 border-[#7AC142]" : "text-[#666]"}`}>
                        DISPLAY
                    </div>
                )}
            </NavLink>

            <NavLink to="/app/profile/details" className="text-sm uppercase cursor-pointer text-[18px]">
                {({ isActive }) => (
                    <div className={`${isActive ? "text-main-700 border-b-2 border-[#7AC142]" : "text-[#666]"}`}>
                        PROFILE
                    </div>
                )}
            </NavLink>
        </div>
    );
}

export default ProfileTabBar;
