import { guitarPedals } from "@/lib/utils";
import { createBrowserRouter } from "react-router-dom";
import { CartPage } from "./routes/CartPage";
import { CheckoutPage } from "./routes/CheckoutPage";
import { ProductPage } from "./routes/ProductPage";
import { ProductsPage } from "./routes/ProductsPage";
import { Home } from "./routes/Home";
import { Layout } from "@/layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/products", element: <ProductsPage products={guitarPedals} /> },
      {
        path: "/products/:id",
        element: <ProductPage product={guitarPedals[0]} />,
      },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);
