import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchProducts } from "../../features/products/productSlice";

import { Avatar, Button, Card, Typography } from "@material-tailwind/react";

import Pagination from "@mui/material/Pagination";

export default function ProductsTable() {
  const product = useSelector((store) => store.products.products);
  const cat = useSelector((store) => store.cat.categories);

  console.log(cat);
  // console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const TABLE_HEAD = ["ProductsName", "Image", "Category", "Edit / Delete"];

  async function handlePage(event, page) {
    dispatch(fetchProducts(page));
  }

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 p-1">
        <Button color="blue" className="relative left-0">
          Add Product
        </Button>
        <Card className="h-full w-51.5 overflow-auto items-center">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="text-left">
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
              {/* {product?.data?.products.map( */}
              {product.map(({ name, images, id, category }, index) => {
                const isLast = index === product.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                const imageUrl = `http://localhost:8000/images/products/images/${images[0]}`;

                const categoryName =
                  cat.find((c) => c._id === category)?.name || "";
                return (
                  <>
                    <tr key={id}>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="text-sm font-normal text-left"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td key={id} className={classes}>
                        <Avatar src={imageUrl} alt={name} size="xl" />
                      </td>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
                        >
                          {categoryName}
                        </Typography>
                      </td>
                      <td key={id} className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal text-left"
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
          <Card className="w-full border p-1">
            <Pagination className="sticky" onChange={handlePage} count={3} />
          </Card>
        </Card>
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
