import Product from "@/lib/Product";
import { Button } from "../ui/button";
import { ProductDiscountedPrice } from "../products/ProductItem";
type ProductPageProps = {
  product: Product;
};
export const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <section className="flex w-full flex-col py-4 md:flex-row">
      <img
        src="https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/BOSS/10103_medium.jpg"
        alt={product.name}
      />
      <div className=" flex w-full flex-col space-y-2 px-0 py-2 md:w-1/2 md:px-4 lg:px-12">
        <h1 className="p-2 text-xl font-bold md:text-2xl">{product.name}</h1>
        <ProductDiscountedPrice {...product} />

        <div className="pt-2">
          <Button variant="default">Add to cart</Button>
        </div>
      </div>
    </section>
  );
};
