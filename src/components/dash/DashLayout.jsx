import { Outlet } from "react-router-dom";
import DashHeader from "./DashHeader.jsx";
import DashFooter from "./DashFooter.jsx";

const DashLayout = () => {
  return (
    <>
      <DashHeader />
      <div className="flex-grow-1 p-2 w-full h-screen overflow-hidden bg-gray-50 dark:bg-gray-800 ">
        <Outlet />
      </div>
      <DashFooter />
    </>
  );
};
export default DashLayout;
