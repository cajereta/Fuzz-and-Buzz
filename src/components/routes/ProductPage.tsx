import { HeaderPage } from "../products/sections/HeaderPage";
import { ProductPageMain } from "../products/sections/ProductPageMain";
import { ProductDescription } from "../products/sections/ProductDescription";
import { guitarPedals } from "@/lib/utils";
import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { id } = useParams();
  const product = guitarPedals.find((product) => String(product.id) == id);

  if (!product) {
    throw new Response("Not found", { status: 404 });
  }

  return (
    <>
      <HeaderPage product={product} />
      <ProductPageMain {...product} />
      <ProductDescription {...product} />
    </>
  );
};
