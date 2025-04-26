import { Outlet } from "react-router";
import ProfileTabBar from "../components/ProfileTabBar"; // Adjust the path as needed

function Profile() {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Tab Bar */}
        <ProfileTabBar />
      </div>

      <Outlet />
    </div>
  );
}

export default Profile;
