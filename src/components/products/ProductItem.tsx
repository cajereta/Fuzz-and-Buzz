import { cn, formatPrice } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Product from "@/lib/Product";
import { Button, buttonVariants } from "../ui/button";
import { ProductItemHover } from "./ProductItemHover";
import useCartStore, { CartState } from "@/lib/store";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  const cart = useCartStore((state: CartState) => state);
  const handleAddToCart = (product: Product) => {
    cart.addToCart(product);
  };
  return (
    <Card className="flex h-full w-fit flex-col justify-around  transition-all ease-in-out  hover:bg-gray-900/60 ">
      <CardHeader className="flex items-center justify-center p-0">
        <Link to={`/products/${product.id}`}>
          <LazyLoadImage
            src={product.image}
            width={width}
            height={height}
            alt={product.name}
            threshold={300}
            className={cn("rounded-t", { className })}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-2 pt-4 text-center">
        <CardTitle className="line-clamp-2 h-16 md:h-12 text-2xl md:text-xl font-bold  leading-tight sm:text-bold pl-2 ">
          {product.name}
        </CardTitle>
        <CardDescription className="text-xs md:text-sm  pl-2 ">
          {product.description.split(".")[0]}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col w-full p-2 pt-0 px-2 gap-4">
        <div className="flex  w-full justify-center items-center text-primary">
          <ProductDiscountedPrice {...product} />
          <ProductItemHover />
        </div>
        <Link
          to={`/products/${product.id}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "font-bold w-full hover:text-foreground"
          )}
        >
          Learn more
        </Link>
        <Button
          className="w-full font-bold"
          onClick={() => handleAddToCart(product)}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ProductDiscountedPrice = (product: Product) => {
  return (
    <>
      {product?.discountPrice ? (
        <p className="flex items-center gap-2 justify-center  ">
          <span className="font-bold text-lg md:text-2xl  ">
            {formatPrice(product.discountPrice)}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground line-through ">
            {formatPrice(product.price)}
          </span>
        </p>
      ) : (
        <p className="font-bold text-lg md:text-2xl   ">
          {formatPrice(product.price)}
        </p>
      )}
    </>
  );
};
