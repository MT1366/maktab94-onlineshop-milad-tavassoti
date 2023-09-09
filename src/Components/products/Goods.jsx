import { Avatar, Button, Card, Typography } from "@material-tailwind/react";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchProducts } from "../../features/products/productSlice";

// import axios from "axios";

export default function Goods() {
  const product = useSelector((store) => store.products.products);
  const cat = useSelector((store) => store.cat.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="flex flex-wrap m-10 gap-10">
        {product.map(({ name, images, id, category, price }, index) => {
          const isLast = index === product.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          const imageUrl = `http://localhost:8000/images/products/images/${images[0]}`;

          const categoryName = cat.find((c) => c._id === category)?.name || "";

          // const categoryName =
          //   cat.find((c) => c._id === category)?.name || "";
          // const subCategoryName = cat.find((c) => c._id === id)?.name || "";
          return (
            <>
              <NavLink to={`/product/${id}`}>
                <Card
                  key={id}
                  className="h-45 justify-center flex flex-col w-40"
                >
                  <div key={id} className="h-50">
                    <img src={imageUrl} alt={name} size="xl" />
                  </div>
                  <div key={id} className={classes}>
                    <h1 className="font-normal text-left p-2">
                      {categoryName}
                    </h1>
                  </div>
                  <div key={id} className="flex justify-between p-2">
                    <p>{name}</p>
                    <p>{price}$</p>
                  </div>
                </Card>
              </NavLink>
            </>
          );
        })}
      </div>
    </>
  );
}
