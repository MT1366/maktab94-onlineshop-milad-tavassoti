import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../features/products/productSlice";

export default function SingleProduct() {
  const product = useSelector((store) => store.products.products);
  console.log(product);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { id } = useParams();
  console.log(id);

  return <div>SingleProduct</div>;
}
