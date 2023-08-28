import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink to="/" className="w-24 ">
      <img
        src="./src/images/logo.png"
        alt=""
        className="rounded-md  bg-blue w-16"
      />
    </NavLink>
  );
}
