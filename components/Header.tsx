import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header>
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
      <div>
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm">Get in touch</p>
      </div>
    </header>
  );
}
