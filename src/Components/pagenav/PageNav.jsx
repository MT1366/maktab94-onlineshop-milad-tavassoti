import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

export default function PageNav() {
  return (
    <>
      <nav className="flex items-center rounded-md justify-between bg-white-700 text-pale-green p-1 m-10">
        <Logo />
        <ul className="flex flex-row gap-5 items-center">
          <li className="">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="">
            <NavLink to="products">Products</NavLink>
          </li>
          <li className="">
            <NavLink to="product/">Categories</NavLink>
          </li>
          <li className="">
            <NavLink to="product/">Brand</NavLink>
          </li>
          <li className="">
            <NavLink to="product/">Pricing</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5 p-1">
          <NavLink to="/loginpage">Login</NavLink>

          <NavLink to="/dashboard">
            <p className="bg-yellow-700 text-white pl-4 pr-4 pt-1 pb-1 rounded-lg">
              Register
            </p>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
