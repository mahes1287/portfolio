import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Projects
      </h3>
      <div className="absolute top-[30%] left-0 h-[300px] w-full -skew-y-12 bg-[#F7AB0A]/10" />
    </div>
  );
}
