import Link from "next/link";
import React from "react";

function TopNav() {
  return (
    <div className="flex justify-center items-center bg-black text-red-300 text-sm gap-x-3 py-2">
      <Link href="">Stray Kids</Link>
      <Link href="">Noisey</Link>
      <Link href="">Quizzes</Link>
      <Link href="">Albums</Link>
      <Link href=""></Link>
      <Link href=""></Link>
    </div>
  );
}

export default TopNav;
