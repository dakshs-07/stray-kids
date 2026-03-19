import Link from "next/link";

function RightBar() {
  return (
    <div className="flex flex-col right-0 max-w-100 mr-5 border-l-2 border-gray-300 bg-gray-200 px-2 sticky top-0 h-screen dark:bg-gray-500/40">
      <h1 className="pt-5 dark:text-grey-200">More to Explore</h1>
      <div className="flex flex-col text-sm mt-2">
        <Link href="" className="hover:opacity-60">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
        <Link href="">Lee Know's cats</Link>
      </div>
    </div>
  );
}

export default RightBar;
