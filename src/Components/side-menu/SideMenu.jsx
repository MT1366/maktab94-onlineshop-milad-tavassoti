import { NavLink } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Card, Button } from "@material-tailwind/react";
import Logo from "../logo/Logo";

export default function SideMenu() {
  return (
    <>
      <Button className="md:hidden w-24">Ham</Button>
      <Card className="md:flex hidden flex-col pl-2 items-start w-96 h-auto bg-blue-800 text-white rounded-md">
        <ul className="flex flex-col gap-4 pt-5">
          <div className="w-20 flex text-center">
            <Logo />
          </div>

          <li className="flex text-slate-600 p-2 gap-1 w-64 hover:bg-blue-700 hover:rounded-lg hover:p-2 ">
            <ShoppingBagIcon />
            <NavLink to="/productbascket">Product Bascket</NavLink>
          </li>
          <li className="flex p-2 gap-1 w-64 hover:bg-blue-700 hover:rounded-lg hover:p-2 text-">
            <PaymentRoundedIcon />
            <NavLink to="/paymentpage">Payment</NavLink>
          </li>

          <li className="flex p-2 gap-1 w-64 hover:bg-blue-700 hover:rounded-lg hover:p-2 text-">
            <FavoriteBorderRoundedIcon />{" "}
            <NavLink to="/wishlist">WishList</NavLink>
          </li>
        </ul>
      </Card>
    </>
  );
}
