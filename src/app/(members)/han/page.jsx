import MemberTable from "../../../components/Member/MemberTable";
import { HanData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { HanFacts } from "../../../../data/FunFacts";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex justify-around items-start">
        <MemberTable data={HanData} />
      </div>
      <FunFacts factData={HanFacts} />
    </div>
  );
}

export default page;
