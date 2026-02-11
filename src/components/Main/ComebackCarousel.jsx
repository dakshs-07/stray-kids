import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

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
            {" "}
            <iframe
              className="my-5 items-center"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NED7nev2ywQ?si=RYj5duUJ8Q4_h-XU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/mf967jPZrCk?si=PhqDZI7FQPtPJeeg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center"></CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}

export default ComebackCarousel;
