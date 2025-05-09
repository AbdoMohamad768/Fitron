import { useLocation } from "react-router";
import Avatar from "./Avatar";
import { useSelector } from "react-redux";
import useTheme from "../hooks/useTheme";
import SpinnerMini from "./SpinnerMini";

const Header = ({ onOpenSidebar }) => {
  let pageName = useLocation().pathname.split("/")[2];

  if (pageName.includes("-")) {
    pageName = pageName
      .split("-")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  }

  const { theme, toggleTheme } = useTheme();

  const { status, user } = useSelector((state) => state.user);

  return (
    <div className="app-layout-header">
      <div className="flex gap-2 items-center">
        <button
          className="sm:hidden px-2.5 py-0.5 text-2xl rounded-lg cursor-pointer hover:bg-circle-icon-green"
          onClick={() => onOpenSidebar((pre) => !pre)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <h2 className="sm:text-3xl font-semibold">
          {pageName[0].toLocaleUpperCase() + pageName.substring(1)}
        </h2>
      </div>

      <div className="flex items-center">
        <Avatar />

        <span className="font-semibold mr-3 hidden sm:block">
          {status === "loading" || status === "updating" ? (
            <SpinnerMini />
          ) : (
            user.first_name + " " + user.last_name
          )}
        </span>

        <button
          onClick={toggleTheme}
          aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="w-8 h-8 rounded-xl flex justify-center items-center border border-main-700 text-main-700 hover:bg-main-700 hover:text-white transition-colors cursor-pointer"
        >
          <i
            className={`fa-regular ${theme === "light" ? "fa-sun" : "fa-moon"}`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
