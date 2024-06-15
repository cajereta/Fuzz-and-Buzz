import { useMediaQuery } from "@/hooks/use-media-query";
import useCartStore, { CartState } from "@/lib/store";
import { formatPrice, cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";

import { Link } from "react-router-dom";

import { Button, buttonVariants } from "../ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Drawer,
} from "../ui/drawer";
import { CartHeaderItem } from "./CartHeader";

export const CartDrawerMobile = ({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
}) => {
  const cart = useCartStore((state: CartState) => state);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop) {
    return (
      <Drawer open={openCart} onOpenChange={setOpenCart}>
        <DrawerTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Your Cart</DrawerTitle>

            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {cart.cart.map((product, index) => (
                <CartHeaderItem key={index} {...product} />
              ))}
            </ul>
            <Separator className="mb-4" />
            <p className="text-xl font-bold">
              Total: {formatPrice(cart.totalPrice)}
            </p>
          </DrawerHeader>
          <div className="flex  flex-col gap-4 mx-4 mb-8">
            <Link
              to="/checkout"
              className={cn(buttonVariants(), "font-bold")}
              onClick={() => {
                setOpenCart(false);
              }}
            >
              Proceed to Checkout
            </Link>
            <Link
              to={"/cart"}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "font-bold text-foreground"
              )}
              onClick={() => {
                setOpenCart(false);
              }}
            >
              Check Cart
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    );
  }
};
