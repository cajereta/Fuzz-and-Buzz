import { CardPayment } from "@mercadopago/sdk-react";
import { initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("YOUR_PUBLIC_KEY");
export const Mercadopago = () => {
  return (
    <CardPayment
      initialization={{ amount: 1000 }}
      onSubmit={async (param) => {
        console.log(param);
      }}
    />
  );
};
