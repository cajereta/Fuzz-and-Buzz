import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { ProductPage } from "./routes/ProductPage";
import { guitarPedals } from "../lib/utils";
import { CartPage } from "./routes/CartPage";
import { CheckoutPage } from "./routes/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/products/:id",
    element: <ProductPage product={guitarPedals[0]} />,
  },

  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
]);

export default router;
