import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchInventory } from "../../features/inventory/inventorySlice";

import { Button, Card, Typography } from "@material-tailwind/react";

import Pagination from "@mui/material/Pagination";

export default function InventoryTable() {
  const priceInventory = useSelector((store) => store.inventory);
  const { inventory } = priceInventory;
  console.log(inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  const TABLE_HEAD = ["ProductsName", "Price", "Inventory"];

  async function handlePagination(event, page) {
    dispatch(fetchInventory(page));
  }

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 border p-1">
        <Button color="blue" className="relative mb-2">
          Save
        </Button>
        <Card className="h-full w-51.5 overflow-auto">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="text-center">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b text-left border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {inventory.map(({ name, id, price, quantity }, index) => {
                const isLast = index === inventory.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <>
                    <tr key={id}>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {price} $
                        </Typography>
                      </td>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {quantity}
                        </Typography>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <Card className="w-full border p-1">
            <Pagination
              className="sticky"
              onChange={handlePagination}
              count={3}
            />
          </Card>
        </Card>
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
