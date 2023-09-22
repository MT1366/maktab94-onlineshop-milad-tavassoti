import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import PageNav from "../../Components/pagenav/PageNav";
import { fetchCategories } from "../../features/category/categorySlice";
import { fetchProducts } from "../../features/products/productSlice";
import { Card } from "@material-tailwind/react";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.products.products);
  console.log(product);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // THIS ID IS FOR CATEGORY
  // console.log(id);

  const data = [];
  product.forEach((p) => {
    if (p.category === id) {
      data.push(p);
    }
  });

  return (
    <div>
      <PageNav />
      <div className="flex">
        {data ? (
          data.map(({ _id, name, brand, images, price, quantity }) => {
            const imageUrl = `http://localhost:8000/images/products/images/${images[0]}`;
            return (
              <>
                <Card
                  key={_id}
                  className="bg-grey-500 flex flex-col flex-wrap w-40 gap-5 m-5"
                >
                  <img className="w-40" src={imageUrl}></img>
                  <div className="pl-3 mb-2">
                    <p>{brand}</p>
                    <p>{name}</p>

                    <div className="flex justify-between pr-5">
                      <p>{price}$</p>
                      <p>{quantity}</p>
                    </div>
                  </div>
                </Card>
              </>
            );
          })
        ) : (
          <h1>ERROR</h1>
        )}
      </div>
    </div>
  );
}
