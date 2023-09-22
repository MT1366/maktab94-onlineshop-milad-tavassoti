import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsById } from "../../features/productbyid/FetchByIdSlicer";

import PageNav from "../pagenav/PageNav";
import { Button, Card } from "@material-tailwind/react";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShieldIcon from "@mui/icons-material/Shield";

export default function SingleProduct() {
  const { id } = useParams();
  const product = useSelector((store) => store.productById);
  const dispatch = useDispatch();

  console.log(id);
  const singleProduct = product.productById.product;
  console.log(singleProduct);

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);

  const image =
    singleProduct && singleProduct.images && singleProduct.images.length > 0
      ? `http://localhost:8000/images/products/images/${singleProduct.images[0]}`
      : "default_image_url_here";

  return (
    <>
      <PageNav />
      <Card
        key={singleProduct && singleProduct._id}
        className=" bg-grey-500 flex flex-row flex-wrap w-90 h-55 gap-10 m-5"
      >
        <div className="w-50 h-50 pt-2 pl-2">
          <img className=" rounded-lg" src={image}></img>
        </div>
        <div>
          <div className="border-b-2 mt-5 w-41">
            <p className="text-2xl">
              {singleProduct && singleProduct.brand} /{" "}
              {singleProduct && singleProduct.name}
            </p>
          </div>
          <div className="flex gap-5 text-light-blue">
            <p>Rate: {singleProduct && singleProduct.rating.rate}</p>
            <p>Reviews: some text</p>
          </div>
          <div className="mt-10">
            <p>Color:</p>
          </div>
        </div>

        <div className="flex flex-col bg-gray-50 gap-10 w-40 m-1 rounded-lg">
          <div className="flex flex-row justify-between m-3 text-black border-b-2 pb-3">
            <h1>Supplier</h1>
            <StoreMallDirectoryIcon />
          </div>
          <div className="flex justify-between m-3 border-b-2 pb-3">
            <p>Warranty</p>
            <ShieldIcon />
          </div>
          <div className=" m-3 rounded-md">
            <p>Reviews: some text</p>
          </div>
          <div className="flex flex-col gap-2 m-3 top-36">
            <p>{singleProduct && singleProduct.price}$</p>
            <Button color="blue" className="align-bottom">
              Add To Card
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
