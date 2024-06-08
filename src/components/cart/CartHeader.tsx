import Product from "@/lib/Product";
import useCartStore, { CartState } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Separator } from "../ui/separator";

export const CartHeader = () => {
  const cart = useCartStore((state: CartState) => state);

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {cart.cart.map((product, index) => (
          <CartHeaderItem key={index} {...product} />
        ))}
      </ul>
      <Separator className="mb-4" />
      <h3 className="text-xl font-bold">
        Total: {formatPrice(cart.totalPrice)}
      </h3>
    </div>
  );
};

const CartHeaderItem = (product: Product) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <LazyLoadImage
              className="w-8 h-8 rounded-full"
              src={product.image}
              alt="item"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {product.name}
              {product.quantityInCart > 1 && ` (x${product.quantityInCart})`}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {product.category}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatPrice(
              (product.discountPrice || product.price) * product.quantityInCart
            )}
          </div>
        </div>
      </li>
    </>
  );
};
