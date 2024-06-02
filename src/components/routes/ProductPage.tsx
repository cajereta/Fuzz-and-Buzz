import Product from "@/lib/Product";
import { HeaderPage } from "../header/HeaderPage";
import { ProductPageMain } from "../products/ProductPageMain";

type ProductPageProps = {
  product: Product;
};
export const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      <HeaderPage product={product} />
      <ProductPageMain {...product} />
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
