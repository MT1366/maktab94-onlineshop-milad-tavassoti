import { NavLink } from "react-router-dom";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import PercentRoundedIcon from "@mui/icons-material/PercentRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";

export default function AppNav() {
  return (
    <div className="flex justify-between items-center gap-5 p-1 bg-blue-200 text-white">
      <div className="flex flex-row gap-2">
        <NavLink to="/categories" className="flex items-center">
          <MenuRoundedIcon />
          <p className="border-r pr-2">Categories</p>
        </NavLink>
        <NavLink
          to="/incredibels"
          className="flex items-center hover:border-b-2 hover:border-b-blue-500"
        >
          <GradeRoundedIcon />
          <p>Incredibles</p>
        </NavLink>
        <NavLink
          to="/incredibels"
          className="flex items-center hover:border-b-2 hover:border-b-blue-500"
        >
          <WhatshotRoundedIcon />
          <p>Top Sales</p>
        </NavLink>
        <NavLink
          to="/incredibels"
          className="flex items-center hover:border-b-2 hover:border-b-blue-500"
        >
          <PercentRoundedIcon />
          <p>Discounts</p>
        </NavLink>
      </div>
    </div>
  );
}
