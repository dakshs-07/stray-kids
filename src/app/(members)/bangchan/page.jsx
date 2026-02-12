import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { BangchanData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { BangchanFacts } from "../../../../data/FunFacts";
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
        <MemberTable data={BangchanData} />
      </div>
      <FunFacts factData={BangchanFacts} />
    </div>
  );
}

export default page;
