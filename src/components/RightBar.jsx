import Link from "next/link";

function RightBar() {
  return (
    <div className="flex flex-col right-0 max-w-100 mr-10 border-l-2 border-gray-300 pl-2 sticky top-0 h-screen">
      <h1 className="pt-5">More to Explore</h1>
      <div className="flex flex-col text-sm mt-2">
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
      </div>
    </div>
  );
}

export default RightBar;
