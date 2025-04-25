import { Outlet } from "react-router";

function Profile() {
  return (
    <div>
      <div>Tabs here</div>

      <Outlet />
    </div>
  );
}

export default Profile;
