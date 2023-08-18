import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export default function PageNav() {
  return (
    <nav className="flex items-center rounded-md justify-between bg-blue-700 text-white">
      <ul className="flex flex-row gap-5 items-center">
        <li className="p-5 hover:border-b hover:text-white">
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li className="p-5 hover:border-b hover:text-white">
          <NavLink to="/loginpage">Login Page</NavLink>
        </li>

        <li className="p-5 hover:border-b hover:text-white">
          <NavLink to="product/">Product Page</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-5 p-1">
        <NavLink to="/productbascket">
          <ShoppingBagIcon />
        </NavLink>
        <NavLink to="/dashboard">
          <PersonRoundedIcon />
        </NavLink>
        <Logo />
      </div>
    </nav>
  );
}
