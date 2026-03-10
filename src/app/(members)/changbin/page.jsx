import MemberTable from "../../../components/Member/MemberTable";
import { ChangbinData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { ChangbinFacts } from "../../../../data/FunFacts";
import EraCarousel from "../../../components/Member/EraCarousel";
// import { ChangbinEras } from "../../../../data/erasData";
import MediaAppearances from "../../../components/Member/MediaAppearances";
import { ChangbinEras } from "../../../../data/erasData";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <section id="eras">
        <EraCarousel slides={ChangbinEras} memberName="Changbin" />
      </section>
      <div className="flex justify-around items-start">
        <section id="profile">
          <MemberTable data={ChangbinData} className="profile" />
        </section>
      </div>
      <section id="funfacts">
        <FunFacts factData={ChangbinFacts} className="funfacts" />
      </section>
      <section>
        <MediaAppearances />
      </section>
    </div>
  );
}

export default page;
