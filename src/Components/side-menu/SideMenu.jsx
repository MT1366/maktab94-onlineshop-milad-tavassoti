import { Card, Button, Badge } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { Btns } from "../dashboard/Btns";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { Avatar } from "@material-tailwind/react";

export default function SideMenu() {
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookie] = useCookies(["user"]);

  function logOutHandler() {
    removeCookie(["accessToken"]);
    removeCookie(["refreshToken"]);
    navigate("/");
    toast.error("Yor're Loged Out", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, //3 seconds
    });
  }

  return (
    <>
      <Button className="md:hidden w-24">Ham</Button>
      <Card className="md:flex hidden max-w-full flex-col pl-2 items-start w-100 h-99 m-1 bg-regal-blue text-white rounded-2xl">
        <div className="flex flex-col gap-4 pt-5">
          <div className="w-20 flex m-4 text-center">
            <Logo />
          </div>
          <div className="flex gap-2 ml-4 items-center">
            <Badge content="1">
              <Avatar
                src="../src/images/adminpanel-mages/profile.png"
                alt="avatar"
                variant="rounded"
                size="lg"
              />
            </Badge>
            <div className="pl-4">
              <h1 className="text-xl">Admin Panel</h1>
              <p className="text-xs">sophia@gmail.com</p>
            </div>
          </div>

          <div>
            <Btns />
          </div>
        </div>

        <Button
          onClick={logOutHandler}
          className="bg-transparent hover:bg-blue-800 text-white p-3 w-20 rounded-md flex flex-row-reverse items-center justify-center gap-1 relative top-64 "
        >
          Log Out
          <HiArrowLeftOnRectangle className="text-lg" />
        </Button>
      </Card>
    </>
  );
}
