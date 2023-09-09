import { Card } from "@material-tailwind/react";
import Goods from "../products/Goods";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../features/category/categorySlice";

export default function LandingPage() {
  const cat = useSelector((store) => store.cat.categories);
  const product = useSelector((store) => store.products.products);

  console.log(product);
  console.log(cat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      <Card className="shadow-lg m-5">
        <div className="flex flex-row items-center gap-5 m-6 p-10">
          <div className=" flex flex-col gap-5">
            <h1 className="text-5xl line-">
              Best Place To Buy{" "}
              <span className="text-yellow-900">Everything.</span>
            </h1>
            <p className="text-xs leading-7 text-gray-700">
              At Shopify, you can shop for all your favorive brands, clothes,
              household products and more at a single place.
            </p>
            <button className="w-30 pl-4 pr-4 pt-1 pb-1 bg-ocean-blue rounded-lg text-white">
              Shopping Now
            </button>
          </div>

          <div className="w-100 h-60 bg-[url('src/images/landingpage.png')]  bg-no-repeat bg-contain bg-center"></div>
        </div>

        <p className="text-center text-2xl ml-24 mr-24">
          We Collaborate With 250++ Leading Top ECommerce and Brands
        </p>

        <div className="flex flex-row items-center justify-center gap-24 m-6 p-10">
          <div className=" w-10 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/addidas.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/Balenciaga.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/Bukalapak.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/gucci.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/tokipedia.png')]"></div>
        </div>

        <p className="m-6 p-5 text-lg">Brows The Categories of Shopify</p>
        {/* <div className="flex flex-row w-full m-6 text-center justify-between gap-2 flex-wrap"> */}
        <div className="flex gap-5 justify-center flex-wrap">
          {cat.map(({ _id, name }) => {
            return (
              <>
                <div className="flex" style={{ color: "black" }}>
                  <Link
                    to={`product/${_id}?name=${name}`}
                    className="flex items-center justify-center rounded-md shadow-lg w-40 h-9 bg-no-repeat bg-contain hover:text-whit bg-yellow-500 hover:text-white"
                  >
                    <h1>{name.toUpperCase()}</h1>
                  </Link>
                </div>
              </>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="w-53 h-60 bg-no-repeat bg-contain bg-center text-center bg-[url('src/images/Why-Choose.png')]"></div>
        </div>
      </Card>
      <Card className="flex flex-row items-center m-5">
        <Goods />
      </Card>
    </>
  );
}
