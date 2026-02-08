import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-between bg-black text-white mt-10">
      <div className=" flex items-end justify-around w-100 h-40 gap-x-10">
        <div className=" flex flex-col left-0">
          <Link href="">About</Link>
          <Link href="">About</Link>
          <Link href="">About</Link>
        </div>
        <div className=" flex flex-col left-0">
          <Link href="">About</Link>
          <Link href="">About</Link>
          <Link href="">About</Link>
        </div>
      </div>
      <Image
        src="/main/footer.png"
        alt="stray-kids-footer image"
        height={700}
        width={700}
        className="r-0 b-0"
      />
    </div>
  );
}

export default Footer;
