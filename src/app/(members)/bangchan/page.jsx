import MemberTable from "../../../components/Member/MemberTable";
import React from "react";
import { BangchanData } from "../../../../data/Table";
import FunFacts from "../../../components/Member/FunFacts";
import { BangchanFacts } from "../../../../data/FunFacts";
import EraCarousel from "../../../components/Member/EraCarousel";
import { BangchanEras } from "../../../../data/erasData";
import MediaAppearances from "../../../components/Member/MediaAppearances";
function page() {
  return (
    <div className="max-w-4xl mx-auto px-6 my-5">
      <section id="eras">
        <EraCarousel slides={BangchanEras} memberName="Lee Know" />
      </section>
      <div className="flex justify-around items-start">
        <section id="profile">
          <MemberTable data={BangchanData} className="profile" />
        </section>
      </div>
      <section id="funfacts">
        <FunFacts factData={BangchanFacts} className="funfacts" />
      </section>
      <section>
        <MediaAppearances />
      </section>
    </div>
  );
}

export default page;
