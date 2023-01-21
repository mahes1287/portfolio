import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left ">
      <h1 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h1>

      <div className="flex flex-col space-y-10">
        <h4 className="text-center text-4xl font-semibold">
          Incase, I have got what you need, then{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets talk</span>
        </h4>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-5 text-center">
            <PhoneIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+49-15510048133</p>
          </div>
          <div className="flex items-center justify-center space-x-5 text-center">
            <EnvelopeIcon className="h-6 w-6 animate-bounce text-[#F7AB0A]" />
            <p className="text-2xl">mahes1287@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5 text-center">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">Fasangarten, Munich, Germany</p>
          </div>
        </div>

        <form className="mx-auto flex w-fit flex-col space-y-2">
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="rounded-md bg-[#F7AB0A] px-4 py-4 text-lg font-bold text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
