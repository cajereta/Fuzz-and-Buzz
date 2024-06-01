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
        // Check if the product is already in the cart
        set((state: CartState) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            const updatedCart = state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantityInCart: item.quantityInCart + 1 }
                : item
            );
            return {
              cart: updatedCart,
              totalPrice: state.totalPrice + product.price,
              totalQuantity: state.totalQuantity + 1,
            };
          } else {
            const updatedCart = [
              ...state.cart,
              { ...product, quantityInCart: 1 },
            ];
            const updatedTotalPrice = state.totalPrice + product.price;
            const updatedTotalQuantity = state.totalQuantity + 1;
            return {
              cart: updatedCart,
              totalPrice: updatedTotalPrice,
              totalQuantity: updatedTotalQuantity,
            };
          }
        });
      },

      removeFromCart: (productId: number) => {
        set((state: CartState) => {
          const updatedCart = state.cart.filter(
            (item) => item.id !== productId
          );
          const removedProduct = state.cart.find(
            (item) => item.id === productId
          );
          return {
            cart: updatedCart,
            totalPrice: removedProduct
              ? state.totalPrice - removedProduct.price
              : state.totalPrice,
            totalQuantity: state.totalQuantity - 1,
          };
        });
      },

      clearCart: () => {
        set({
          cart: [],
          totalPrice: 0,
          totalQuantity: 0,
        });
      },
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
