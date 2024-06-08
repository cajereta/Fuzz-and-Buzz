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
    </>
  );
};
