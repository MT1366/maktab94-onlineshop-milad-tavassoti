import OrderStatus from "./OrderStatus";

export default function Orders() {
  return (
    <>
      <div className="flex justify-around items-center p-5">
        <h2>Orders Management</h2>
        <OrderStatus />
      </div>
      <div className="flex flex-row justify-between ">
        <h1>ORDES TABLE</h1>
      </div>
      <div className="absolute end-0 w-40 h-98 bg-gray-100 border-2 rounded-r-lg">
        righ side menu
      </div>
    </>
  );
}
