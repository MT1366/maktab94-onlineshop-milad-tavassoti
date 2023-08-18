import { Card, Button } from "@material-tailwind/react";
import Logo from "../logo/Logo";
import { Btns } from "../dashboard/Btns";

export default function SideMenu() {
  return (
    <>
      <Button className="md:hidden w-24">Ham</Button>
      <Card className="md:flex hidden flex-col pl-2 items-start w-100 h-99 m-1 bg-black text-white rounded-md">
        <div className="flex flex-col gap-4 pt-5">
          <div className="w-20 flex m-4 text-center">
            <Logo />
          </div>
          <h1 className="pl-4">Admins Name</h1>

          <div>
            <Btns />
          </div>
        </div>
      </Card>
    </>
  );
}
