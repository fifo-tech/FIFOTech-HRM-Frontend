import Navbar from "@/components/partials/Navbar";
import Sidebar from "@/components/partials/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex size-full">
        <aside className="h-full w-80">
          <Sidebar />
        </aside>
        <div className="size-full flex-1">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
