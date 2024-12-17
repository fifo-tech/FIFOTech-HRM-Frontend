import { Outlet } from "react-router-dom";
import Footer from "@/components/partials/Footer/Footer";
import Navbar from "@/components/partials/Navbar/Navbar";
import SideMenu from "@/components/partials/SideMenu";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex size-full">
        <aside className="w-60 h-full">
          <SideMenu />
        </aside>
        <div className="flex-1 size-full">
        <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
