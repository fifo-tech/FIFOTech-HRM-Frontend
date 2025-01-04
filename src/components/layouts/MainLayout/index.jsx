import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex overflow-hidden">
        <aside className="h-full w-80 shrink-0">
          <Sidebar />
        </aside>
        <div className="max-w-full flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
