import { NavLink } from "react-router-dom";
import styles from "./PageNav.modules.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/loginpage">Login Page</NavLink>
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
