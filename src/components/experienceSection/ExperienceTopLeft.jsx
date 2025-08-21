import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Creating Web Experiences
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="Since 2024" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="9" text="Projects" />
      </div>
      <p className="text-center">
        With a years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo  number="ALWAYS" text="Open to Opportunities"  />
    </div>
  );
};

export default ExperienceTopLeft;
