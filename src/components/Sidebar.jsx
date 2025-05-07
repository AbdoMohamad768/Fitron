import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import LogoButton from "./LogoButton";

const sidebarLinks = [
  {
    to: "/app/dashboard",
    icon: <i className="fa-solid fa-chart-line"></i>,
    label: "Dashboard",
  },
  {
    to: "/app/workout-plan",
    icon: <i className="fa-solid fa-dumbbell"></i>,
    label: "Workout Plan",
  },
  {
    to: "/app/profile",
    icon: <i className="fa-solid fa-user"></i>,
    label: "Profile",
  },
];

const Sidebar = ({ sidebarOpen, onCloseSidebar }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <nav
      className={`sidebar ${sidebarOpen ? "translate-x-[100%]" : "translate-x-0"
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
          {sidebarLinks.map((link, index) => (
            <SidebarLink
              key={index}
              to={link.to}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </ul>

        <LogoutButton
          disabled={user.status === "loading"}
          onClick={() => dispatch(logout())}
        />
      </div>
    </nav>
  );
};

function SidebarLink({ to, icon, label }) {
  return (
    <li className="">
      <NavLink
        to={to}
        className="sidebar-link flex px-4 py-2 gap-2 items-center w-full hover:bg-white hover:text-main-700 rounded-xl"
      >
        <span className="sidebar-link-icon">{icon}</span>
        <span className="sm:hidden md:block">{label}</span>
      </NavLink>
    </li>
  );
}

function LogoutButton({ onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 flex gasp-2 items-center justify-center w-full sm:justify-start rounded-xl ${disabled === "loading"
        ? "cursor-not-allowed hover:bg-red-100"
        : "cursor-pointer hover:bg-red-500 hover:text-white"
        }`}
    >
      <span className="sidebar-link-icon">
        <i className="fas fa-sign-out-alt"></i>
      </span>
      <span className="sm:hidden md:block">Logout</span>
    </button>
  );
}

export default Sidebar;
