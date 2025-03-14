import About from "./about-section";
import { Experience } from "./experience";
import { HeroHighlightDemo } from "./hero-section";
import Marketing from "./marketing";
import Skills from "./skill";

export default function Home() {
  return (
    <>
      <HeroHighlightDemo />
      <About />
      <Experience />
      <Marketing />
      <Skills />
    </>
  );
}
