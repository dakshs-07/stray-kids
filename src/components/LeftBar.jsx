"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NavTable from "./Member/NavTable";
import memberData from "../../data/members";

function LeftBar() {
  const pathname = usePathname();
  const currentPage = pathname.replace("/", "");

  const isMemberPage = memberData.some((member) => member.link === pathname);

  if (isMemberPage) {
    return (
      <div className="max-w-70 p-1 ml-10 sticky top-0 h-screen">
        <NavTable member={currentPage} />
      </div>
    );
  }

  return (
    <div className="max-w-70 p-1 ml-10 sticky top-0 h-screen">
      <div className="bg-black h-6 w-full text-white px-2 tracking-wide">
        Specials
      </div>
      <div className="px-1 gap-y-1 flex flex-col sm:text-sm">
        <Link href="/leeknow">Lee Know</Link>
        <Link href="/bangchan">Bangchan</Link>
        <Link href="/changbin">Changbin</Link>
        <Link href="/hyunjin">Hyunjin</Link>
      </div>
    </div>
  );
}

export default LeftBar;
