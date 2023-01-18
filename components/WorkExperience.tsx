import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};
const experiences = [
  {
    title: "Full Stack Developer",
    companyLogo: "/prenetics.jpg",

    duration: "SEP 2021 - MAY 2022",
    companyName: "Prenetics innovation lab, Chennai, India",
    companyLink: "https://www.prenetics.com",
    companyBio:
      "A life science company, covid testing is one of their products.",
    skills: [
      { img: "/skills/js.png", alt: "javascript" },
      { img: "/skills/expressjs.png", alt: "express.js" },
      { img: "/skills/react.png", alt: "reactjs" },
      { img: "/skills/mongodb.png", alt: "mongodb" },
    ],
    summary: ["Developed REST API for backend", "Built UI using Reactjs"],
  },
  {
    title: "Junior Full Stack Developer",
    companyLogo: "/myabhyas.jpg",
    duration: "MAR 2021 - AUG 2021",
    companyName: "ANP My Abhyas Pvt Ltd, Bangalore, India",
    companyLink: "https://www.myabhyas.com",
    companyBio:
      "A life science company, covid testing is one of their products.",
    skills: [
      { img: "/skills/js.png", alt: "javascript" },
      { img: "/skills/expressjs.png", alt: "express.js" },
      { img: "/skills/react.png", alt: "reactjs" },
      { img: "/skills/mongodb.png", alt: "mongodb" },
    ],
    summary: [
      "Built REST API using Express.js and MongoDB for backend.",
      "Built components in Reactjs for frontend",
      "Created a chatbot using amazon lex.",
    ],
  },
  {
    title: "Research Associate",
    companyLogo: "/imtech.jpg",
    duration: "SEP 2021 - MAY 2022",
    companyName: "Prenetics innovation lab, Chennai, India",
    companyLink: "https://www.prenetics.com",
    companyBio:
      "A life science company, covid testing is one of their products.",
    skills: [
      { img: "/skills/js.png", alt: "javascript" },
      { img: "/skills/expressjs.png", alt: "express.js" },
      { img: "/skills/react.png", alt: "reactjs" },
      { img: "/skills/mongodb.png", alt: "mongodb" },
    ],
    summary: ["Developed REST API for backend", "Built UI using Reactjs"],
  },
  {
    title: "National Post Doctoral Fellow (PDF)",
    companyLogo: "/imtech.jpg",
    duration: "SEP 2021 - MAY 2022",
    companyName: "Prenetics innovation lab, Chennai, India",
    companyLink: "https://www.prenetics.com",
    companyBio:
      "A life science company, covid testing is one of their products.",
    skills: [
      { img: "/skills/js.png", alt: "javascript" },
      { img: "/skills/expressjs.png", alt: "express.js" },
      { img: "/skills/react.png", alt: "reactjs" },
      { img: "/skills/mongodb.png", alt: "mongodb" },
    ],
    summary: ["Developed REST API for backend", "Built UI using Reactjs"],
  },
];

export default function WorkExperience({}: Props) {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden text-center md:flex-row">
      <h4 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Experience
      </h4>
      <div className="absolute flex h-full w-full snap-x snap-mandatory space-x-5 overflow-x-scroll scroll">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={{ ...experience }} key={index} />
        ))}
      </div>
    </div>
  );
}
