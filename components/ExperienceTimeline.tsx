import ciCdLine from "@iconify/icons-clarity/ci-cd-line";
import css3 from "@iconify/icons-logos/css-3";
import djangoIcon from "@iconify/icons-skill-icons/django";
import dockerIcon from "@iconify/icons-logos/docker";
import fileSqlBold from "@iconify/icons-ph/file-sql-bold";
import firebaseIcon from "@iconify/icons-logos/firebase";
import javascriptIcon from "@iconify/icons-logos/javascript";
import pythonIcon from "@iconify/icons-logos/python";
import React from "react";
import reactIcon from "@iconify/icons-logos/react";
import reduxIcon from "@iconify/icons-skill-icons/redux";
import styledcomponentsIcon from "@iconify/icons-skill-icons/styledcomponents";
import tailwindcssDark from "@iconify/icons-skill-icons/tailwindcss-dark";
import { Icon } from "@iconify/react";

type Props = {};

const ExperienceTimeline = (props: Props) => {
  return (
    <div className=" ml-0 sm:mt-40 md:ml-12 lg:w-2/3">
      <div className="container mx-auto max-h-screen w-full overflow-y-auto md:mt-5">
        <div className="wrap relative h-full overflow-hidden py-10 px-2 md:px-10">
          {/* vertical line between timeline */}
          <div
            className="absolute right-1/2 h-full rounded border-2  border-yellow-500"
            style={{ width: "1px" }}
          ></div>
          {/* item 1 - current */}
          <div className="left-timeline mb-8 flex w-full  items-center justify-between">
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">AUG 2023 - ...</p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl">
                Personal project
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Currently working on a personal project which solves the problem
                of researchers.
              </p>
            </div>
          </div>
          {/* item 2 - bootcamp*/}

          <div className="right-timeline mb-8 flex w-full items-center justify-between  border-l-red-700">
            <div className="order-1 flex w-5/12 flex-wrap items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon
                  icon={javascriptIcon}
                  className="h-6 w-6 md:h-14 md:w-14"
                />
                <p className="text-xs">Javascript</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={reactIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">React</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={reduxIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">Redux</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={css3} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">CSS3</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon
                  icon={styledcomponentsIcon}
                  className="h-6 w-6 md:h-14 md:w-14"
                />
                <p className="text-xs">Styled Components</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon
                  icon={tailwindcssDark}
                  className="h-6 w-6 md:h-14 md:w-14"
                />
                <p className="text-xs">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={pythonIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">Python</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={djangoIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">Django</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={fileSqlBold} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">SQL</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={firebaseIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">Firebase</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={ciCdLine} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">CI/CD</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-1">
                <Icon icon={dockerIcon} className="h-6 w-6 md:h-14 md:w-14" />
                <p className="text-xs">Docker</p>
              </div>
            </div>
            <div className="order-1  w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-yellow-300">
                MAY 2023 - JUL 2023 (3 months)
              </p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl">
                Full stack Bootcamp, Munich, Germany
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                To hone my skills in full stack development, I did a bootcamp at
                Constructor learning, Munich germany. Here i gained more in
                depth knowledge in React and Django besides i learned DevOps
                with CI/CD pipelines and Docker.
              </p>
              <p className="mt-3 font-bold">Project: Skiline connect</p>
              <p>
                App to locate skiers and plan meeting points effectively through
                the app. Built this feature part of the existing project.
              </p>
            </div>
          </div>
          {/* item 3 - bfz */}

          <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1 w-5/12"></div>
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">
                {" "}
                MAR 2023 - APR 2023 (2 months)
              </p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl">
                bfz ausbildung, Munich, Germany
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Government funded training to learn German language and to get a
                job in Germany.
              </p>
            </div>
          </div>
          {/* item 4  - kid kid*/}

          <div className="right-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1  w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-yellow-300">
                JUN 2022 - FEB 2023 (9 months)
              </p>
              <h4 className="mb-3 text-left  text-lg font-bold md:text-2xl">
                Taking care of my kid @ Munich, Germany.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Since we landed in Germany in the end of may, I have been taking
                care of my kid because my wife is working full time.
              </p>
            </div>
          </div>
          {/* item 5 - prenetics */}

          <div className="left-timeline mb-8 flex w-full  items-center justify-between">
            <div className="order-1  w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">
                SEP-2021 - MAY-2022 (9 months)
              </p>
              <h4 className="mb-3 text-right  text-lg font-bold md:text-2xl">
                Full Stack Developer @ Prenetics innovation lab, Chennai, India.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Prenetics A life science company, rapid covid testing is one of
                their products. Adding and maintaining new features for internal
                operation dashboard for covid test result management using
                React.js and Redux Toolkit for state management. Built REST API
                module with express.js for bulk profile creation from *.csv
                files and implemented corresponding UI in the operation
                dashboard. Tweaking the existing User role based access
                management adding new roles of covid test results status tracker
                as per rapidly changing business requirement. Updated the sample
                tracker REST API for newly added test Kit types with Client side
                form validation. Participated in weekly code reviews to ensure
                code quality.
              </p>
            </div>
          </div>
          {/* item 6 - myAbhyas */}

          <div className="right-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1  w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-yellow-300">
                MAR 2021 - AUG 2021 (6 months)
              </p>
              <h4 className="mb-3 text-left  text-lg font-bold md:text-2xl">
                Junior Full Stack Developer @ ANP My Abhyas Pvt Ltd, Bangalore,
                India.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                MyAbhyas is an e-learning platform for school students.
                Performed backend role and developed RESTful API's with Node.js,
                express.js, Mongodb and Mongoose and integrating with the front
                end. Developed Admin Panel for monitoring the student
                performance and attendance details with React.js. Consulted with
                the team and supported users throughout the full lifecycle of
                software product development.
              </p>
            </div>
          </div>
          {/* item 7 - Corona break */}

          <div className="left-timeline mb-8 flex w-full  items-center justify-between">
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">
                APR 2020 - FEB 2021 (11 months)
              </p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl">
                Corona lockdown.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Ppch.. you know about it.
              </p>
            </div>
          </div>
          {/* item 8 - research associate  */}

          <div className="right-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
            <div className="order-1  w-5/12 px-1 py-4 text-left">
              <p className="mb-3 text-base text-yellow-300">
                OCT 2019 - MAR 2020 (6 months)
              </p>
              <h4 className="mb-3 text-left  text-lg font-bold md:text-2xl">
                Research Associate @ CSIR-IMTECH, Chandigarh, India.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Elucidation of uncharacterised Toxin -Antitoxin pair of
                proteins.
              </p>
            </div>
          </div>

          {/* item 9- post doc */}

          <div className="left-timeline mb-8 flex w-full  items-center justify-between">
            <div className="order-1 w-5/12 px-1 py-4 text-right">
              <p className="mb-3 text-base text-yellow-300">
                JUN 2017 - JUN 2019 (2 years)
              </p>
              <h4 className="mb-3 text-lg font-bold md:text-2xl">
                Post Doctoral Researcher (NPDF) @ CSIR-IMTECH, Chandigarh,
                India.
              </h4>
              <p className="text-sm leading-snug text-gray-50 text-opacity-100 md:text-base">
                Structural studies on white spot syndrome virus protein wsv069.
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <img
          className="-mt-41 mx-auto "
          src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
        />
      </div>
    </div>
  );
};

export default ExperienceTimeline;
