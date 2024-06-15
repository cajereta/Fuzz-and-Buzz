import useCartStore, { CartState } from "@/lib/store";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { CartHeaderItem } from "./CartHeader";
import { Separator } from "../ui/separator";
import { cn, formatPrice } from "@/lib/utils";

export const CartHeaderDesktop = ({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
}) => {
  const cart = useCartStore((state: CartState) => state);
  return (
    <Sheet open={openCart} onOpenChange={setOpenCart}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 ">
          <ShoppingCart className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="grid gap-4 text-lg font-medium">
          <Link
            to={"/"}
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Fuzz & Buzz</span>
          </Link>
          {cart.cart.length === 0 && (
            <p className="text-muted-foreground">No items in cart.</p>
          )}
          <div className="flow-root sm:max-w-sm">
            <ul
              role="list"
              className="divide-y divide-gray-200 dark:divide-gray-700"
            >
              {cart.cart.map((product, index) => (
                <CartHeaderItem key={index} {...product} />
              ))}
            </ul>
            <Separator className="mb-4" />
            <h3 className="text-xl font-bold">
              Total: {formatPrice(cart.totalPrice)}
            </h3>
          </div>
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
        </nav>
      </SheetContent>
    </Sheet>
  );
};
