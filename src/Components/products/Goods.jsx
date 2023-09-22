import { Card } from "@material-tailwind/react";
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

  console.log(product);

  return (
    <>
      <div className="flex flex-wrap m-10 gap-10">
        {product.map(({ name, images, _id, category, price, brand }, index) => {
          const isLast = index === product.length - 1;
          const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

          const imageUrl = `http://localhost:8000/images/products/images/${images[0]}`;

          const categoryName = cat.find((c) => c._id === category)?.name || "";

          return (
            <>
              <NavLink
                to={`/singleproducts/${_id}`}
                key={_id}
                // onClick={dispatch(fetchProductsById(_id))}
              >
                <Card
                  key={_id}
                  className="h-45 justify-center flex flex-col w-40"
                >
                  <div key={_id} className="h-50">
                    <img src={imageUrl} alt={name} size="xl" />
                  </div>
                  <div key={_id} className={classes}>
                    <h1 className="font-normal text-lg text-left">
                      {categoryName}
                    </h1>
                    <p>{brand}</p>
                  </div>
                  <div key={_id} className="flex justify-between p-3">
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
