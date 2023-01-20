import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

type Props = {};

type Project = {
  image: String;
  title: String;
  description: String;
};
export default function Projects({}: Props) {
  const [projects, setProjects] = useState();
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Projects
      </h3>
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
        {projects?.map((project, j) => {
          let i = j + 1;
          let length = projects.length;
          const data = { i, length, ...project };
          return <ProjectCard {...data} />;
        })}
      </div>
      <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </div>
  );
}
