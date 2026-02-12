import { ImageCarousel } from "@/components/Main/ImageCarousel";
import React from "react";

function page() {
  return (
    <div>
      <ImageCarousel page="leeknow" />
      <div className="relative flex items-center justify-center py-10">
        <h1 className="relative z-10 text-center tracking-widest text-6xl font-light sm:text-2xl md:text-4xl lg:text-6xl">
          Lee Know
        </h1>
        <h1 className="absolute text-9xl text-muted-foreground opacity-10 z-0 sm:text-5xl md:text-7xl">
          이민호
        </h1>
      </div>
    </div>
  );
}

export default page;
