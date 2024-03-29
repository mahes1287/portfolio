import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-[rgb(36,36,36)] text-white   overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Maheshwaran Velusamy Portfolio</title>
        <meta name="description" content="Built by maheshwaran velusamy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <section className="snap-start" id="#hero">
          <Hero />
        </section>

        <section className="snap-center" id="about">
          <About />
        </section>

        <section id="experience" className="snap-start">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
    </div>
  );
}

// TODO rendering not perfectly in mobile landscape mode. need to be fixed

// TODO scrollbar in experience and projects need to be fixed.
