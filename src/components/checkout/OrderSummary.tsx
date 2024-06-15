import { cn, formatPrice } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import useCartStore, { CartState } from "@/lib/store";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

export const OrderSummary = () => {
  const cart = useCartStore((state: CartState) => state);
  const randomSuccess = Math.floor(Math.random() * 100);
  const taxes = cart.totalPrice * 0.21;
  const shipping = 25;
  return (
    <>
      <Card className="w-full text-left md:w-2/5 h-fit self-start ">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <h3>Order Summary</h3>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{formatPrice(cart.totalPrice)}</p>
            </div>
            <div className="flex justify-between">
              <p>Taxes</p>
              <p>{formatPrice(taxes)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{formatPrice(shipping)}</p>
            </div>
            <Separator />
            <div className="flex justify-between my-2">
              <p className="font-bold text-lg">Total</p>
              <p className="font-bold text-lg">
                {formatPrice(cart.totalPrice + taxes + shipping)}
              </p>
            </div>
            {/* <div className="flex flex-col justify-between gap-1">
              <Label htmlFor="promoCode">Promo Code</Label>
              <div className="flex justify-between items-center gap-4">
                <Input
                  type="text"
                  id="promoCode"
                  placeholder="Type your promo code"
                />
                <Button>Apply</Button>
              </div>
            </div> */}
            <Link
              to={randomSuccess % 2 === 0 ? "/success" : "/error"}
              className={cn(buttonVariants(), "font-bold")}
            >
              Place order
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
