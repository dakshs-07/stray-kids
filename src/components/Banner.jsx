import Image from "next/image";
import Link from "next/link";

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
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          BangChan
        </Link>
        <Link
          href="/leeknow"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Lee Know
        </Link>
        <Link
          href="/changbin"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Changbin
        </Link>
        <Link
          href="/hyunjin"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Hyunjin
        </Link>
        <Link
          href="/han"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Han
        </Link>
        <Link
          href="/felix"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Felix
        </Link>
        <Link
          href="/seungmin"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          Seungmin
        </Link>
        <Link
          href="/in"
          scroll={false}
          className="hover:underline hover:text-white dark:hover:text-black"
        >
          I.N
        </Link>
      </div>
    </div>
  );
}

export default Banner;
