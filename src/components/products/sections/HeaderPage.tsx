import { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { ProductItemHover } from "../../products/ProductItemHover";
import Product from "@/lib/Product";
import { ProductDiscountedPrice } from "../../products/ProductItem";

type ProductPageProps = {
  product: Product;
};

export const HeaderPage = ({ product }: ProductPageProps) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollThreshold = 750;
    setShowNavbar(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`top-0 flex h-14 items-center gap-4 border-b px-4 md:px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        showNavbar
          ? "sticky top-16 transition-all duration-700 ease-in-out"
          : "hidden"
      }  `}
    >
      <div className="flex w-full justify-end items-center">
        <ProductDiscountedPrice {...product} />
        <ProductItemHover />
        <Button
          variant="default"
          className="border dark:border-foreground px-6 my-4 md:my-8 font-bold bg-foreground text-background hover:text-white hover:bg-background self-end"
          size="default"
        >
          Add to cart
        </Button>
      </div>
    </header>
  );
};
