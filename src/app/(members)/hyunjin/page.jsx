import MemberTable from "../../../components/Member/MemberTable";

import { HyunjinData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { HyunjinFacts } from "../../../../data/FunFacts";
import EraCarousel from "../../../components/Member/EraCarousel";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <section id="eras">
        <EraCarousel slides={HyunjinEras} memberName="Hyunjin" />
      </section>
      <div className="flex justify-around items-start">
        <section id="profile">
          <MemberTable data={HyunjinData} className="profile" />
        </section>
      </div>
      <section id="funfacts">
        <FunFacts factData={HyunjinFacts} className="funfacts" />
      </section>
      <section>
        <MediaAppearances />
      </section>
    </div>
  );
}

export default page;
