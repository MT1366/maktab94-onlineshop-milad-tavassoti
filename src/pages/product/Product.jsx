import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import PageNav from "../../Components/pagenav/PageNav";
import {
  fetchCategoryById,
  fetchCategories,
} from "../../features/category/categorySlice";
import { fetchProducts } from "../../features/products/productSlice";
import { fetchSubCategories } from "../../features/subcategory/subCategory";
import { Card } from "@material-tailwind/react";

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cat = useSelector((store) => store.cat.categories);
  const subCat = useSelector((store) => store.subCat.subCat);
  const product = useSelector((store) => store.products.products);
  console.log(product);

  useEffect(() => {
    dispatch(fetchCategoryById(id));
  }, []);

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
  console.log(data);

  return (
    <div>
      <PageNav />
      <div className="ml-10 mb-10 flex justify-center">{data.name}</div>
      {data ? (
        data.map((p) => (
          <>
            <div className=" flex justify-center">
              <div className="bg-yellow-400 flex flex-col mb-5 h-20 w-40 items-center rounded-md justify-center">
                <p>{p.name}</p>

                <p>{p.description}</p>
              </div>
            </div>
          </>
        ))
      ) : (
        <h1>ERROR</h1>
      )}
    </div>
  );
}
