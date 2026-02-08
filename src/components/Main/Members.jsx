import React from "react";
import memberData from "../../../data/members";
import Image from "next/image";
function Members() {
  return (
    <div className="py-10">
      <h1 className="text-center tracking-wider font-extralight text-2xl mb-6">
        Members
      </h1>
      <div className="flex gap-x-10 justify-center items-center">
        {memberData.map((item) => (
          <div key={item.id} className="text-center">
            <div className="w-25 h-25 rounded-full overflow-hidden border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>

            <h1 className="text-xl tracking-wide font-light">{item.name}</h1>
            <p className="italic font-light text-gray-600">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
