import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
      className="relative mx-auto flex h-screen min-h-screen max-w-[2000px] flex-col items-center justify-center text-center md:text-left xl:flex-row xl:space-y-0"
    >
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-400">
        Skills
      </h3>
      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over for proficiency levels
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />

        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
