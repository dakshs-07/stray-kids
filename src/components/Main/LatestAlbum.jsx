import Image from "next/image";

import ComebackCarousel from "./ComebackCarousel";

function LatestAlbum() {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-4xl tracking-wide text-center">Latest Comeback</h1>
      <p className="text-2xl tracking-widest text-center text-muted-foreground">
        Do It | Nov 21, 2025
      </p>
      <ComebackCarousel />
      <div className="flex justify-center mt-10 gap-x-10">
        <Image
          src="/main/doitbanner.jpg"
          alt="do it logo"
          height={300}
          width={300}
        />
        <div className="py-2 tracking-widest">
          <h1 className="text-5xl">Do It</h1>
          <h2 className="text-lg text-muted-foreground">
            Release Date: November 21, 2025
          </h2>
          <p className="font-semibold mt-2">Tracks:</p>
          <ol className="list-decimal list-inside">
            <a href="https://www.youtube.com/watch?v=NED7nev2ywQ&list=OLAK5uy_nNAxQ3Hb5fwZ9xyMYAkniRXaLJam8wnRU">
              <li className="hover:text-muted-foreground">
                Do It
                <span className="text-xs bg-yellow-400 px-1 mx-2 tracking-wide">
                  Title
                </span>
              </li>
            </a>
            <a href="https://www.youtube.com/watch?v=E8i32NXMxnc&list=OLAK5uy_nNAxQ3Hb5fwZ9xyMYAkniRXaLJam8wnRU">
              <li className="hover:text-muted-foreground">
                신선놀음 DIVINE
                <span className="text-xs bg-yellow-400 px-1 mx-2 tracking-wide">
                  Title
                </span>
              </li>
            </a>
            <a href="https://www.youtube.com/watch?v=EZh3S8-WmyU&list=OLAK5uy_nNAxQ3Hb5fwZ9xyMYAkniRXaLJam8wnRU">
              <li className="hover:text-muted-foreground">Holiday</li>
            </a>
            <a href="https://www.youtube.com/watch?v=l5OuKEpNqos&list=OLAK5uy_nNAxQ3Hb5fwZ9xyMYAkniRXaLJam8wnRU">
              <li className="hover:text-muted-foreground">Photobook</li>
            </a>
            <a href="https://www.youtube.com/watch?v=StNhoo8mp48&list=OLAK5uy_nNAxQ3Hb5fwZ9xyMYAkniRXaLJam8wnRU">
              <li className="hover:text-muted-foreground">
                Do It (Festival ver.)
              </li>
            </a>
          </ol>
          <p className="mt-2">
            <span className="font-semibold mt-2">Length:</span>
            14:13
          </p>
        </div>
      </div>
    </div>
  );
}

export default LatestAlbum;
