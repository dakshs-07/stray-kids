"use client";
import Image from "next/image";
import React from "react";
import { ImageCarousel } from "./Main/ImageCarousel";
import memberData from "../../data/members";
import { usePathname } from "next/navigation";

function Hero() {
    const pathname = usePathname();
    const page = usePathname === "/" ? "home" : pathname.replace("/", "");

  return (
    
    <div>
      <ImageCarousel page={page}/>
      <div className="relative flex items-center justify-center py-10">
        <h1 className="relative z-10 text-center tracking-widest text-6xl font-light sm:text-2xl md:text-4xl lg:text-6xl">
          STRAY KIDS FANDOM
        </h1>
        <h1 className="absolute text-9xl text-muted-foreground opacity-10 z-0 sm:text-5xl md:text-7xl">
          스트레이 키즈
        </h1>
      </div>
    </div>
  );
}

export default Hero;
