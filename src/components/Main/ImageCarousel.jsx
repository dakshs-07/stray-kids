import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const banners = [
  "/main/banner.webp",
  "/main/banner2.webp",
  "/main/banner3.webp",
  "/main/banner4.webp",
];

export function ImageCarousel() {
  return (
    <Carousel
      className="w-screen"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {banners.map((src, index) => (
          <CarouselItem key={index} className="w-screen">
            <div className="relative h-[60vh] w-full">
              <Image
                src={src}
                alt={`Stray Kids banner ${index + 1}`}
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
