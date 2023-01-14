import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0">
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over for proficiency levels
      </h3>
    </div>
  );
}
