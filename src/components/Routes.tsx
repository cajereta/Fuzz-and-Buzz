import { createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { ProductPage } from "./routes/ProductPage";
import { guitarPedals } from "../lib/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/products/:id",
    element: <ProductPage product={guitarPedals[0]} />,
  },
]);

export default router;
