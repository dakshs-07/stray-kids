import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <div className="bg-gray-200">
      <Link href="/">
        <Image
          src="/main/logo.png"
          alt="stray kids logo"
          width={140}
          height={140}
          className="ml-20 my-0"
        />
      </Link>
      <div className="flex justify-center items-center gap-x-8 py-1 text-lg w-full bg-red-400 tracking-wider sm:text-sm md:text-lg md:gap-x-3">
        <Link href="/bangchan">BangChan</Link>
        <Link href="/leeknow">Lee Know</Link>
        <Link href="/changbin">Changbin</Link>
        <Link href="/hyunjin">Hyunjin</Link>
        <Link href="/han">Han</Link>
        <Link href="/felix">Felix</Link>
        <Link href="/seungmin">Seungmin</Link>
        <Link href="/in">I.N</Link>
      </div>
    </div>
  );
}

export default Banner;
