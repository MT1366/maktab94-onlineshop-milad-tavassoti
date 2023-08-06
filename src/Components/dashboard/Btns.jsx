import { NavLink } from "react-router-dom";

export function Btns() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <h2>List of Products</h2>

      <ul style={{ display: "flex", gap: "30px" }}>
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
  );
}
