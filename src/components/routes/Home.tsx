import { guitarPedals } from "@/lib/utils";

import { MostPopular } from "../products/sections/MostPopular";

import { GridHome } from "../products/sections/GridHome";

export const Home = () => {
  return (
    <>
      <GridHome />
      <section className="container">
        <MostPopular products={guitarPedals} />
      </section>
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
