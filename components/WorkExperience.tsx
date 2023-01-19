import React, { useEffect, useState } from "react";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  const [experiences, setExperiences] = useState();
  useEffect(() => {
    setExperiences(experienceData);
    console.log(experiences);
  }, []);
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center md:flex-row">
      <h4 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Experience
      </h4>
      <div className="scroll absolute flex h-full w-full snap-x snap-mandatory space-x-5 overflow-x-scroll">
        {experiences?.map((experience, index) => (
          <ExperienceCard experience={{ ...experience }} key={index} />
        ))}
      </div>
    </div>
  );
}
