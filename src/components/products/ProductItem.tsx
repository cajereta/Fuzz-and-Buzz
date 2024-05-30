import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Product from "@/lib/Product";

interface ProductProps {
  product: Product;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  className?: string;
}

export const ProductItem = ({
  product,
  width,
  height,
  className,
}: ProductProps) => {
  return (
    <a href="#">
      <Card className="flex h-full w-fit flex-col justify-around  transition-all  hover:scale-105">
        <CardHeader className="flex items-center justify-center p-0">
          <img
            src="https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/BOSS/10103_medium.jpg"
            width={width}
            height={height}
            alt={product.name}
            loading="lazy"
            className={cn("rounded-t object-cover ", { className })}
          />
        </CardHeader>
        <CardContent className="p-2 pt-2">
          <CardDescription className="text-xs md:text-sm w-fit pl-2">
            {product.category}
          </CardDescription>
          <CardTitle className="line-clamp-2 md:h-16 text-md md:text-xl font-bold  leading-tight sm:text-bold text-left pl-2 ">
            {product.name}
          </CardTitle>
        </CardContent>
        <CardFooter className="w-full p-2 pt-0 px-4">
          <div className="flex flex-col w-full">
            <ProductDiscountedPrice {...product} />
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};

export const ProductDiscountedPrice = (product: Product) => {
  return (
    <>
      {product?.discountPrice ? (
        <p className="flex items-center gap-2 ">
          <span className="font-bold text-md md:text-xl text-primary w-fit ">
            ${product.discountPrice}
          </span>
          <span className="text-sm md:text-md text-muted-foreground line-through ">
            ${product.price}
          </span>
        </p>
      ) : (
        <p className="font-bold text-md md:text-xl text-primary w-fit ">
          $ {product.price}
        </p>
      )}
    </>
  );
};
