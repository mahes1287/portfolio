import { motion } from "framer-motion";
import React from "react";
import Skill from "./Skill";
import ciCdLine from "@iconify/icons-clarity/ci-cd-line";
import css3 from "@iconify/icons-logos/css-3";
import djangoIcon from "@iconify/icons-skill-icons/django";
import dockerIcon from "@iconify/icons-skill-icons/docker";
import fileSqlBold from "@iconify/icons-ph/file-sql-bold";
import firebaseIcon from "@iconify/icons-logos/firebase";
import javascriptIcon from "@iconify/icons-logos/javascript";
import pythonIcon from "@iconify/icons-logos/python";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-skill-icons/redux";
import styledcomponentsIcon from "@iconify/icons-skill-icons/styledcomponents";
import tailwindcssDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import typescriptIcon from "@iconify/icons-devicon/typescript";
import nextjsIcon from "@iconify/icons-logos/nextjs-icon";
import prismaIcon from "@iconify/icons-skill-icons/prisma";
import postgresqlDark from "@iconify/icons-skill-icons/postgresql-dark";
import fileTypeNode from "@iconify/icons-vscode-icons/file-type-node";

function getRandomBoolean() {
  return Math.random() < 0.5;
}

const skills = [
  {
    name: "Javascript",
    icon: javascriptIcon,
    level: 70, // Suitable level for junior developer (0 - 100)
    directionLeft: true,
  },
  {
    name: "Python",
    icon: pythonIcon,
    level: 40,
    directionLeft: true,
  },
  {
    name: "React",
    icon: reactIcon,
    level: 60,
    directionLeft: false,
  },
  {
    name: "Redux",
    icon: reduxIcon,
    level: 70,
    directionLeft: true,
  },
  {
    name: "CSS",
    icon: css3,
    level: 50,
    directionLeft: true,
  },
  {
    name: "Django",
    icon: djangoIcon,
    level: 50,
    directionLeft: false,
  },
  {
    name: "Docker",
    icon: dockerIcon,
    level: 50,
    directionLeft: false,
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    level: 55,
    directionLeft: true,
  },
  {
    name: "Styled Components",
    icon: styledcomponentsIcon,
    level: 50,
    directionLeft: true,
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcssDark,
    level: 50,
    directionLeft: false,
  },
  {
    name: "TypeScript",
    icon: typescriptIcon,
    level: 20,
    directionLeft: false,
  },
  {
    name: "Next.js",
    icon: nextjsIcon,
    level: 55,
    directionLeft: true,
  },
  {
    name: "Prisma",
    icon: prismaIcon,
    level: 50,
    directionLeft: true,
  },
  {
    name: "PostgreSQL",
    icon: postgresqlDark,
    level: 55,
    directionLeft: false,
  },
  {
    name: "Node.js",
    icon: fileTypeNode,
    level: 70,
    directionLeft: false,
  },
];

// You can use the "skills" array as needed in your application.

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
      <div className="absolute top-44  grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}
