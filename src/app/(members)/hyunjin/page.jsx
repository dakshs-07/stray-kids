import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { HyunjinData } from "../../../../data/Table";
import FunFacts from "@/components/Member/FunFacts";
import { HyunjinFacts } from "../../../../data/FunFacts";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        <MemberTable data={HyunjinData} />
      </div>
      <FunFacts factData={HyunjinFacts} />
    </div>
  );
}

export default page;
