import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:mahes1287@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
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
            <p className="text-2xl hover:text-[#F7AB0A]">+49-15510048133</p>
          </div>
          <div className="flex items-center justify-center space-x-5 text-center">
            <EnvelopeIcon className="h-6 w-6 animate-bounce text-[#F7AB0A]" />
            <p className="text-2xl hover:text-[#F7AB0A]">
              <a href="mailto:mahes1287@gmail.com">mail me</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-5 text-center">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl hover:text-[#F7AB0A]">
              Fasangarten, Munich, Germany
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-2"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
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

// TODO onsubmit is not triggering the send email with text in the body.
