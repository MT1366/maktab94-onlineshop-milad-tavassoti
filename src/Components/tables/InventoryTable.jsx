import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../../features/inventory/inventorySlice";
import { useEffect } from "react";

export default function InventoryTable() {
  const priceInventory = useSelector((store) => store.inventory);
  const { inventory } = priceInventory;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  console.log(inventory);

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 border p-1">
        <div>
          {inventory &&
            inventory.map((p) => (
              <>
                <p key={p.id}>{p.name}</p>
              </>
            ))}
        </div>
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
