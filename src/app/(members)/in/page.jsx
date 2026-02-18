import MemberTable from "../../../components/Member/MemberTable";
import React from "react";
import { InData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { InFacts } from "../../../../data/FunFacts";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        <MemberTable data={InData} />
      </div>
      <FunFacts factData={InFacts} />
    </div>
  );
}

export default page;
