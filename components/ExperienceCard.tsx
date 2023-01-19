import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
  title: string;
  companyLogo: string;
  duration: string;
  companyName: string;
  companyLink: string;
  companyBio: string;
  skills: string[];
  summary: string[];
};

export default function ExperienceCard({ experience }: Props) {
  const {
    title,
    companyLogo,
    duration,
    companyName,
    companyLink,
    companyBio,
    skills,
    summary,
  } = experience;
  console.log(companyLogo);
  return (
    <article className="mt-30 flex w-[500px] flex-shrink-0 cursor-pointer   snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] px-0 opacity-40 transition-opacity duration-200 hover:opacity-100 md:w-[600px] md:px-10 xl:w-[900px]">
      {/* <div className="h-32 w-32 rounded-full">
        <Image
          src={companyLogo}
          fill={true}
          style={{ objectFit: "scale-down" }}
          alt="user profile picture"
        />
      </div> */}
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={companyLogo}
        className="h-24 w-24 rounded-full object-cover object-center md:h-32 md:w-32 xl:h-[150px] xl:w-[150px]"
        alt="pdds"
      ></motion.img>
      <h4 className="text-4xl  font-light">{title}</h4>
      <p className="text-sm font-bold">{duration}</p>

      <div className="my-2 flex space-x-2 rounded-lg hover:bg-black">
        {skills.map((skill, index) => (
          <img
            key={index}
            src={skill.img}
            alt={skill.alt}
            className="h-10 w-10 rounded-lg object-center"
          />
        ))}
      </div>

      <Link href={companyLink}>
        <p>@ {companyName}</p>
      </Link>

      <p className="text-sm">{companyBio}</p>
      <ul className="text-md ml-5 mt-4 list-disc space-y-4 text-left">
        <span className="font-semibold">Work summary</span>
        {summary.map((point: string, index: number) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <p></p>
    </article>
  );
}

// TODO fix the company logo transition problem