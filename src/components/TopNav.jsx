"use client";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function TopNav() {
  const [dark, setDark] = useState(false);
  function toggleDark() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }
  return (
    <div className="relative flex justify-center items-center bg-black text-red-300 text-sm py-2">
      <div className="flex gap-x-3">
        <Link href="" className="hover:brightness-125">
          Stray Kids
        </Link>
        <Link href="" className="hover:brightness-125">
          Noisey
        </Link>
        <Link href="/quiz" className="hover:brightness-125">
          Quizzes
        </Link>
        <Link href="" className="hover:brightness-125">
          Albums
        </Link>
        <Link href=""></Link>
        <Link href=""></Link>
      </div>
      <button
        onClick={toggleDark}
        className="absolute right-4 hover:cursor-pointer hover:brightness-90"
      >
        {dark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}

export default TopNav;
