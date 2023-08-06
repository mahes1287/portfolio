import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex h-screen max-w-7xl flex-col items-center justify-evenly text-center md:flex-row md:text-left "
    >
      <h1 className="absolute top-24  text-2xl uppercase tracking-[20px] text-gray-400">
        About
      </h1>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/photo.avif"
          alt="my profile image"
          width={100}
          height={100}
          className="md:h-92 mt-20 h-32 w-32 flex-shrink-0 rounded-full object-cover md:mt-0 md:w-52 md:rounded-lg"
        ></Image>
      </motion.div>

      <div className="mt-3 text-gray-200 md:px-10">
        <h4 className="text-2xl ">
          Here is my{" "}
          <span className="inline-flex underline decoration-lime-200">
            brief
          </span>{" "}
          background
        </h4>
        <p className="text-md mt-4">
          I am <strong>Maheshwaran Velusamy</strong>. I Love (❤️) to build
          things in the Javascript. I have more than a year of experience in
          developing and writing server-side web application logic for back-end
          as well as front end components for eLearning and covid test sample
          tracking web apps that were released within deadlines.
        </p>
      </div>
    </motion.div>
  );
}
