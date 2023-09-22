import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postProducts } from "../../features/products/productSlice";
import { toast, ToastContainer } from "react-toastify";
import { fetchSubCategories } from "../../features/subcategory/subCategory";
import { HiOutlinePlus } from "react-icons/hi2";

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
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubCategories());
  }, []);

  const { register, handleSubmit, formState, watch } = useForm();
  const { errors } = formState;
  const images = watch("images");

  function onError(errors) {
    console.log(errors);
  }

  function onAddProduct(data) {
    console.log(data);
    setOpen();

    const form = new FormData();

    if (images && images.length > 0) {
      Array.from(images).forEach((file, index) => {
        form.append(`images[${index}]`, file);
      });
    }

    for (const key in data) {
      if (key !== "images") {
        const value = data[key];
        console.log(key, value);
        if (Array.isArray(value)) {
          value.forEach((item) => {
            form.append(`${key}[]`, item);
          });
        } else {
          form.append(key, value);
        }
      }
    }
    console.log([...form.entries()]);
    dispatch(postProducts(form));
    toast.success("product added");
  }
  const handleOpen = () => setOpen(!open);

  function categoryHandleChange(e) {
    console.log(e.target);
  }

  return (
    <>
      <Button
        className="flex items-center gap-2"
        onClick={handleOpen}
        color="blue"
        variant="gradient"
      >
        <HiOutlinePlus className="text-lg" />
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
              type="file"
              label="Image:"
              name="images"
              key="images"
              multiple
              inputRef={register}
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
              key="name"
            />
            {errors?.name && (
              <p className="text-red-900 text-xs font-light relative animate-bounce">
                This field is required
              </p>
            )}
            <div className="flex gap-2">
              <Input
                label="Category"
                onChange={categoryHandleChange}
                {...register("category")}
                name="category"
                key="category"
              ></Input>
              <Input
                label="Sub-Category"
                {...register("subcategory")}
                name="subcategory"
                key="subcategory"
              ></Input>
            </div>

            <Input
              {...register("price", { required: "this field is required" })}
              type="text"
              label="Price"
              name="price"
              key="price"
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
              key="quantity"
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
              key="brand"
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
              key="description"
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
            name="name"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" type="submit" name="name">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

{
  /* <div className="flex gap-2">
              <Select onChange={categoryHandleChange} label="Category:">
                {cat.map(({ name, _id }) => (
                  <Option {...register("category")} name="category" key={_id}>
                    {name}
                  </Option>
                ))}
              </Select>
              <Select label="Subcategory">
                {subCat.map(({ name, _id }) => (
                  <Option
                    {...register("subcategory")}
                    name="subcategory"
                    key={_id}
                  >
                    {name}
                  </Option>
                ))}
              </Select>
            </div> */
}
