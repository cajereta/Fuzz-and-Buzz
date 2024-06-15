import Product from "@/lib/Product";
import { formatPrice } from "@/lib/utils";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "@/hooks/use-media-query";
import { CartDrawerMobile } from "./CartDrawerMobile";
import { CartHeaderDesktop } from "./CartDesktop";

export const CartHeader = ({
  openCart,
  setOpenCart,
}: {
  openCart: boolean;
  setOpenCart: (open: boolean) => void;
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return <CartHeaderDesktop openCart={openCart} setOpenCart={setOpenCart} />;
  }

  return (
    <>
      <CartDrawerMobile openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export const CartHeaderItem = (product: Product) => {
  return (
    <>
      <li className="py-3 sm:py-4 sm:max-w-sm">
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
