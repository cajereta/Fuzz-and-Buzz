import { guitarPedals } from "@/lib/utils";
import { createBrowserRouter } from "react-router-dom";
import { CartPage } from "./routes/CartPage";
import { CheckoutPage } from "./routes/CheckoutPage";
import { ProductPage } from "./routes/ProductPage";
import { ProductsPage } from "./routes/ProductsPage";
import { Home } from "./routes/Home";
import { Layout } from "@/layout";
import { ErrorPage } from "./routes/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/products", element: <ProductsPage products={guitarPedals} /> },
      {
        path: "/products/:id",
        element: <ProductPage />,
      },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);
