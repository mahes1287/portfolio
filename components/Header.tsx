import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex p-5 items-start justify-between mx-auto sticky top-0 max-w-7xl z-20 xl:items-center ">
      <div className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/mahes1287"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://linkedin.com/in/maheshwaranv"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/mahes1287"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div className="cursor-pointer flex flex-row items-center">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get in touch
        </p>
      </div>
    </header>
  );
}
