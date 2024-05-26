import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Product from "./Product";
import data from "./data.json";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const guitarPedals: Product[] = data;
