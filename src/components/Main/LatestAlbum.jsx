import Image from "next/image";
import React from "react";
import ComebackCarousel from "./ComebackCarousel";

function LatestAlbum() {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl tracking-wide text-center">Latest Comeback</h1>
      <p className="text-2xl tracking-widest text-center">
        Do It | Nov 21, 2025
      </p>
      <ComebackCarousel />
      <div className="flex justify-center mt-10 gap-x-10">
        <Image
          src="/main/doitalbum.jpg"
          alt="do it logo"
          height={300}
          width={300}
        />
        <div className="py-2 tracking-widest">
          <h1 className="text-5xl">Do It</h1>
          <h2 className="text-lg text-muted-foreground">
            Release Date: November 21, 2025
          </h2>
          <p className="font-semibold mt-2">Tracks:</p>
          <ul>
            <li>
              1. Do It
              <span className="text-xs bg-yellow-400 px-1 mx-2 tracking-wide">
                Title
              </span>
            </li>
            <li>
              2. 신선놀음 DIVINE
              <span className="text-xs bg-yellow-400 px-1 mx-2 tracking-wide">
                Title
              </span>
            </li>
            <li>3. Holiday</li>
            <li>4. Photobook</li>
            <li>5. Do It (Festival ver.)</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold mt-2">Length:</span>
            14:13
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestAlbum;
