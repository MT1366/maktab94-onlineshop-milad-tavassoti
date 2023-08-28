import { Card } from "@material-tailwind/react";

export default function LandingPage() {
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

        <p className="text-center text-2xl ml-96 mr-96">
          We Collaborate With 250++ Leading Top ECommerce and Brands
        </p>

        <div className="flex flex-row items-center justify-center gap-24 m-6 p-10">
          <div className=" w-10 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/addidas.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/Balenciaga.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/Bukalapak.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/gucci.png')]"></div>
          <div className=" w-20 h-10 bg-no-repeat bg-contain bg-[url('src/images/brands/tokipedia.png')]"></div>
        </div>

        <div>
          <p className="m-6 p-5 text-lg">Brows The Categories of Shopify</p>

          <div className="grid grid-cols-2 m-6 p-5">
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5">
              <div className=" col-span-2 h-20 bg-no-repeat bg-contain bg-[url('src/images/groups/fashion.png')]"></div>
              <div className=" col-span-2 h-20 bg-no-repeat bg-contain bg-[url('src/images/groups/skincare.png')]"></div>
            </div>
            <div className=" gap-5 flex flex-row items-center justify-center">
              <div className=" w-full h-40 bg-no-repeat bg-contain bg-[url('src/images/groups/shoes.png')]"></div>
              <div className=" w-55 h-40 bg-no-repeat bg-contain bg-[url('src/images/groups/electronics.png')]"></div>
            </div>
          </div>
          {/* <div className="grid grid-cols-2 m-6 p-5">
            <div className="flex flex-col gap-5 ">
              <div className=" w-full h-20 bg-no-repeat bg-contain bg-[url('src/images/groups/fashion.png')]"></div>
              <div className=" w-full h-20 bg-no-repeat bg-contain bg-[url('src/images/groups/skincare.png')]"></div>
            </div>
            <div className="gap-5 flex flex-row items-center justify-center">
              <div className=" w-full h-full bg-no-repeat bg-contain bg-[url('src/images/groups/shoes.png')]"></div>
              <div className=" w-55 h-full bg-no-repeat bg-contain bg-[url('src/images/groups/electronics.png')]"></div>
            </div>
          </div> */}
        </div>
      </Card>
    </>
  );
}
