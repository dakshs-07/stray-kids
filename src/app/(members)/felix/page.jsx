import MemberTable from "../../../components/Member/MemberTable";

import { FelixData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { FelixFacts } from "../../../../data/FunFacts";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        <MemberTable data={FelixData} />
      </div>
      <FunFacts factData={FelixFacts} />
    </div>
  );
}

export default page;
