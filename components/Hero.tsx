import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCorcles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, am Mahesh", "<More-Coffee-More-Code.tsx />"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <BackgroundCorcles />
      <h1>
        <p>
          {text}
          <Cursor cursorColor="#F75" />
        </p>
      </h1>
    </div>
  );
}
