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
          if (existingProductIndex !== -1) {
            const updatedCart = [
              ...state.cart.slice(0, existingProductIndex),
              {
                ...state.cart[existingProductIndex],
                quantityInCart:
                  state.cart[existingProductIndex].quantityInCart + 1,
              },
              ...state.cart.slice(existingProductIndex + 1),
            ];
            return {
              cart: updatedCart,
              totalPrice:
                state.totalPrice + (product.discountPrice || product.price),
              totalQuantity: state.totalQuantity + 1,
            };
          } else {
            const updatedCart = [
              ...state.cart,
              { ...product, quantityInCart: 1 },
            ];
            return {
              cart: updatedCart,
              totalPrice:
                state.totalPrice + (product.discountPrice || product.price),
              totalQuantity: state.totalQuantity + 1,
            };
          }
        });
      },

      removeFromCart: (productId: number) => {
        set((state: CartState) => {
          const updatedCart = state.cart.map((item) => {
            if (item.id === productId) {
              // Decrease the quantity by 1
              const newQuantity = item.quantityInCart - 1;
              return { ...item, quantityInCart: newQuantity };
            }
            return item;
          });

          const removedProduct = state.cart.find(
            (item) => item.id === productId
          );
          const shouldRemoveProduct =
            removedProduct && removedProduct.quantityInCart === 1;

          return {
            cart: shouldRemoveProduct
              ? updatedCart.filter((item) => item.id !== productId)
              : updatedCart,
            totalPrice: removedProduct
              ? state.totalPrice - (removedProduct.price || 0)
              : state.totalPrice,
            totalQuantity: state.totalQuantity - (shouldRemoveProduct ? 1 : 0),
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
          return {
            cart: updatedCart,
            totalPrice: removedProduct
              ? state.totalPrice -
                removedProduct.price * removedProduct.quantityInCart
              : state.totalPrice,
            totalQuantity:
              state.totalQuantity -
              (removedProduct ? removedProduct.quantityInCart : 0),
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
