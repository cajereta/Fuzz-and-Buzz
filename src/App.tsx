import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/Routes";
import { ThemeProvider } from "./components/dark-mode/theme-provider";
import { Header } from "./components/header/Header";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Header />
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
