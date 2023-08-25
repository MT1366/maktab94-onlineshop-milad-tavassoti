import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../features/orders/orderSlice";
import { useEffect } from "react";
import { Button } from "@material-tailwind/react";

export default function OrdersTable() {
  const order = useSelector((store) => store.orders);
  const { orders } = order;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 border p-1">
        <div>
          <Button>Delivered</Button>
          <Button>pendings</Button>
        </div>
        <div>
          {orders &&
            orders.map((order) => (
              <>
                <p key={order.id}>{order.name}</p>
              </>
            ))}
        </div>
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
