import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { ChangbinData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { ChangbinFacts } from "../../../../data/FunFacts";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        <MemberTable data={ChangbinData} />
      </div>
      <FunFacts factData={ChangbinFacts} />
    </div>
  );
}

export default page;
