import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const GridHome = () => {
  return (
    <div className="flex flex-col  border-1  md:grid grid-cols-home md:grid-rows-2 md:-mt-16 md:mb-8 md:h-screen">
      <div className="border-1 col-span-1 row-span-2 ">
        <div className="bg-[url(https://res.cloudinary.com/duqkijb8n/image/upload/v1717808450/ji2phhtkgwmbdecbesi7.jpg)] w-full h-full  ">
          <div className="grid bg-gradient-to-bl from-transparent to-gray-950 h-full w-full">
            <div className="self-end py-16 md:py-8 px-10 md:px-16 text-left text-white">
              <h4 className="text-md ">The most cool amp that you can buy</h4>
              <h2 className="text-5xl md:text-7xl font-bold ">Warpdrive</h2>
              <h3 className="text-2xl font-bold ">
                Iconic tones at the palm of your hand
              </h3>
              <Link
                to={"/products/13"}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "border font-bold dark:border-foreground w-fit px-12 my-4 md:my-8 hover:text-foreground"
                )}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-1 col-span-1  ">
        <div className="bg-[url(https://res.cloudinary.com/duqkijb8n/image/upload/v1717808449/zbljjrfpnvwgfaoogdvr.jpg)] w-full h-full  ">
          <div className="grid bg-gradient-to-b from-transparent to-gray-950/90 h-full w-full ">
            <div className=" self-end px-10 py-16 md:py-8 text-left text-white">
              <h4 className="text-md ">Achieve all the sounds that you want</h4>
              <h2 className="text-5xl font-bold ">Echoes</h2>
              <h3 className="text-xl font-bold ">
                All the sonic possibilities
              </h3>
              <Link
                to={"/products/3"}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "border font-bold dark:border-foreground w-fit px-12 my-4 md:my-8 hover:text-foreground"
                )}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-1 col-span-1  ">
        <div className="bg-[url(https://res.cloudinary.com/duqkijb8n/image/upload/v1717808450/hholviw6afymbd8vmhgk.jpg)] w-full h-full  ">
          <div className="grid bg-gradient-to-b from-transparent to-gray-950/90  h-full w-full">
            <div className=" self-end px-10 py-16 md:py-8 text-left text-white">
              <h4 className="text-md ">From heavy tones to soft cleans</h4>
              <h2 className="text-5xl font-bold ">Harmonic Alchemist</h2>
              <h3 className="text-xl font-bold ">
                Shred all night or blues all day
              </h3>
              <Link
                to={"/products/5"}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "border font-bold dark:border-foreground w-fit px-12 my-4 md:my-8 hover:text-foreground"
                )}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
