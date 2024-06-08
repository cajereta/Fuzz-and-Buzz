import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";

export const ErrorPage = () => {
  return (
    <section className="bg-background dark:bg-background justify-center ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 h-screen flex flex-col items-center justify-center">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl  dark:text-foreground ">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl dark:text-foreground">
            Something's missing.
          </p>
          <p className="mb-4 text-lg text-foreground dark:text-muted-foreground">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link to={"/"} className={cn(buttonVariants(), "font-bold")}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
