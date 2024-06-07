import { create } from "zustand";
import { persist } from "zustand/middleware";
import Product from "./Product";

export interface CartState {
  cart: Product[];
  totalPrice: number;
  totalQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      totalPrice: 0,
      totalQuantity: 0,

      addToCart: (product: Product) => {
        set((state: CartState) => {
          const existingProductIndex = state.cart.findIndex(
            (item) => item.id === product.id
          );
          const updatedCart = [...state.cart];
          let totalPrice = state.totalPrice;
          let totalQuantity = state.totalQuantity;
          if (existingProductIndex !== -1) {
            const existingProduct = updatedCart[existingProductIndex];
            updatedCart[existingProductIndex] = {
              ...existingProduct,
              quantityInCart: existingProduct.quantityInCart + 1,
            };
            totalPrice += product.discountPrice || product.price;
          } else {
            updatedCart.push({ ...product, quantityInCart: 1 });
            totalPrice += product.discountPrice || product.price;
            totalQuantity++;
          }
          return {
            cart: updatedCart,
            totalPrice,
            totalQuantity,
          };
        });
      },

      removeFromCart: (productId: number) => {
        set((state: CartState) => {
          const updatedCart = state.cart.reduce((acc, item) => {
            if (item.id === productId) {
              if (item.quantityInCart === 1) {
                return acc;
              }
              return [
                ...acc,
                { ...item, quantityInCart: item.quantityInCart - 1 },
              ];
            }
            return [...acc, item];
          }, [] as Product[]);

          const removedProduct = state.cart.find(
            (item) => item.id === productId
          );

          const shouldRemoveProduct =
            removedProduct && removedProduct.quantityInCart === 1;

          const totalPrice = removedProduct
            ? state.totalPrice -
              (removedProduct.discountPrice || removedProduct.price || 0)
            : state.totalPrice;

          const totalQuantity = shouldRemoveProduct
            ? state.totalQuantity - 1
            : state.totalQuantity;

          return {
            cart: updatedCart,
            totalPrice,
            totalQuantity,
          };
        });
      },
      removeAllInstancesOfProduct: (productId: number) => {
        set((state: CartState) => {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId
          );
          const removedProduct = state.cart.find(
            (item) => item.id === productId
          );
          const removedProductPrice = removedProduct
            ? removedProduct.price * removedProduct.quantityInCart
            : 0;
          return {
            cart: updatedCart,
            totalPrice: state.totalPrice - removedProductPrice,
            totalQuantity:
              state.totalQuantity -
              (removedProduct ? removedProduct.quantityInCart : 0),
          };
        });
      },

      clearCart() {
        set({ cart: [], totalPrice: 0, totalQuantity: 0 });
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
