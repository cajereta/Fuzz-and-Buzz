import { formatPrice } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import useCartStore, { CartState } from "@/lib/store";
import { Button } from "../ui/button";

export const OrderSummary = () => {
  const cart = useCartStore((state: CartState) => state);
  return (
    <>
      <Card className="text-left w-2/5 h-fit self-start ">
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
              <p>Shipping</p>
              <p>{formatPrice(cart.totalPrice)}</p>
            </div>
            <Separator />
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>{formatPrice(cart.totalPrice)}</p>
            </div>
            <div className="flex flex-col justify-between gap-1">
              <Label htmlFor="promoCode">Promo Code</Label>
              <div className="flex justify-between items-center gap-4">
                <Input
                  type="text"
                  id="promoCode"
                  placeholder="Type your promo code"
                />
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
