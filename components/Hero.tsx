import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, am Mahesh", "<More-Coffee-More-Code.tsx />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src="/photo.JPG"
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        alt="Picture of the author"
        object-fit="cover"
        width={100}
        height={100}
      />
      <div>
        <h1>
          <h2 className="pb-3 text-sm uppercase tracking-[15px] text-gray-300">
            Javascript Developer
          </h2>
          <p className="px-5 text-5xl font-semibold lg:text-6xl">
            <span className="mr-3">{text}</span>

            <Cursor cursorColor="#F7AB0A" />
          </p>
        </h1>
      </div>
      <div className="z-20 pt-5">
        <Link href="#about">
          <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-300 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/70">
            About
          </button>
        </Link>
        <Link href="#experience">
          <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-300 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/70">
            Experience
          </button>
        </Link>
        <Link href="#skills">
          <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-300 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/70">
            Skills
          </button>
        </Link>
        <Link href="#projects">
          <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-300 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/70">
            Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
// TODO optimize image for next and in round
// TODO update the background circles graphics
