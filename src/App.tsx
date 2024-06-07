import "./App.css";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/dark-mode/theme-provider";

import { router } from "./components/Routes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
