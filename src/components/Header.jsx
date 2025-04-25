import Avatar from "./Avatar";

const Header = ({ onOpenSidebar }) => {
  return (
    <div className="app-layout-header">
      <div className="flex gap-2 items-center">
        <button
          className="sm:hidden px-2.5 py-0.5 text-2xl rounded-lg cursor-pointer hover:bg-circle-icon-green"
          onClick={() => onOpenSidebar((pre) => !pre)}
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <h2 className="sm:text-3xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center">
        {/* <span className="mr-3 w-8 h-8 rounded-xl flex justify-center items-center bg-grey-50">
          <i className="fa-regular fa-bell"></i>
        </span> */}

        <Avatar />

        <span className="font-semibold mr-3 hidden sm:block">@Username</span>

        <span className="w-8 h-8 rounded-xl flex justify-center items-center border border-main-700 text-main-700">
          <i className="fa-regular fa-sun"></i>
        </span>

        {/* <i className="fa-regular fa-moon"></i> */}
      </div>
    </div>
  );
};

export default Header;
