import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="relative flex justify-center mt-30">
        <div className="flex justify-around items-center w-full h-40 gap-x-10 sm:h-20 md:h-30 lg:h-40 mx-60">
          <div className="flex flex-col">
            <Link href="">About</Link>
            <Link href="">About</Link>
          </div>
          <div className=" flex flex-col">
            <Link href="">About</Link>
            <Link href="">About</Link>
            <Link href="">About</Link>
          </div>
        </div>
        {/* <Image
          src="/main/logo.png"
          alt="stray-kids-footer image"
          height={200}
          width={200}
        /> */}
      </div>
      <p className="font-extralight text-center tracking-wider py-2">
        CC 2026 Stray Kids Fandom
      </p>
    </div>
  );
}

export default Footer;
