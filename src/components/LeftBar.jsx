import Link from "next/link";
import React from "react";

function LeftBar() {
  return (
    <div className="max-w-70 p-1 ml-10">
      <div className="bg-black h-6 w-full text-white px-2 tracking-wide">
        Specials
      </div>
      <div className="px-1 gap-y-1 flex flex-col sm:text-sm">
        <Link href="/">Lee Know</Link>
        <Link href="/">Lee Know</Link>
        <Link href="/">Lee Know</Link>
        <Link href="/">Lee Know</Link>
      </div>
    </div>
  );
}

export default LeftBar;
