import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
type formDataProps = {
  subject: string;
  name: string;
  message: string;
  email: string;
};

type Props = {};

export default function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<formDataProps>();
  const onSubmit: SubmitHandler<formDataProps> = (formData) => {
    window.location.href = `mailto:mahes1287@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
  return (
    <div className=" relative mx-auto mb-20 flex h-screen w-full flex-col items-center justify-evenly px-10 text-center md:max-w-7xl md:flex-row md:text-left ">
      <h1 className="absolute top-20 text-2xl uppercase tracking-[20px] text-gray-500">
        Contact
      </h1>

      <div className="mt-24 flex flex-col space-y-8 sm:px-5 md:mt-40">
        <h4 className="text-md text-center font-semibold md:text-2xl">
          In case I have what you want, then{" "}
          <span className="underline decoration-[#F7AB0A]/50">Lets talk</span>
        </h4>

        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center justify-center space-x-5 text-center">
            <PhoneIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="text-xl hover:text-[#F7AB0A]">+49-15168553984</p>
          </div>
          <div className="flex items-center justify-center space-x-5 text-center">
            <EnvelopeIcon className="h-6 w-6 animate-bounce text-[#F7AB0A]" />
            <p className="text-xl hover:text-[#F7AB0A]">
              <a href="mailto:mahes1287@gmail.com">mail me</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-2 text-center md:space-x-5">
            <MapPinIcon className="h-6 w-6 animate-pulse text-[#F7AB0A]" />
            <p className="text-xl hover:text-[#F7AB0A]">München, Germany</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-fit flex-col space-y-1"
        >
          <div className="flex flex-col  md:flex-row md:space-x-2">
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
            className="rounded-md bg-[#F7AB0A] px-1 py-2 text-lg font-bold text-black md:px-4 md:py-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// TODO onsubmit is not triggering the send email with text in the body.
