import { Card, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Logo from "../logo/Logo";
import { Btns } from "../dashboard/Btns";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";

export default function SideMenu() {
  const navigate = useNavigate();

  const [cookies, setCookies, removeCookie] = useCookies(["user"]);

  function logOutHandler() {
    removeCookie(["accessToken"], { path: "/" });
    removeCookie(["refreshToken"], { path: "/" });
    navigate("/");
    toast.warning("Yor're Loged Out", {
      position: toast.POSITION.TOP_RIGHT,
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
          <h1 className="pl-4 text-xl">Admins Name</h1>

          <div>
            <Btns />
          </div>
        </div>

        <Button
          onClick={logOutHandler}
          className="bg-ocean-blue hover:bg-blue-800 text-white p-3 w-20 rounded-md"
        >
          Log Out
        </Button>
      </Card>
    </>
  );
}
