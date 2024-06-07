import { ShippingAddress } from "../checkout/ShippingAddress";
import { OrderSummary } from "../checkout/OrderSummary";
import { PaymentMethod } from "../checkout/PaymentMethod";

export const CheckoutPage = () => {
  return (
    <div className="flex w-full container items-center justify-center my-16 max-h-screen gap-4">
      <div className="flex flex-col gap-4">
        <ShippingAddress />
        <PaymentMethod />
      </div>
      <OrderSummary />
    </div>
  );
};
