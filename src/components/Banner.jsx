import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div>
      <Image
        src="/main/logo.png"
        alt="stray kids logo"
        width={130}
        height={130}
        className="ml-20"
      />
      <div className="flex justify-center items-center gap-x-8 text-lg w-full bg-red-400 tracking-wider">
        <Link href="">BangChan</Link>
        <Link href="">Lee Know</Link>
        <Link href="">Changbin</Link>
        <Link href="">Hyunjin</Link>
        <Link href="">Han</Link>
        <Link href="">Felix</Link>
        <Link href="">Seungmin</Link>
        <Link href="">I.N</Link>
      </div>
    </div>
  );
}

export default Banner;
