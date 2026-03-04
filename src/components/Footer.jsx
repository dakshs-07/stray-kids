import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white px-20 py-12 text-sm">
      <div className="flex justify-between">
        <div className="flex flex-col space-y-2">
          <Link href="" className="hover:underline">
            About
          </Link>
          <Link href="" className="hover:underline">
            Contact
          </Link>
          <Link href="" className="hover:underline">
            Contribute
          </Link>
          <Link href="" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex space-x-16">
          <div className="flex flex-col space-y-2">
            <Link href="" className="hover:underline">
              Blog
            </Link>
            <Link href="" className="hover:underline">
              About
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="" className="hover:underline">
              Lee Know Quiz
            </Link>
            <Link href="" className="hover:underline">
              Stray Kids Quiz
            </Link>
            <Link href="" className="hover:underline">
              Seungmin Quiz
            </Link>
            <Link href="" className="hover:underline">
              Felix Quiz
            </Link>
            <Link href="" className="hover:underline">
              Bangchan Quiz
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link href="" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
      <p className="font-extralight text-center traking-wider pt-10">
        CC 2026 Stray Kids Fandom
      </p>
    </div>
  );
}

export default Footer;
