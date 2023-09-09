import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../features/products/productSlice";
import { toast, ToastContainer } from "react-toastify";
import { fetchSubCategories } from "../../features/subcategory/subCategory";
import { Select, Option } from "@material-tailwind/react";

// import { unwrapResult } from "@reduxjs/toolkit";

import { useForm } from "react-hook-form";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

export default function Modal() {
  const [open, setOpen] = React.useState(false);

  const product = useSelector((store) => store.products.products);
  const cat = useSelector((store) => store.cat.categories);
  const subCat = useSelector((store) => store.subCat.subCat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, []);

  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onError(errors) {
    console.log(errors.message);
  }

  function onAddProduct(data, event) {
    handleOpen();
    event.preventDefault();

    data = { ...data, images: [...data.images] };
    console.log(data);

    const form = new FormData();
    for (const key in data) {
      const value = data[key];

      form.append(key, value);
      console.log(form);
      form.append("images", data.images[0]);
    }
    dispatch(postProducts(form));
    toast.success("product added");
  }

  const handleOpen = () => setOpen(!open);

  const subCatArray = [];

  function x(e) {
    console.log(e.target);
  }

  return (
    <>
      <Button onClick={handleOpen} color="blue" variant="gradient">
        Add Product
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add Your Product</DialogHeader>
        <DialogBody>
          <form
            className="w-full h-50 flex flex-col content-center gap-2"
            onSubmit={handleSubmit(onAddProduct, onError)}
          >
            <Input
              {...register("images", {
                required: "this field is reqired",
              })}
              type="file"
              label="Image:"
              name="images"
            />
            {errors?.images && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <Input
              {...register("name", {
                required: "this field is required",
              })}
              type="text"
              label="Product:"
              name="name"
            />
            {errors?.name && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <div className="flex gap-2">
              <Select onChange={x} label="Category:">
                {cat.map(({ name, _id }) => (
                  <Option {...register("category")} name="category" key={_id}>
                    {name}
                  </Option>
                ))}
              </Select>
              <Select label="Subcategory">
                {subCatArray.map(({ name, _id }) => (
                  <Option
                    {...register("subcategory")}
                    name="subcategory"
                    key={_id}
                  >
                    {name}
                  </Option>
                ))}
              </Select>
            </div>
            <Input
              {...register("price", { required: "this field is required" })}
              type="text"
              label="Price"
              name="price"
            />
            {errors?.price && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <Input
              {...register("quantity", { required: "this field is required" })}
              type="text"
              label="Quantity:"
              name="quantity"
            />
            {errors?.quantity && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <Input
              {...register("brand", { required: "this filed is required" })}
              type="text"
              label="Brand:"
              name="brand"
            />
            {errors?.brand && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <Input
              {...register("description", {
                required: "this field is required",
              })}
              type="text"
              label="Description:"
              name="description"
            />
            {errors?.description && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
          </form>
        </DialogBody>
        <ToastContainer />
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSubmit(onAddProduct, onError)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
