import ExpandableCardDemo from "@/components/expandable-card-demo-grid";
import Image from "next/image";
import Carousel from "@/components/ui/carousel";
import project from "../Images/project1.png";

export default function Projects() {
  const slideData = [
    {
      title: "Trade Hunter",
      button: "Explore Project",
      src: "/project1.png",
      link: "https://tradehunters.com.au/",
    },
    {
      title: "Discount Door",
      button: "Explore Project",
      src: "/project2.png",
      link: "https://www.discountdoorandwindow.com/",
    },
    {
      title: "Theraphy sync",
      button: "Explore Project",
      src: "/project3.png",
      link: "http://34.226.30.17:5052/",
    },
    {
      title: "Bitcoin ABCS",
      button: "Explore Project",
      src: "/project4.png",
      link: "https://bitcoinabcs.org/",
    },
    {
      title: "Ralpel",
      button: "Explore Project",
      src: "/project5.png",
      link: "https://ralpel.com/",
    },
    {
      title: "Clinic Management System",
      button: "Explore Project",
      src: "/project6.png",
      link: "https://clinic-management-eta-one.vercel.app/",
    },
  ];
  return (
    <>
      <h1
        className="text-xl lg:text-3xl font-bold text-light pt-20 pl-5 pb-20"
        id="project"
      >
        My Projects
      </h1>
      <div className="relative overflow-hidden w-full h-full pb-20">
        <Carousel slides={slideData} />
      </div>
    </>
  );
}
