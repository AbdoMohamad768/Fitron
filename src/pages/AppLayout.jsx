import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

function AppLayout() {
  const [sidebar, setSidebar] = useState(false);

  function onCloseSidebar() {
    setSidebar(false);
  }
  function onOpenSidebar() {
    setSidebar(true);
  }

  return (
    <div className="h-screen bg-main-200 grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Sidebar sidebarOpen={sidebar} onCloseSidebar={onCloseSidebar} />

      <Header onOpenSidebar={onOpenSidebar} />

      <main className="flex-1 p-4 m-3 mt-0 rounded-xl bg-white overflow-auto col-span-2 sm:col-span-1">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
