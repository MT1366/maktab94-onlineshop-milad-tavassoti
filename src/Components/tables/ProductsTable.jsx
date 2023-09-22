import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { fetchProducts } from "../../features/products/productSlice";
import { HiOutlinePencil } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";
import { Spinner } from "@material-tailwind/react";

import Modal from "../modal/Modal";
import Pagination from "@mui/material/Pagination";

export default function ProductsTable() {
  const product = useSelector((store) => store.products.products);
  const loading = useSelector((store) => store.products.isLoading);
  const cat = useSelector((store) => store.cat.categories);

  // console.log(cat);

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
        {loading ? (
          <div className="flex items-center gap-8 absolute left-96 top-52">
            <Spinner className="h-9 w-10" color="blue" />
          </div>
        ) : (
          <Card className="h-full w-51.5 overflow-auto items-center">
            <Modal className="flex relative end-0" />
            <table className="w-full min-w-max table-auto text-left">
              <thead className="text-left">
                <tr key={TABLE_HEAD}>
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
                            key={id}
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
                            key={id}
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-left"
                          >
                            {categoryName}
                          </Typography>
                        </td>
                        <td key={id} className={classes}>
                          <Typography
                            key={id}
                            variant="small"
                            color="blue-gray"
                            className="font-normal text-left flex gap-1"
                          >
                            <Button
                              className="bg-transparent"
                              key={id}
                              color="white"
                            >
                              <HiOutlinePencil className="text-lg text-black" />
                            </Button>
                            <Button
                              className="bg-transparent"
                              key={id}
                              color="white"
                            >
                              {" "}
                              <HiOutlineTrash className="text-lg text-black" />
                            </Button>
                          </Typography>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            <Card className="w-full border p-1">
              <Pagination className="sticky" onChange={handlePage} count={4} />
            </Card>
          </Card>
        )}
      </div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
