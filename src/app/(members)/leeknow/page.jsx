import MemberTable from "../../../components/Member/MemberTable";
import { LeeKnowData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { LeeknowFacts } from "../../../../data/FunFacts";
import EraCarousel from "../../../components/Member/EraCarousel";
import { LeeknowEras } from "../../../../data/erasData";
import MediaAppearances from "../../../components/Member/MediaAppearances";
import Brands from "../../../components/Member/Brands";
import { MemberMarqueeImages } from "../../../../data/brands";

function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <section id="eras">
        <EraCarousel slides={LeeknowEras} memberName="Lee Know" />
      </section>
      <div className="flex justify-around items-start">
        {/* <Image
            src="/memberPages/LeeKnow/leeknow-main.webp"
            alt=""
            width={200}
            height={200}
            className="object-cover"
          /> */}
        <section>
          {" "}
          <Brands images={MemberMarqueeImages.leeknow} />
        </section>
        <section id="profile">
          <MemberTable data={LeeKnowData} className="profile" />
        </section>
      </div>
      <section id="funfacts">
        <FunFacts factData={LeeknowFacts} className="funfacts" />
      </section>
      <section>
        <MediaAppearances />
      </section>
    </div>
  );
}

export default page;
