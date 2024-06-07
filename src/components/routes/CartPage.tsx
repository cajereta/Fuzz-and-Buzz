import Product from "@/lib/Product";
import useCartStore, { CartState } from "@/lib/store";
import { Separator } from "../ui/separator";
import { Minus, Plus } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { cn, formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const cart = useCartStore((state: CartState) => state);

  return (
    <>
      <div className="flex flex-col max-w-5xl lg:mx-auto mx-8">
        <h2 className="text-6xl text-left my-12 font-bold mx-2">Cart</h2>
        <div className=" hidden md:flex justify-end gap-16  md:gap-[8.5rem] font-bold mx-2">
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <Separator className="my-4" />
        {cart.cart.length === 0 && (
          <h3 className="text-3xl">Your cart is empty</h3>
        )}

        {cart.cart.length > 0 && (
          <ul>
            {cart.cart.map((product) => (
              <CartPageItem key={product.id} {...product} />
            ))}
          </ul>
        )}
      </div>
      <div className="flex flex-col justify-end items-end max-w-5xl md:mx-auto mx-8 gap-4">
        <h3 className="text-2xl font-extrabold">
          Total: {formatPrice(cart.totalPrice)}
        </h3>
        <div className="  gap-4 w-7/12 text-right text-wrap text-sm">
          <p> For EU and UK customers, VAT is included.</p>
          <p>
            For US and international customers, taxes are calculated at
            checkout.
          </p>
          <p>
            By proceeding to checkout, you agree to our{" "}
            <a href="#" className="underline">
              Terms of service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Refund policy
            </a>
          </p>
        </div>
        <div className="flex gap-6 ">
          <Button
            variant="outline"
            className="font-bold"
            onClick={() => cart.clearCart()}
          >
            Clear cart
          </Button>
          <Link
            to="/products"
            className={cn(buttonVariants({ variant: "outline" }), "font-bold ")}
          >
            Continue shopping
          </Link>

          <Link
            to="/checkout"
            className={cn(buttonVariants({ variant: "default" }), "font-bold ")}
          >
            Go to Checkout
          </Link>
        </div>
      </div>
    </>
  );
};

const CartPageItem = (product: Product) => {
  const cart = useCartStore((state: CartState) => state);
  return (
    <li className="pt-2">
      <div className="flex flex-col md:flex-row md:items-center mx-2 gap-2">
        <div className="flex md:w-6/12 lg:w-8/12 max-w-xl items-center text-left ">
          <img
            className="w-20 h-12 rounded-lg"
            src="https://www.heavenimagenes.com/heavencommerce/e11e0483-99c8-4ad2-b3a9-bfb26fc81402/images/v2/BOSS/10103_medium.jpg"
            alt="item"
          />
          <p className="text-lg ms-4 font-medium text-gray-900 truncate dark:text-white">
            {product.name}
          </p>
        </div>
        <div className="flex w-full md:w-7/12 items-center gap-8 md:gap-28 justify-end ">
          <p className="hidden md:block text-lg font-bold w-14">
            {formatPrice(product.discountPrice || product.price)}
          </p>
          <div className="flex items-center w-24">
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => cart.removeFromCart(product.id)}
            >
              <Minus width={16} />
            </Button>
            <p className="p-2">{product.quantityInCart}</p>
            <Button
              variant="outline"
              size="icon"
              className="w-8 h-8"
              onClick={() => cart.addToCart(product)}
            >
              <Plus width={16} />
            </Button>
          </div>

          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {formatPrice(
              (product.discountPrice || product.price) * product.quantityInCart
            )}
          </div>
        </div>
      </div>
      <Separator className="my-6"></Separator>
    </li>
  );
};
