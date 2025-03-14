import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024 - 2025",
      content: (
        <div>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
            Aayan Infotech
          </h2>
          <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
            Software Developer
          </h6>
          <div className="flex">
            <ul className="list-disc w-full flex flex-col">
              <li className="text-lg lg:text-xl">
                Focused on Giving better UI Interface as well as experience to
                the customers
              </li>
              <li className="text-lg lg:text-xl">
                Significantly contributed to the project’s success by
                single-handedly managing the entire project life cycle,
                including development, deployment, documentation, and database
                management
              </li>
              <li className="text-lg lg:text-xl">
                Implemented a modular architecture, effectively separating the
                tightly coupled front and back-end components, enhancing
                maintainability and flexibility
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
            Duplex technology Services
          </h2>
          <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
            Frontend Developer
          </h6>
          <div className="flex">
            <ul className="list-disc w-full flex flex-col">
              <li className="text-lg lg:text-xl">
                Focused on Giving better UI Interface as well as experience to
                the customers
              </li>
              <li className="text-lg lg:text-xl">
                Collaborated to the other backend developer to develop the
                website using PHP as a backend tool
              </li>
              <li className="text-lg lg:text-xl">
                Increased website performance using modular techniques and
                maintained a clean and efficient codebase
              </li>
              <li className="text-lg lg:text-xl">
                Collaborated to marketers to give a high performance website
                with SEO friendly techniques
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-xl lg:text-4xl font-bold">
            Augurs technologies
          </h2>
          <h6 className="text-neutral-800 dark:text-neutral-200 mb-8 text-sm lg:text-xl font-bold">
            Frontend Developer
          </h6>
          <div className="flex">
            <ul className="list-disc w-full flex flex-col">
              <li className="text-lg lg:text-xl">
                Focused on Giving better UI Interface as well as experience to
                the customers
              </li>
              <li className="text-lg lg:text-xl">
                Focused on building and learning and make high performance
                website using Reactjs and Vanilla javascript with PWA
              </li>
              <li className="text-lg lg:text-xl">
                Collaborated to the other backend developer to develop the
                website using PHP and Python as a backend tool
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="w-full text-change">
        <Timeline data={data} />
      </div>
    </>
  );
}
