import Product from "@/lib/Product";
import { Button } from "../ui/button";
import { ProductDiscountedPrice } from "../products/ProductItem";
import { ProductItemHover } from "../products/ProductItemHover";

import { HeaderPage } from "../header/HeaderPage";
type ProductPageProps = {
  product: Product;
};
export const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      <HeaderPage product={product} />
      <section className="flex w-full flex-col py-4 justify-center relative">
        <section className="w-full h-screen -my-20 -z-50">
          <video
            autoPlay
            className="w-full h-full object-cover brightness-[45%]"
            muted
            loop
            src="https://videos.pexels.com/video-files/8513938/8513938-hd_1920_1080_25fps.mp4"
          ></video>
        </section>
        <div className="flex items-end w-full absolute top-0 left-0 h-full justify-center py-8  px-10 md:px-16 text-white">
          <div className="flex flex-col items-center -z-10">
            <img
              src="/src/assets/file.png"
              className=" w-full max-w-[400px] "
            />
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
      <div className="w-full flex flex-col justify-center mt-16 gap-12 bg-gradient-to-tr from-gray-900/20 to-gray-600/10">
        <div className=" flex flex-col lg:flex-row justify-center h-screen ">
          <img
            src="/src/assets/file.png"
            className="w-full max-w-[600px] self-center -z-10"
          />
          <div className="flex flex-col w-4/5 max-w-[600px] self-center gap-3">
            <h3 className="text-4xl font-bold text-left">Overview</h3>
            {product.description.split(". ").map((p, index) => (
              <h4 key={index} className="text-2xl text-left ">
                {p + ". "}
              </h4>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center h-screen gap-24 md:gap-0">
          <img
            src="/src/assets/file6.png"
            className="w-full max-w-[700px] self-center -z-10"
          />
          <div className="flex flex-col w-4/5 max-w-[600px] self-center ">
            <h3 className="text-4xl font-bold text-left">
              Combine it with this pre-effects
            </h3>
            .
            <h4 className="text-2xl text-left ">
              {product.description.split(". ")[0] + "."}
            </h4>
          </div>
        </div>
        <div className="flex flex-col justify-center h-screen gap-24 md:gap-0">
          <img
            src="/src/assets/file10.png"
            className="w-full max-w-[700px] self-center -z-10"
          />
          <div className="flex flex-col w-4/5 max-w-[600px] self-center ">
            <h3 className="text-4xl font-bold text-left">
              Unpack a whole new kind of tone
            </h3>
            .
            <h4 className="text-2xl text-left ">
              {product.description.split(". ")[0] + "."}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
