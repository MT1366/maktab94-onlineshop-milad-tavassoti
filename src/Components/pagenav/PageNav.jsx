import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";

export default function PageNav() {
  return (
    <nav className="flex justify-between m-5">
      <Logo />

      <ul className="flex flex-row gap-5">
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/loginpage">Login Page</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/paymentpage">Payment</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product Page</NavLink>
        </li>
        <li>
          <NavLink to="/productbascket">Product Bascket</NavLink>
        </li>
      </ul>
    </nav>
  );
}
