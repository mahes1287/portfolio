import { motion } from "framer-motion";
import React from "react";

type Props = {
  i: number;
  length: number;
  image: string;
  title: string;
  description: string;
};

export default function ProjectCard({
  i,
  length,
  image,
  title,
  description,
}: Props) {
  return (
    <div className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 border border-solid border-red-600 p-20 md:p-44">
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={image}
        alt="summa"
        className=""
      ></motion.img>
      <div className="max-w-6xl space-y-10 px-0 md:px-10">
        <h1 className="text-center text-2xl font-semibold">{`Project ${i} of ${length} : ${title}`}</h1>
        <p className="text-md text-center md:text-left"> {description}</p>
      </div>
    </div>
  );
}

// TODO fix the motion div in mobile view not working
