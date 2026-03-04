"use client";
import Link from "next/link";

function TopNav() {
  return (
    <div className=" relative flex justify-center items-center bg-black text-red-300 text-sm py-2">
      <div className="flex gap-x-3">
        <Link href="">Stray Kids</Link>
        <Link href="">Noisey</Link>
        <Link href="/quiz">Quizzes</Link>
        <Link href="">Albums</Link>
        <Link href=""></Link>
        <Link href=""></Link>
      </div>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="absolute right-4 cursor-pointer"
      >
        Dark Mode
      </button>
    </div>
  );
}

export default TopNav;
