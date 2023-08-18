import { NavLink } from "react-router-dom";

export function Btns() {
  return (
    <div className="flex flex-col gap-3 p-5 align-center justify-around">
      <div className=" flex flex-col">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink to="orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="inventory">Pricing And Inventory</NavLink>
          </li>
          <li>
            <NavLink to="products">Products</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
