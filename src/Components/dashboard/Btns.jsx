import { NavLink } from "react-router-dom";

export function Btns() {
  return (
    <div className="flex flex-col gap-3 p-5 align-center justify-around">
      <div className=" flex flex-col">
        <ul className="flex flex-col gap-8 mt-10 text-left text-xl w-full">
          <li className="text-grey-200">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "opacity-50"
              }
              to="orders"
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "opacity-50"
              }
              to="inventory"
            >
              Pricing And Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-white" : "opacity-50"
              }
              to="products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
