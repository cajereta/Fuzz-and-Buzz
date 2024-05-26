import Product from "@/lib/Product";
import { ProductItem } from "../ProductItem";
import { Separator } from "../../ui/separator";

type MostPopularProps = {
  products: Product[];
};

export const MostPopular: React.FC<MostPopularProps> = ({ products }) => {
  return (
    <>
      <h3 className="text-3xl font-medium leading-none text-left">
        Most Popular
      </h3>
      <p className="text-sm text-muted-foreground text-left">
        Check out our most popular pedals.
      </p>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 md:gap-8">
        {products.slice(0, 4).map((pedal) => (
          <ProductItem
            key={pedal.id}
            product={pedal}
            width={350}
            height={350}
            className="w-[300px]"
          />
        ))}
      </div>
    </>
  );
};
