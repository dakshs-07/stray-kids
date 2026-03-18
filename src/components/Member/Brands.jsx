import { Marquee } from "../../../@/components/ui/marquee";
import Image from "next/image";

function Brands({ images = [] }) {
  if (!images) return null;
  const first = images.slice(0, images.length / 2);
  const second = images.slice(images.length / 2);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl py-3">Brand Ambassadorships</h1>
        <div className="flex cursor-pointer">
          <Marquee vertical pauseOnHover className="h-140">
            {first.map((img, i) => (
              <Image
                src={img}
                key={i}
                className="w-40 h-40 object-cover rounded-xl border"
                height={40}
                width={40}
                alt="brand image"
              />
            ))}
          </Marquee>
          <Marquee reverse vertical pauseOnHover className="h-140">
            {second.map((img, i) => (
              <Image
                src={img}
                key={i}
                className="w-40 h-40 object-cover rounded-xl border"
                height={40}
                width={40}
                alt="brand image"
              />
            ))}
          </Marquee>
        </div>{" "}
      </div>
    </div>
  );
}

export default Brands;
