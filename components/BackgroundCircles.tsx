import React from "react";

type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[300px] w-[300px] rounded-full border border-[#333333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333333]" />
    </div>
  );
}
