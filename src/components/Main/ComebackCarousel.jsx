import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

function ComebackCarousel() {
  return (
    <div>
      <Carousel
        className="w-full items-center"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          <CarouselItem className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-video my-5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://open.spotify.com/embed/track/56Fu41EhpsPqqfDZsj3eaN?utm_source=generator&theme=0"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-video my-5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/NED7nev2ywQ"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-video my-5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/E8i32NXMxnc?si=w7rVqT0uz9ZsyOGb"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <div className="w-full max-w-2xl aspect-video my-5">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/mf967jPZrCk?si=PhqDZI7FQPtPJeeg"
                title="YouTube video player"
                allowFullScreen
              />
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}

export default ComebackCarousel;
