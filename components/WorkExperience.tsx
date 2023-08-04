import React, { useEffect, useState } from "react";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "./ExperienceCard";
import ExperienceTimeline from "./ExperienceTimeline";

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
      {/* <h1 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Experience
      </h1> */}
      <section>
        <div className="bg-black py-8 text-white">
          <div className="container mx-auto my-12 flex flex-col items-start md:my-24 md:flex-row">
            <div className="sticky mt-2 flex w-full flex-col px-8 md:top-36 md:mt-12 lg:w-1/3">
              <p className="tracking-loose ml-2 uppercase text-yellow-300">
                Experience
              </p>
              <p className="mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed">
                This contains my experience with explanation for the gap.
              </p>
            </div>
            <ExperienceTimeline />
          </div>
        </div>
      </section>
      {/* <div className="scroll   flex h-full w-full snap-x snap-mandatory space-x-5 overflow-x-scroll">
        {experiences?.map((experience, index) => (
          <ExperienceCard experience={{ ...experience }} key={index} />
        ))}
      </div> */}
    </div>
  );
}
