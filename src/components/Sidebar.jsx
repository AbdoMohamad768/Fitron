import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-white-900 text-grey-350 flex flex-col p-4">
            <div className="flex items-center mb-8">
                <Logo width="40" />
                <span className="ml-2 text-xl font-semibold">Fitron</span>
            </div>

            <nav className="flex flex-col gap-4 h-full">
                <NavLink
                    to="/app/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-lg transition-colors ${isActive ? "text-main-700" : "hover:bg-main-700 hover:text-white"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <img
                                src={isActive ? "/dashboard-active.png" : "/dashboard-inactive.png"}
                                alt="Dashboard Icon"
                                className="w-6 h-6"
                            />
                            <span>Dashboard</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/app/workout-plan"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-lg transition-colors ${isActive ? "text-main-700" : "hover:bg-main-700 hover:text-white"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <img
                                src={isActive ? "/workout-plan-active.png" : "/workout-plan-inactive.png"}
                                alt="Workout Plan Icon"
                                className="w-6 h-6"
                            />
                            <span>Workout Plan</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-lg transition-colors mt-auto ${isActive ? "text-main-700" : "hover:bg-main-700 hover:text-white"
                        }`
                    }
                >
                    <i className="fas fa-sign-out-alt w-6 h-4"></i>
                    <span>Logout</span>
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;