"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-4xl h-full md:h-[80vh] flex flex-col bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-1/2">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <motion.h3
                    layoutId={`title-${active.title}-${id}`}
                    className="text-2xl font-bold text-white"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-neutral-200"
                  >
                    {active.description}
                  </motion.p>
                </div>
              </motion.div>

              <div className="flex-1 overflow-auto p-6">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="prose dark:prose-invert max-w-none"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
                <div className="mt-6">
                  <motion.a
                    layout
                    href={active.ctaLink}
                    target="_blank"
                    className="inline-block px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="group cursor-pointer"
            whileHover={{ y: -5 }}
          >
            <div className="h-full bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md">
              <motion.div layoutId={`image-${card.title}-${id}`} className="relative h-48">
                <img
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
              
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-lg font-semibold text-neutral-800 dark:text-white mb-1"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-300 text-sm mb-3"
                >
                  {card.description}
                </motion.p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    Click to expand
                  </span>
                  <motion.span
                    layout
                    className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-white text-xs rounded-full"
                  >
                    {card.ctaText}
                  </motion.span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

const cards = [
  {
    description: "Melancholic cinematic music style",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => (
      <div>
        <h3 className="text-xl font-bold mb-4">Project Details</h3>
        <p className="mb-4">
          Lana Del Rey's "Summertime Sadness" is a melancholic ballad that showcases her signature cinematic style. 
          The song features haunting vocals and introspective lyrics about love and loss.
        </p>
        <div className="space-y-2">
          <p><strong>Technologies:</strong> Digital audio workstation, vocal processing</p>
          <p><strong>Year:</strong> 2012</p>
          <p><strong>Role:</strong> Music production</p>
        </div>
      </div>
    ),
  },
  {
    description: "Soulful Punjabi vocals",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => (
      <div>
        <h3 className="text-xl font-bold mb-4">Project Details</h3>
        <p className="mb-4">
          Babbu Maan's "Mitran Di Chhatri" is a soulful Punjabi track that blends traditional 
          instrumentation with contemporary production techniques.
        </p>
        <div className="space-y-2">
          <p><strong>Technologies:</strong> Traditional Punjabi instruments, mixing</p>
          <p><strong>Year:</strong> 2005</p>
          <p><strong>Role:</strong> Sound engineering</p>
        </div>
      </div>
    ),
  },
  {
    description: "Powerful heavy metal anthem",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => (
      <div>
        <h3 className="text-xl font-bold mb-4">Project Details</h3>
        <p className="mb-4">
          Metallica's "For Whom The Bell Tolls" is a classic heavy metal track featuring 
          powerful riffs and intense drumming that defined the genre.
        </p>
        <div className="space-y-2">
          <p><strong>Technologies:</strong> Electric guitars, drum recording</p>
          <p><strong>Year:</strong> 1984</p>
          <p><strong>Role:</strong> Audio production</p>
        </div>
      </div>
    ),
  },
  {
    description: "Bollywood romantic soundtrack",
    title: "Aap Ka Suroor",
    src: "https://assets.aceternity.com/demos/aap-ka-suroor.jpeg",
    ctaText: "View Project",
    ctaLink: "#",
    content: () => (
      <div>
        <h3 className="text-xl font-bold mb-4">Project Details</h3>
        <p className="mb-4">
          Himesh Reshammiya's "Aap Ka Suroor" is a romantic Bollywood soundtrack 
          featuring his distinctive nasal vocals and melodic compositions.
        </p>
        <div className="space-y-2">
          <p><strong>Technologies:</strong> Film scoring, vocal effects</p>
          <p><strong>Year:</strong> 2006</p>
          <p><strong>Role:</strong> Music direction</p>
        </div>
      </div>
    ),
  },
];