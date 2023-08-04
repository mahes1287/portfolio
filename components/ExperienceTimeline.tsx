import React from "react";

type Props = {};

const ExperienceTimeline = (props: Props) => {
  return (
    <div className="container mx-auto max-h-screen w-full overflow-y-auto  ">
      <div className=" relative  p-10">
        {/* vertical line between timeline */}
        <div
          className="absolute right-1/2 h-full rounded border-2  border-yellow-500"
          style={{ width: "1px", borderColor: "#00ff00" }}
        ></div>
        {/* item 1 */}
        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 px-1 py-4 text-right">
            <p className="mb-3 text-base text-yellow-300">1-6 May, 2021</p>
            <h4 className="mb-3 text-lg font-bold md:text-2xl">
              Full Stack Developer
            </h4>
            <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
              Pick your favourite event(s) and register in that event by filling
              the form corresponding to that event. Its that easy :)
            </p>
          </div>
        </div>
        {/* item 2 */}

        <div className="right-timeline mb-8 flex w-full items-center justify-between  border-l-red-700">
          <div className="order-1 w-5/12"></div>
          <div className="order-1  w-5/12 px-1 py-4 text-left">
            <p className="mb-3 text-base text-yellow-300">6-9 May, 2021</p>
            <h4 className="mb-3 text-lg font-bold md:text-2xl">
              Participation
            </h4>
            <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
              Participate online. The links for your registered events will be
              sent to you via email and whatsapp groups. Use those links and
              show your talent.
            </p>
          </div>
        </div>
        {/* item 3 */}

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="order-1 w-5/12 px-1 py-4 text-right">
            <p className="mb-3 text-base text-yellow-300"> 10 May, 2021</p>
            <h4 className="mb-3 text-lg font-bold md:text-2xl">
              Result Declaration
            </h4>
            <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
              The ultimate genius will be revealed by our judging panel on 10th
              May, 2021 and the resukts will be announced on the whatsapp groups
              and will be mailed to you.
            </p>
          </div>
        </div>

        {/* item 4 */}

        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>

          <div className="order-1  w-5/12 px-1 py-4 text-left">
            <p className="mb-3 text-base text-yellow-300">12 May, 2021</p>
            <h4 className="mb-3 text-left  text-lg font-bold md:text-2xl">
              Prize Distribution
            </h4>
            <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
              The winners will be contacted by our team for their addresses and
              the winning goodies will be sent at their addresses.
            </p>
          </div>
        </div>
      </div>
      {/* bottom image */}
      <img
        className="mx-auto -mt-36 md:-mt-36"
        src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
      />
    </div>
  );
};

export default ExperienceTimeline;
