import React from "react";
import memberData from "../../../data/members"
function Members() {
  return (
    <div>
      <h1 className="text-center tracking-wider font-extralight text-2xl py-2">
        Members
      </h1>

      {memberData.map((item) => (
        <div key={item.id}>
          <h1 className="text-2xl tracking-wide font-light">{item.name}</h1>
          <p className="italic font-light">{item.role}</p>
        </div>
      ))}
    </div>
  );
}

export default Members;
