import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-grey-200 text-white flex flex-col p-4">
            <div className="flex items-center mb-8">
                <Logo width="40" />
                <span className="ml-2 text-xl font-semibold">Fitron</span>
            </div>

            <nav className="flex flex-col gap-4">
                <NavLink
                    to="/app/dashboard"
                    className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded-lg transition-colors ${isActive ? "bg-main-700" : "hover:bg-main-800"
                        }`
                    }
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3 9H21M9 9V21M9 9H3V21H9M15 9H21V21H15M15 9V3H9"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Dashboard
                </NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;