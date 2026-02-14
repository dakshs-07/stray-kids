"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function EraCarousel({ slides, memberName }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <div className="my-5">
      <h1 className="text-3xl font-extralight text-center py-5">{memberName} Across Eras</h1>
      <div
        className="overflow-hidden "
        ref={emblaRef}      >
        <div className="flex">
          {slides.map((img, index) => (
            <div className="flex-[0_0_40%] flex justify-center" key={index}>
              <div className="relative w-80 h-100 overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover select-none"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <h1 className="absolute left-4 -bottom-4 -translate-y-1/2 -rotate-90 origin-left text-white text-xl font-extralight z-10 select-none">
                  {img.eraName}
                </h1>
                <p className="absolute left-9 -bottom-2.5 -translate-y-1/2 -rotate-90 origin-left text-gray-300 text-slg font-extralight z-10 select-none">
                  {img.eraYear}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
