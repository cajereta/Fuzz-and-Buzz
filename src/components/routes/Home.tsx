import { guitarPedals } from "@/lib/utils";
import { ModeToggle } from "../dark-mode/mode-toggle";
import { MostPopular } from "../products/sections/MostPopular";

export const Home = () => {
  return (
    <>
      <ModeToggle />
      {/* <div className="flex justify-center">
            <CarouselDemo />
          </div> */}
      <MostPopular products={guitarPedals} />

      <h1 className="text-3xl font-bold underline">
        HELLO FROMM THE OTHERSIDEEEEEEEEEEEEEEEE
      </h1>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h1 className="text-3xl font-bold underline">Hello</h1>

      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <h1 className="text-3xl font-bold underline">Hello</h1>
    </>
  );
};
