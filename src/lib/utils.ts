import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Product from "./Product";
import data from "./data.json";
import codes from "./coupons.json";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const couponCodes: { [key: string]: number } = codes;

export const guitarPedals: Product[] = data;

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
