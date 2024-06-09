import { guitarPedals } from "@/lib/utils";
import { MostPopular } from "../home/MostPopular";
import { GridHome } from "../home/GridHome";

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
