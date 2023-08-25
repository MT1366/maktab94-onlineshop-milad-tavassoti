import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import { useEffect } from "react";

import { Card, Typography } from "@material-tailwind/react";

export default function ProductsTable() {
  const product = useSelector((store) => store.products);
  const { products } = product;
  console.log(product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const TABLE_HEAD = ["Image", "ProductsName", "Category", ""];

  const TABLE_ROWS = products;
  console.log(TABLE_ROWS);

  return (
    <main className="flex flex-col ">
      <div className="h-10 w-52 border-bottom p-1">Header</div>
      <div className="h-50 w-52 border p-1"></div>
      <div className="h-30 w-52 border p-1">ICONS</div>
    </main>
  );
}
