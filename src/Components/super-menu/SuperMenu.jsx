import { Carousel } from "@material-tailwind/react";

export default function SuperMenu() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full">
        <img
          src="./src/images/super-menu.webp"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25"></div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="./src/images/super-menu-2.webp"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <div className="flex gap-2"></div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="./src/images/super-menu-3.webp"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <div className="flex gap-2"></div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
