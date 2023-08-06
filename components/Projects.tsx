import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

type Props = {};

type ProjectProps = {
  image: string;
  title: string;
  description: string;
};
export default function Projects({}: Props) {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden">
      <h3 className="absolute top-16 text-2xl uppercase tracking-[20px] text-gray-400 scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-[#F7AB0A]/80">
        Projects
      </h3>
      <div className="relative z-20 flex  w-full snap-x snap-mandatory overflow-x-scroll overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project, j) => {
          let i = j + 1;
          let length = projects.length;
          const data = { i, length, ...project };
          return <ProjectCard key={i} {...data} />;
        })}
      </div>
      <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </div>
  );
}
