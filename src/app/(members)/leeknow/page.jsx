import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { LeeKnowData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { LeeknowFacts } from "../../../../data/FunFacts";
import EraCarousel from "@/components/Member/EraCarousel";
import { LeeknowEras } from "../../../../data/erasData";
import NavTable from "@/components/Member/NavTable";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <EraCarousel slides={LeeknowEras} memberName="Lee Know" className="eras"/>

      <div className="flex justify-around items-start">
        <NavTable />
        {/* <Image
            src="/memberPages/LeeKnow/leeknow-main.webp"
            alt=""
            width={200}
            height={200}
            className="object-cover"
          /> */}
        <MemberTable data={LeeKnowData} className="profile" />
      </div>
      <FunFacts factData={LeeknowFacts} className="funfacts" />
    </div>
  );
}

export default page;
