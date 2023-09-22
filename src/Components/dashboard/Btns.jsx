import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchOrders } from "../../features/orders/orderSlice";
import { fetchProducts } from "../../features/products/productSlice";
import { fetchInventory } from "../../features/inventory/inventorySlice";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi2";

// import { fetchSubCategories } from "../../features/subcategory/subCategory";
// import { getPendingDeliveryOrders } from "../../features/orders/orderSlice";
// import { getDeliveredOrders } from "../../features/orders/orderSlice";

export function Btns() {
  const dispatch = useDispatch();

  function productHandler() {
    dispatch(fetchProducts());
    // dispatch(fetchSubCategories());
  }
  function orderHandler() {
    dispatch(fetchOrders());
  }

  function inventoryHandler() {
    dispatch(fetchInventory());
  }

  return (
    <div className="flex flex-col max-w-full gap-3 p-5 align-center justify-around">
      <div className=" flex flex-col">
        <ul className="flex flex-col gap-8 mt-10 text-left text-xl w-full">
          <li>
            <NavLink
              onClick={productHandler}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-3"
                  : "opacity-50 flex items-center gap-3"
              }
              to="products"
            >
              <HiOutlineArchiveBox />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={inventoryHandler}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-3"
                  : "opacity-50 flex items-center gap-3"
              }
              to="inventory"
            >
              <HiOutlineAdjustmentsHorizontal />
              Pricing And Inventory
            </NavLink>
          </li>
          <li className="text-grey-200">
            <NavLink
              onClick={orderHandler}
              className={({ isActive }) =>
                isActive
                  ? "text-white flex items-center gap-3"
                  : "opacity-50 flex items-center gap-3"
              }
              to="orders"
            >
              <HiOutlineShoppingCart />
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
