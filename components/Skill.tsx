import { motion } from "framer-motion";
import React from "react";
type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src="/skills/mongodb.png"
        alt="mongodb"
        className="h-24 w-24 rounded-lg border border-gray-500 object-cover filter transition duration-300 ease-in-out group-hover:grayscale"
      />
      <div className="absolute h-24 w-24 rounded-lg opacity-0 transition duration-300 ease-in-out group-hover:bg-white/80 group-hover:opacity-80">
        <div className="flex h-full items-center justify-center">
          <p className="text-2xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
