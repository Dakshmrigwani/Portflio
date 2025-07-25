import About from "./about-section";
import Education from "./education";
import { Experience } from "./experience";
import { HeroHighlightDemo } from "./hero-section";
import Marketing from "./marketing";
import Projects from "./projects";
import Skills from "./skill";

export default function Home() {
  return (
    <>
      <HeroHighlightDemo />
      <About />
      <Skills />
      <Experience />
      <Education />

      {/* <Projects /> */}
      <Marketing />
    </>
  );
}
