import "./App.css";
import { CarouselDemo } from "./components/carousel/Carousel";
import { ModeToggle } from "./components/dark-mode/mode-toggle";
import { ThemeProvider } from "./components/dark-mode/theme-provider";
import { Header } from "./components/header/Header";
import { ProductItem } from "./components/products/ProductItem";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Header />
          <ModeToggle />
          {/* <div className="flex justify-center">
            <CarouselDemo />
          </div> */}
          <div>
            <ProductItem
              product={{} as any}
              width={250}
              height={250}
              className="w-[300px]"
            />
          </div>
          <h1 className="text-3xl font-bold underline">
            HELLO FROMM THE OTHERSIDEEEEEEEEEEEEEEEE
          </h1>
          <h1 className="text-3xl font-bold underline">Hello</h1>
          <h1 className="text-3xl font-bold underline">Hello</h1>

          <h1 className="text-3xl font-bold underline">Hello</h1>
          <h1 className="text-3xl font-bold underline">Hello</h1>
          <h1 className="text-3xl font-bold underline">Hello</h1>
          <h1 className="text-3xl font-bold underline">Hello</h1>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
