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
          loading="eager"
        />
      </Link>
      <div className="flex justify-center items-center gap-x-8 py-1 text-lg w-full bg-red-400 tracking-wider sm:text-sm md:text-lg md:gap-x-3">
        <Link
          href="/bangchan"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          BangChan
        </Link>
        <Link
          href="/leeknow"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Lee Know
        </Link>
        <Link
          href="/changbin"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Changbin
        </Link>
        <Link
          href="/hyunjin"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Hyunjin
        </Link>
        <Link
          href="/han"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Han
        </Link>
        <Link
          href="/felix"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Felix
        </Link>
        <Link
          href="/seungmin"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          Seungmin
        </Link>
        <Link
          href="/in"
          scroll={false}
          className="hover:underline hover:text-muted-foreground"
        >
          I.N
        </Link>
      </div>
    </div>
  );
}

export default Banner;
