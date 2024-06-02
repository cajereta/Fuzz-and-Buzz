import Product from "@/lib/Product";
import { Button } from "../ui/button";
import { ProductDiscountedPrice } from "./ProductItem";
import { ProductItemHover } from "./ProductItemHover";

export const ProductPageMain = (product: Product) => {
  return (
    <section className="flex w-full flex-col py-4 justify-center relative">
      <section className="w-full h-screen -my-20 -z-10">
        <video
          autoPlay
          className="w-full h-full object-cover brightness-[45%] "
          muted
          loop
          src="https://videos.pexels.com/video-files/8513938/8513938-hd_1920_1080_25fps.mp4"
        ></video>
      </section>
      <div className="flex items-end w-full absolute top-0 left-0 h-full justify-center py-8  px-10 md:px-16 text-white">
        <div className="flex flex-col items-center ">
          <img src="/src/assets/file.png" className=" w-full max-w-[400px] " />
          <h4 className="text-md mt-2">The most cool amp that you can buy</h4>
          <h2 className="text-4xl md:text-6xl font-bold">{product.name}</h2>
          <h3 className="text-2xl font-bold">
            Iconic tones at the palm of your hand
          </h3>
          <div className="flex w-full justify-center items-center ">
            <ProductDiscountedPrice {...product} />
            <ProductItemHover />
          </div>
          <div className="flex w-full gap-4 justify-center ">
            <Button
              variant="ghost"
              className="border dark:border-foreground w-1/2 px-12 my-4 md:my-8 font-bold 
              "
              size="lg"
            >
              Add to cart
            </Button>
            <Button
              variant="default"
              className="border dark:border-foreground  w-1/2 px-12 my-4 md:my-8 font-bold bg-foreground text-background hover:text-white"
              size="lg"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
