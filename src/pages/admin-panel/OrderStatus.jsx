export default function OrderStatus() {
  return (
    <div className="flex items-center gap-5 p-2">
      <label className="flex gap-2">
        Delivered Orders
        <input type="checkbox"></input>
      </label>

      <label className="flex gap-2 ">
        Pending Orders
        <input type="checkbox"></input>
      </label>
    </div>
  );
}
