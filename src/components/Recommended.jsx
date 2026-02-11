import React from "react";
import RecommendedCards from "./RecommendedCards";

function Recommended() {
  return (
    <div className=" m-20">
      <div>
        <div className="border-b-2 border-black">
          <div className="bg-black text-white p-2 h-fit w-fit">
            You may also like
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <RecommendedCards
            link="/"
            img="/main/suggested/suggested1.jpg"
            title="Lee Know's cats"
            description="I am Lee Know you know"
          />
          <RecommendedCards
            link="/"
            img="/main/suggested/suggested2.webp"
            title="Lee Know's cats"
            description="I am Lee Know you know"
          />
          <RecommendedCards
            link="/"
            img="/main/suggested/suggested3.jpg"
            title="Lee Know's cats"
            description="I am Lee Know you know"
          />
        </div>
      </div>
    </div>
  );
}

export default Recommended;
