import Members from "@/components/Main/Members";

function page() {
  return (
    <div className="py-2">
      <p className="text-center">
        Stray Kids (스트레이 키즈) is a South Korean group of 8 members under
        JYP Entertainment. Members include Bang Chan, Lee Know, Changbin,
        Hyunjin, Felix, Han, Seungmin and I.N. They originally debuted in 2018
        as a 9-member group, with Woojin later leaving the group after a year in
        2019.{" "}
      </p>
      <Members />
    </div>
  );
}

export default page