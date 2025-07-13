import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <h1 className="text-xl lg:text-3xl font-bold text-light pt-20 pl-5 pb-20" id="project">
        My Projects
      </h1>
      <ExpandableCardDemo />
    </>
  );
}
