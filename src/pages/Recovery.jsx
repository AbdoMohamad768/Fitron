import { Outlet } from "react-router";

function Recovery() {
  return (
    <main className="form">
      <div className="recovery-form">
        <Outlet />
      </div>
    </main>
  );
}

export default Recovery;
