import Image from "next/image";
import Link from "next/link";

function RecommendedCards({ img, title, description, link }) {
  return (
    <div className="w-full max-w-xs">
      <Link href={link}>
        <div className="relative w-full aspect-video">
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover hover:opacity-90"
          />
        </div>
        <h2 className="tracking-wide font-semibold hover:underline">{title}</h2>
      </Link>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default RecommendedCards;
