"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

export function HeroHighlightDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "Websites",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "&",
    },
    {
      text: "Apps",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
    },
    {
      text: "Us.",
    },
  ];

  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-6xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Hi I am Daksh
          <br />
          <Highlight className="text-black dark:text-white">
            Full Stack Developer
          </Highlight>
          <TypewriterEffect words={words} className="my-3 text-lg lg:text-4xl" />
          <div className="max-w-lg mx-auto flex justify-between align-center mt-8">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-5 text-xs lg:text-lg"
            >
              <span>Contact Me</span>
            </HoverBorderGradient>
            <InteractiveHoverButton className="text-xs lg:text-lg">Download Resume</InteractiveHoverButton>
          </div>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
