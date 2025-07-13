import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { LetterPullUp } from "@/components/ui/letter-pullup";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function About() {
  return (
    <div id="about">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <LetterPullUp
          className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="About Me"
        />
        <TypingAnimation className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-lg  lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          I am Daksh from Lucknow , having more than 3 years of experience in
          software development and currently working as a Full Stack Developer.
          I have a passion about creating dynamic web experiences. From frontend
          to backend, I thrive on solving complex problems with clean, efficient
          code and exceptional user interfaces.
        </TypingAnimation>
        <TypingAnimation
          delay={34000}
          className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-lg  lg:text-3xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight"
        >
          I believe in waking up each day eager to make a difference!
        </TypingAnimation>
      </BackgroundLines>
    </div>
  );
}
