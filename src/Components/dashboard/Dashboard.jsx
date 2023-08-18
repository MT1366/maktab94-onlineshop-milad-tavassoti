import { Outlet } from "react-router-dom";
import { Btns } from "./Btns";
import { Card } from "@material-tailwind/react";

import SideMenu from "../side-menu/SideMenu";

export default function Dashboard() {
  return (
    <div className="flex md:flex-row flex-col rounded-full p-2">
      <SideMenu />
      <div className="w-full">
        <Btns />
        <Card className="flex m-1 flex-col justify-center">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}
