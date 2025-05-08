import { Outlet } from "react-router";
import ProfileTabBar from "../components/ProfileTabBar"; // Adjust the path as needed

function Profile() {
  return (
    <>
      <ProfileTabBar />
      <Outlet />
    </>
  );
}

export default Profile;
