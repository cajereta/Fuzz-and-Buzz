import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProductProps {
  product: any;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  className?: string;
}

export const ProductItem = ({
  product,

  width,
  height,
}: ProductProps) => {
  return (
    <Card className="flex h-full w-fit flex-col justify-around   transition-all   hover:scale-105">
      <CardHeader className="flex items-center justify-center p-0">
        <img
          src="https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/BOSS/10103_medium.jpg"
          width={width}
          height={height}
          alt={product.name}
          loading="lazy"
          className="rounded-t object-cover"
        />
      </CardHeader>
      <CardContent className="p-2 pt-2">
        <CardDescription className="text-sm w-fit pl-2.5">
          Distortion
        </CardDescription>
        <CardTitle className="line-clamp-2 max-w-[200px] text-2xl font-bold  leading-tight sm:text-bold -ml-1 ">
          Metal Zone Mt-2
        </CardTitle>
      </CardContent>
      <CardFooter className="w-full p-2 pt-0 px-4">
        <div className="flex flex-col w-full">
          <p className="font-bold text-2xl text-primary w-fit ">$ 400</p>
          <Button className="w-full  font-bold mt-2">Add to cart</Button>
        </div>
      </CardFooter>
    </Card>
  );
};
