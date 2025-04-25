import { NavLink } from "react-router-dom";
import LogoButton from "./LogoButton";

const Sidebar = ({ sidebarOpen, onCloseSidebar }) => {
  return (
    <nav
      className={`sidebar ${
        sidebarOpen ? "translate-x-[100%]" : "translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between w-full px-4 mb-8">
        <LogoButton size="md" />
        <button
          onClick={onCloseSidebar}
          className="text-2xl hover:bg-grey-300 w-9 h-9 flex justify-center items-center rounded-full cursor-pointer sm:hidden"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="flex flex-col justify-between h-screen w-full">
        <ul className="sidebar-links-list">
          <li className="px-4 py-2">
            <NavLink
              to="/app/dashboard"
              className="flex gap-2 items-center w-full"
            >
              <span className="sidebar-link-icon">
                <i className="fa-solid fa-chart-line"></i>
              </span>
              <span className="sm:hidden md:block">Dashboard</span>
            </NavLink>
          </li>

          <li className="px-4 py-2">
            <NavLink
              to="/app/workout-plan"
              className="flex gap-2 items-center w-full"
            >
              <span className="sidebar-link-icon">
                <i className="fa-solid fa-dumbbell"></i>
              </span>
              <span className="sm:hidden md:block">Workout Plan</span>
            </NavLink>
          </li>

          <li className="px-4 py-2">
            <NavLink
              to="/app/profile"
              className="flex gap-2 items-center w-full"
            >
              <span className="sidebar-link-icon">
                <i className="fa-solid fa-user"></i>
              </span>
              <span className="sm:hidden md:block">Profile</span>
            </NavLink>
          </li>
        </ul>

        <button className="px-4 py-2 flex gasp-2 items-center justify-center w-full sm:justify-start cursor-pointer">
          <span className="sidebar-link-icon">
            <i className="fas fa-sign-out-alt"></i>
          </span>
          <span className="sm:hidden md:block">Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
