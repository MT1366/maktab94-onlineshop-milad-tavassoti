import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" className="w-20 ">
      <img src="./src/images/logo.png" alt="" className="rounded-full" />
    </NavLink>
  );
}
