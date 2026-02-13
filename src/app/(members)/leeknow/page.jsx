import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { LeeKnowData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { LeeknowFacts } from "../../../../data/FunFacts";
import EraCarousel from "@/components/Member/EraCarousel";
import { LeeknowEras } from "../../../../data/erasData";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        {/* <Image
            src="/memberPages/LeeKnow/leeknow-main.webp"
            alt=""
            width={200}
            height={200}
            className="object-cover"
          /> */}
        <MemberTable data={LeeKnowData} />
      </div>
      <FunFacts factData={LeeknowFacts}/>
      <EraCarousel slides={LeeknowEras} memberName="Lee Know" />
    </div>
  );
}

export default page;
