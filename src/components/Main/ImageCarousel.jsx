import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { HeroTitles } from "../../../data/members";

export function ImageCarousel({page}) {
  const hero = HeroTitles.find((item)=>item.page===page);
  if (!hero) return null;

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {hero.imagelist.map((image, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="relative h-[60vh] w-full">
              <Image
                src={image}
                alt={`${hero?.name} banner`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}
