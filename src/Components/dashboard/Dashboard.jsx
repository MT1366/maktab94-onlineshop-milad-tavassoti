import { Outlet } from "react-router-dom";
import { Card } from "@material-tailwind/react";

import SideMenu from "../side-menu/SideMenu";

export default function Dashboard() {
  return (
    <>
      <div className="flex relative md:flex-row flex-col rounded-full p-2">
        <SideMenu />
        <div className="absolute left-80 top-12 ">
          <Card className="flex m-1 flex-col w-55 h-129 justify-center bg-white ">
            <Outlet className="" />
          </Card>
        </div>
      </div>
    </>
  );
}
