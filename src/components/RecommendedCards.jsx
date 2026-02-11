import Image from "next/image";
import React from "react";

function RecommendedCards({ img, title, description }) {
  return (
    <div className="w-full max-w-xs">
      <div className="relative w-full aspect-video">
        <Image src={img} alt={title} fill className="object-cover" />
      </div>{" "}
      <h2 className="tracking-wide font-semibold">{title}</h2>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default RecommendedCards;
