import Product from "@/lib/Product";
import useCartStore, { CartState } from "@/lib/store";

export const CartHeader = () => {
  const cart = useCartStore((state: CartState) => state);

  const handleAddToCart = (product: Product) => {
    cart.addToCart(product);
  };

  return (
    <div className="flow-root">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {cart.cart.map((product, index) => (
          <CartHeaderItem key={index} {...handleAddToCart} {...product} />
        ))}
      </ul>
    </div>
  );
};

const CartHeaderItem = (product: Product, handleAddToCart: void) => {
  return (
    <>
      <li className="py-3 sm:py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/BOSS/10103_medium.jpg"
              alt="item"
            />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {product.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {product.category}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            ${product.price}
          </div>
        </div>
      </li>
    </>
  );
};
