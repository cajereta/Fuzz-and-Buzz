import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  );
}

export function CarouselDemo() {
  return (
    <Carousel
      className="w-full max-w-2xl "
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 6000,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="-ml-64">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="pl-64" key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6 w-96">
                  <span className="text-4xl font-semibold text-center">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
