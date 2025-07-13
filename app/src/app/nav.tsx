"use client";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconUserBolt,
  IconBriefcase2Filled,
  IconBasketCog,
  IconBackpack,
  IconCode,
  IconPhone,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
export default function SideNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About",
      icon: (
        <IconUserBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Skills",
      icon: (
        <IconBasketCog className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skill",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase2Filled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Education",
      icon: (
        <IconBackpack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#education",
    },
    {
      title: "Project",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#project",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Dakshmrigwani",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "www.linkedin.com/in/daksh-mrigwani",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "tel:8528667236",
    },
    {
      title: "Email ME",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:mrigwanidaksh@gmail.com",
    },
  ];

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  const handleClick = (href: string) => {
    if (href.startsWith("#")) {
      const id = href.substring(1);
      smoothScrollTo(id);
    } else {
      // Handle external links if needed
      window.location.href = href;
    }
  };
  return (
    <div className="fixed inset-x-0 bottom-8 z-10 flex justify-center">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links.map((link) => ({
          ...link,
          onClick: () => handleClick(link.href),
        }))}
      />
    </div>
  );
}
