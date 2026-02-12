import MemberTable from "@/components/Member/MemberTable";
import React from "react";
import { LeeKnowData } from "../../../../data/Table";
function page() {
  return (
    <div>
      <MemberTable data={LeeKnowData} />
    </div>
  );
}

export default page;
