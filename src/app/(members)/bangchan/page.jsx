import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { BangchanData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { BangchanFacts } from "../../../../data/FunFacts";
import { BangchanEras } from "../../../../data/erasData";
import EraCarousel from "@/components/Member/EraCarousel";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <EraCarousel slides={BangchanEras} memberName="Bang Chan" />
      <div className="flex justify-around items-start">
        <MemberTable data={BangchanData} />
      </div>
      <FunFacts factData={BangchanFacts} />
    </div>
  );
}

export default page;
