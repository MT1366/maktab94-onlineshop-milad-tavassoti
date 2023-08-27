import { Outlet } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";

import SideMenu from "../side-menu/SideMenu";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/category/categorySlice";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <div className="flex relative max-w-full md:flex-row flex-col rounded-full p-2">
        <SideMenu />
        <div className="absolute left-80 top-7 ">
          <Card className="flex m-1 flex-col w-54 h-98 justify-center bg-white ">
            <Outlet />
          </Card>
        </div>
      </div>
      <div>
        <ToastContainer />;
      </div>
    </>
  );
}
