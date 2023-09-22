import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../features/orders/orderSlice";
import { useEffect } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";

export default function OrdersTable() {
  const order = useSelector((store) => store.orders);
  const loading = useSelector((store) => store.orders.isLoading);

  const { orders } = order;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const TABLE_HEAD = ["ProductsName", "Brand", "Price", "Category", "Checking"];

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 border p-1">
        {loading ? (
          <div className="flex items-center gap-8 absolute left-96 top-52">
            <Spinner className="h-9 w-10" color="blue" />
          </div>
        ) : (
          <Card className="h-full w-51.5 overflow-auto items-center">
            <table className="w-full min-w-max table-auto text-left">
              <thead className="text-center">
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                {orders.map(
                  ({ name, brand, images, price, category, id }, index) => {
                    const isLast = index === orders.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <>
                        <tr key={id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              {brand}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              {price} $
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              {category}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal text-center"
                            >
                              <Button color="blue">STATUS</Button>
                            </Typography>
                          </td>
                        </tr>
                      </>
                    );
                  }
                )}
              </tbody>
            </table>
          </Card>
        )}
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
