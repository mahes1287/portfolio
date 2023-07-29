import React, { useEffect, useState } from "react";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "./ExperienceCard";

type Props = {};

type Experience = {
  title: string;
  companyLogo: string;
  duration: string;
  companyName: string;
  companyLink: string;
  companyBio: string;
  skills: { img: string; alt: string }[];
  summary: string[];
};

export default function WorkExperience({}: Props) {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  useEffect(() => {
    setExperiences(experienceData);
    console.log(experiences);
  }, [experiences]);
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-[#F7AB0A]/80 md:flex-row">
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
