import { Button } from "@/components/ui/button";

export const GridHome = () => {
  return (
    <div className="flex flex-col  border-1  md:grid grid-cols-home md:grid-rows-2 md:-mt-16 md:mb-8 md:h-screen">
      <div className="border-1 col-span-1 row-span-2 ">
        <div className="bg-amp-bg w-full h-full  ">
          <div className="grid bg-gradient-to-bl from-transparent to-gray-900 h-full w-full">
            <div className="self-end py-16 md:py-8 px-10 md:px-16 text-left text-white">
              <h4 className="text-md ">The most cool amp that you can buy</h4>
              <h2 className="text-5xl md:text-7xl font-bold ">Bender TW-20</h2>
              <h3 className="text-2xl font-bold ">
                Iconic tones at the palm of your hand
              </h3>
              <Button
                variant="ghost"
                className="border dark:border-foreground w-fit px-12 my-4 md:my-8"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-1 col-span-1  ">
        <div className="bg-amp-bg w-full h-full  ">
          <div className="grid bg-gradient-to-b from-transparent to-gray-900/60 h-full w-full ">
            <div className=" self-end px-10 py-16 md:py-8 text-left text-white">
              <h4 className="text-md ">The most cool amp that you can buy</h4>
              <h2 className="text-5xl font-bold ">Bender TW-20</h2>
              <h3 className="text-xl font-bold ">
                Iconic tones at the palm of your hand
              </h3>
              <Button
                variant="ghost"
                className="border dark:border-foreground w-fit px-12 my-4 md:my-8"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-1 col-span-1  ">
        <div className="bg-amp-bg w-full h-full  ">
          <div className="grid bg-gradient-to-b from-transparent to-gray-900/60  h-full w-full">
            <div className=" self-end px-10 py-16 md:py-8 text-left text-white">
              <h4 className="text-md ">The most cool amp that you can buy</h4>
              <h2 className="text-5xl font-bold ">Bender TW-20</h2>
              <h3 className="text-xl font-bold ">
                Iconic tones at the palm of your hand
              </h3>
              <Button
                variant="ghost"
                className="border dark:border-foreground w-fit px-12 my-4 md:my-8 font-bold"
                size="lg"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
