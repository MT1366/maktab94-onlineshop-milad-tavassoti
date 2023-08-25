import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { useEffect } from "react";

import { Button, Card, Typography } from "@material-tailwind/react";

export default function ProductsTable() {
  const product = useSelector((store) => store.products);
  const { products } = product;
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const TABLE_HEAD = ["ProductsName", "Image", "Category", "Edit / Delete"];

  // const TABLE_ROWS = products;
  // console.log(TABLE_ROWS);

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 p-1">
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
              {products.map(({ name, icon, id, createdAt }, index) => {
                const isLast = index === products.length - 1;
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
                          {icon}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          {createdAt}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-center"
                        >
                          <Button color="blue">Edit</Button>
                          <Button color="blue">Delet</Button>
                        </Typography>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
