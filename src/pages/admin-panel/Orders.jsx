import OrderStatus from "./OrderStatus";

export default function Orders() {
  return (
    <>
      <div className="flex justify-around self-start items-center p-5">
        <h2>Orders Management</h2>
        <OrderStatus />
      </div>
      <div>
        <h1>ORDES TABLE</h1>
        <div></div>
      </div>
    </>
  );
}
