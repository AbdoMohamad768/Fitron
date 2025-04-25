import { Outlet } from "react-router";

function Recovery() {
  return (
    <main className="h-screen flex items-center justify-center gradient-1">
      <div className="recovery-form">
        <Outlet />
      </div>
    </main>
  );
}

export default Recovery;
